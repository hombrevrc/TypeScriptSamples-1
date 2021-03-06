﻿/// <binding AfterBuild='default' Clean='clean' BeforeBuild='before' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],    
    typings : ['node_modules/@types/**/*.d.ts']
};

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*']).del("wwwroot/lib/**/*");
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('before', function () {
    gulp.src(paths.typings).pipe(gulp.dest('scripts/typings'));
}); 