var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('css',function () {
	gulp.src([
     './css/bootstrap.min.css',
     './css/app.css',
	])
	.pipe(concat('libs-style.css'))
	.pipe(cssMin())
	.pipe(gulp.dest('./css'));
});
// gulp.task('default',['css']);
gulp.task('scripts',function () {
	gulp.src([
     './js/app.js',
     './js/jquery-1.12.0.min.js',
     './js/knockout.js',
     './js/bootstrap.min.js',
     
    ])
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
	
});
gulp.task('default',['css','scripts']);
