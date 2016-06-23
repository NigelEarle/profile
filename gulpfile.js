const gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass');

gulp.task('scripts', function(){
  gulp.src('public/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(){
  gulp.src('public/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('public/js/*.js', ['scripts']);
  gulp.watch('public/scss/*.scss', ['styles'])
})

gulp.task('default', ['scripts', 'styles', 'watch']);