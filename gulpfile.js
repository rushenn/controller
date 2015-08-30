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
  gulp.src('./app/styles/app.less') //path to your main less file
    .pipe(less())
    .pipe(minifycss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
  gulp.src('app/fonts/**/*', {base:"app"})
    .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', function() {
  browserify({entries: './app/scripts/minio/app.js', extensions: ['.jsx']}).transform('reactify')
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(streamify(uglify('app.min.js')))
    .pipe(gulp.dest('dist'))

  gulp.src('app/scripts/extern/*.js')
    .pipe(concat('extern.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))

})

gulp.task('build', ['less', 'fonts', 'html', 'scripts'])

gulp.task('default', ['build'])
