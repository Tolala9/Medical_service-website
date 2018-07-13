var gulp       = require('gulp'),
watch          = require('gulp-watch'),
browserSync    = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
      server: {
        baseDir: "app"
      },
      notify: false
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.sass', function() {
    gulp.start('waitForStyles');
  });

  // watch('./app/assets/scripts/**/*.js', function() {
  //   gulp.start('waitForScripts');
  // });

});

gulp.task('waitForStyles', ['styles'], function(){
  return gulp.src('./app/temp/styles/style.css')
  .pipe(browserSync.stream());
});

// gulp.task('waitForScripts', ['scripts'], function(){
//   browserSync.reload();
// });

gulp.task('default', ['watch']);