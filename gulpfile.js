/*
 * Minio Cloud Storage, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var gulp = require('gulp');
var util = require('gulp-util');
var del = require('del');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var babelify = require('babelify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var server = require('gulp-webserver');
var eslint = require('gulp-eslint');
var mainBowerFiles = require('main-bower-files');
var imagemin = require('gulp-imagemin');

var paths = {
  app: ['app/*.js',
        'app/*.jsx',
        'app/components/*.jsx',
        'app/actions/*.js',
        'app/stores/*.js',
        'app/modules/*.jsx'],
  lib: ['app/lib/*.js',
        'app/lib/**/*.js'],
  less : ['app/styles/*.less',
          'app/styles/**/*.less'],
  vendor: mainBowerFiles({ filter: new RegExp('.*js$', 'i') }),
  fonts : 'app/fonts/**/*',
  images : 'app/img/**/*'
}

var production = !!util.env.production

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('less', function () {
  return gulp.src('./app/styles/app.less') //path to your main less file
    .pipe(less())
    .pipe(production ? minifycss() : util.noop())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
  return gulp.src(paths.fonts, {base:'app'})
    .pipe(gulp.dest('dist'))
})

gulp.task('images', function() {
  return gulp.src(paths.images, {base:'app'})
    .pipe(production ? imagemin() : util.noop())
    .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('app', function() {
  return browserify({entries: './app/app.js', extensions: ['.jsx']}).transform(babelify)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(production ? streamify(uglify()) : util.noop())
    .pipe(gulp.dest('dist'))
})

gulp.task('vendor', function() {
  return gulp.src(paths.vendor)
    .pipe(concat('vendor.min.js'))
    .pipe(production ? uglify() : util.noop())
    .pipe(gulp.dest('dist'))
})

gulp.task('lib', function() {
  return gulp.src(paths.lib)
    .pipe(concat('lib.min.js'))
    .pipe(production ? uglify() : util.noop())
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['build'], function() {
  gulp.watch(paths.app, ['app'])
  gulp.watch(paths.vendor, ['vendor'])
  gulp.watch('app/index.html', ['html'])
  gulp.watch(paths.fonts, ['fonts'])
  gulp.watch(paths.images, ['images'])
  gulp.watch(paths.less, ['less'])
})

gulp.task('serve', ['watch'], function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true,
      proxies: [{
        source: '/rpc',
        target: 'http://localhost:9001/rpc'
      }]
    }))
})

gulp.task('lint', function () {
  return gulp.src(paths.app)
  // eslint() attaches the lint output to the eslint property
  // of the file object so it can be used by other modules.
    .pipe(eslint())
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('scripts', ['app', 'vendor', 'lib'])

gulp.task('build', ['less', 'fonts', 'images', 'html', 'scripts', 'lint'])

gulp.task('default', ['build'])
