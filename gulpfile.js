/*
 * Minio Cloud Storage, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var gulp = require('gulp');
var del = require('del');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('less', function () {
  return gulp.src('./app/styles/app.less') //path to your main less file
    .pipe(less())
    .pipe(minifycss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*', {base:"app"})
    .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts-react', function() {
  return browserify({entries: './app/scripts/minio/app.js', extensions: ['.jsx']}).transform('reactify')
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts-others', function() {
  return gulp.src(['app/scripts/extern/jquery.js', 'app/scripts/extern/bootstrap.js'])
    .pipe(concat('extern.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', ['scripts-react', 'scripts-others'])

gulp.task('build', ['less', 'fonts', 'html', 'scripts'])

gulp.task('default', ['build'])
