var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('less', function () {
	return gulp.src('./src/less/main.less')
	.pipe(sourcemaps.init())
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(csso())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function () {
	return gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function () {
	return gulp.src('./src/fonts/*.+(svg|ttf|woff)')
	.pipe(gulp.dest('./dist/fonts'));
});