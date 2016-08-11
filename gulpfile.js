var gulp = require('gulp');
var browserSync = require('browser-sync');
// var server = require('gulp-server-livereload');

gulp.task('server', function () {
    browserSync.init({
        port: 8080,
        open: false,
        server: {
            baseDir: "./"
        },
    });
    gulp.watch("app/**/*.*").on('change', browserSync.reload);;
    gulp.watch("./index.html").on('change', browserSync.reload);
});

// gulp.task('webserver', function() {
//     gulp.src('./')
//         .pipe(server({
//             defaultFile: 'index.html',
//             livereload: true,
//             directoryListing: true,
//             open: true
//         }));
// });
