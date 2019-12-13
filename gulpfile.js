const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync').create()
const less = require('gulp-less')

gulp.task('less', () => {
  return gulp.src('./assets/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('./styles'))
})

gulp.task('copy_media', () => {
  return gulp.src('./assets/media/**/*')
    .pipe(gulp.dest('./media'))
})

gulp.task('gulp_nodemon', () => {
  nodemon({
  script: 'app.js'                       // this is where my express server is
  , ext: 'js'          // nodemon watches *.js, *.html, *.css, *.ejs, *.less files
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('sync', () => {
  browserSync.init({
    port: 3002,                          // this can be any port, it will show our app
    proxy: 'http://localhost:3001/',     // this is the port where express server works
    ui: { port: 3003 },                  // UI, can be any port
    reloadDelay: 1000                    // Important, otherwise syncing will not work
  })

  gulp.watch([
    './assets/media/**/*'
  ]).on('change', () => {
    return gulp.src('./assets/media/**/*')
      .pipe(gulp.dest('./media'))
  })

  gulp.watch([
    './**/*.less',
  ]).on('change', () => {
    return gulp.src('./assets/styles/main.less')
      .pipe(less())
      .pipe(gulp.dest('./styles'))
  })

  gulp.watch([
    './**/*.js',
    './**/*.html',
    './**/*.css',
    './**/*.ejs'
  ]).on("change", browserSync.reload)
});

// gulp.task('default', ['gulp_nodemon', 'sync'])
gulp.task('default', gulp.parallel('gulp_nodemon', 'copy_media', 'less', 'sync'))