var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;

gulp.task('styles', function () {
	gulp.src('sass/*.scss')
		.pipe(sass({
			includePaths: bourbon,
			includePaths: neat
		}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function() {
	scripts = [
		'./js/src/required.js',
		'./js/src/*.js',
		'./js/src/**/*.js'
	];

	gulp.src(scripts)
		.pipe(concat('build.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));
});

gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', ['styles']);
    gulp.watch('./js/src/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);