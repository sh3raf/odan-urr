var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//compile
gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

//compile and watch
gulp.task('watch', function(){
    gulp.watch('app/scss/*.scss', gulp.series('sass')); 
    // Other watchers
  });