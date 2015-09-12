var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var babelify = require('babelify');
var server = require('gulp-webserver');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

var paths = {
    main: ['app/*.js', 'app/modules/*.jsx'],
    lib: ['app/lib/*.js'],
    html: ['app/*.html'],
    gulpfile: ['gulpfile.js']
}

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('lib', function() {
    return gulp.src(paths.lib)
            .pipe(concat('lib.js'))
            .pipe(gulp.dest('dist'))
});

gulp.task('main', function() {
    return browserify({entries: './app/app.js', extensions: ['.jsx']}).transform(babelify)
            .bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest('dist'))
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
    gulp.watch(paths.lib, ['lib']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('serve', ['watch'], function() {
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

gulp.task('build', ['lib', 'main', 'html', 'lint']);

gulp.task('default', ['build']);
