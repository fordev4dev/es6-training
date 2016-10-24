const path = require('path');

const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');

const gutil = require('gulp-util');
const log = gutil.log, colors = gutil.colors;

// https://gist.github.com/renegare/9173656
const KarmaServer = require('karma').Server;
const karmaParseConfig = require('karma/lib/config').parseConfig;

const outputDir = 'dist';
const karmaFile = 'karma.conf.js';
const es6Sources = [
  'src/**/*.js',
  // '!src/**/*.spec.js'
];

function runKarma(configFilePath, options, cb) {
  var config = karmaParseConfig(path.resolve(configFilePath), {});
  Object.keys(options).forEach(function(key) {
    config[key] = options[key];
  });

  new KarmaServer(config, function(exitCode) {
    log('Karma has exited with ' + colors.red(exitCode));
    cb();
    process.exit(exitCode);
  }).start();
}

gulp.task('test-once', function(cb) {
  runKarma(karmaFile, {
    autoWatch: false,
    singleRun: true
  }, cb);
});

gulp.task('test-watch', function(cb) {
  runKarma(karmaFile, {
    autoWatch: true,
    singleRun: false
  }, cb);
});

gulp.task('dev', ['init'], function(cb) {
  gulp.watch(es6Sources, ['es6']);
  runKarma(karmaFile, {
    autoWatch: true,
    singleRun: false
  }, cb);
});

gulp.task('es6', function() {
  gulp.watch(es6Sources, ['es6']);
});

gulp.task('es6', function () {
    return gulp.src(es6Sources)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(outputDir));
});

gulp.task('clean', function () {
    return gulp.src(outputDir, {read: false})
        .pipe(clean({force: true}));
});

gulp.task('init', function(cb) {
  runSequence('clean', 'es6', cb);
});

gulp.task('default', ['es6']);
