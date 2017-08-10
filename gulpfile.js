const gulp = require('gulp');
var clean = require('gulp-rimraf');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const babel = require('gulp-babel-compile');
const webserver = require('gulp-webserver');

// gulp.task('default', () => {
//     gulp.watch(['src/**', 'test/**'], ['test']);
// });
gulp.task('default', ['dev:test-watch']);

gulp.task('clean', [], function() {
    console.log("Deleteing all files in dist folder");

    return gulp.src("./dist/*", { read: false }).pipe(clean({ force: true }));
});

gulp.task('dev:test', function() {
    return gulp.src('test/*.js')
        .pipe(mocha({
            compilers: 'js:babel-core/register'
        }))
        .on('error', gutil.log);
});

gulp.task('dev:test-watch', function() {
    return gulp.watch(['src/**', 'test/**'], ['dev:test']);
});


gulp.task('watch', ['default'], function() {
    return gulp.watch(['src/**'], ['default']);
});
/* CODE for build mode */

gulp.task('build', ['clean', 'build:test', 'build:move-index', 'webserver'], function() {
    console.log("Build done");
    gutil.log("all done");
});

gulp.task('webserver', function() {
    return gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8889
        }));
});

gulp.task('build:test', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({
            compilers: 'js:babel-core/register',
            reporter: 'mochawesome',
            reporterOptions: {
                reportDir: './',
                reportFilename: 'test-results',
                enableCharts: true
            }
        }))
        .on('error', gutil.log);
});

gulp.task('build:move-index', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./'));
});