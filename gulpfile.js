/**
 * Created by Marilena on 21/02/16.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var gulpSequence = require('gulp-sequence').use(gulp);
var del = require('del');

gulp.task('browser-sync', function () {
    browserSync({
        proxy: "vincenzostano.dev"
    });
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('clean', function() {
    del(['build']);
});

gulp.task('default', gulpSequence('clean','sass','browser-sync'));