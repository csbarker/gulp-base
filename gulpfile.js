var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;

gulp.task('styles', function () {
	gulp.src('./src/sass/*.scss')
		.pipe(sass({
			includePaths: bourbon,
			includePaths: neat
		}))
        .pipe(gulp.dest('./public_html/css/'));
});

gulp.task('scripts', function() {
	scripts = [
		'./src/js/required.js',
		'./src/js/*.js',
		'./src/js/**/*.js'
	];

	gulp.src(scripts)
		.pipe(concat('build.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public_html/js/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/sass/*.scss', ['styles']);
    gulp.watch('./src/js/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);