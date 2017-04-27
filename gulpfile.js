var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');


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
	//.pipe(csso())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('html', function () {
	return gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('fonts', function () {
	return gulp.src('./src/fonts/*.+(svg|ttf|woff)')
	.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './dist'
		},
	})
});

gulp.task('watch', ['browserSync'], function (){
	gulp.watch('./src/less/**/*.less', ['less']);
	gulp.watch('./src/*.html', ['html']);
	gulp.watch('./src/fonts', ['fonts']);
	gulp.watch('./src/images/**/*', ['images']);
})