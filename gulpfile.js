var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('imagemin', function () {
    return gulp.src('img/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});

gulp.task('uglify', function () {
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['sass', 'imagemin', 'uglify']);