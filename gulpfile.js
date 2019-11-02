var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

// nunjucks template
gulp.task('nunjucks', function() {
  return gulp.src('dist/html/*.njk')
    .pipe(nunjucksRender({
      path: ['dist/templates/']
    }))
    .pipe(gulp.dest('dist'));
});

// watcher
gulp.task('watch', function() {
  gulp.watch('dist/**/*.njk', gulp.series('nunjucks'));
});

gulp.task('default', gulp.task('watch'));


