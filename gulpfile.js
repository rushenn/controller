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
var browserify = require('browserify');
var babelify = require('babelify');
var server = require('gulp-webserver');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');

var paths = {
  main: ['app/*.js', 'app/modules/*.jsx', 'app/lib/*.js'],
  font: ['app/fonts/**/*'],
  html: ['app/*.html'],
  gulpfile: ['gulpfile.js'],
  less: ['app/less/**/*.less']
}

var production = !!util.env.production

gulp.task('less', function () {
  return gulp.src('app/less/app.less')
    .pipe(less())
    .pipe(production ? minifyCSS() : util.noop())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('main', function() {
    return browserify({entries: './app/app.jsx', extensions: ['.jsx']}).transform(babelify)
            .bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest('dist'))
});

gulp.task('font', function() {
    return gulp.src(paths.font)
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('html', function() {
    return gulp.src('app/index.html')
            .pipe(gulp.dest('dist'))
});

gulp.task('lint', function () {
  return gulp.src(paths.main)
  // eslint() attaches the lint output to the eslint property
  // of the file object so it can be used by other modules.
    .pipe(eslint({
        ecmaFeatures: {
            modules: true
        }
    }))
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
    gulp.watch(paths.main, ['main']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.less, ['less']);
});

gulp.task('serve', ['build', 'watch'], function() {
    gulp.src('dist')
      .pipe(server({
        livereload: true,
        open: true,
        proxies: [{
          source: '/rpc',
          target: 'http://localhost:9001/rpc'
        }]
    }));
});

gulp.task('build', ['main', 'less', 'font', 'html', 'lint']);

gulp.task('default', ['build']);
