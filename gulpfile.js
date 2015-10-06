var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	minifyCss = require('gulp-minify-css');

var paths = {
  scripts: 'js/*.js',
  style: 'css/*.css'
};

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('css',['clean'], function () {
  return gulp.src(paths.style)
    .pipe(concatCss("style.css"))
    .pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('app/css/'))

    .pipe(notify('Done!'));
});

gulp.task('scripts',['clean'], function() {
  return gulp.src(paths.scripts)
  	.pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('app/js/'));
});



gulp.task('watch', function() {
  gulp.watch('css/*.css',['css']);
  gulp.watch('js/*.js',['scripts']);
});

gulp.task('default', ['css', 'scripts','images']);