var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss =require('gulp-postcss');
var autoProfixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport =require('postcss-import');

gulp.task('default',()=>{
console.log('Gulp Task Created!!!!');
});

gulp.task('html',()=>{
console.log('May be you can edit html here....');
});



gulp.task('styles',function(){
    console.log('CSSS test');
return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([cssImport,cssvars,nested,autoProfixer]))
.pipe(gulp.dest('./app/temp/styles'));


    });
    


gulp.task('watch',function(){
watch('./app/index.html',function(){
gulp.start('html');
});

watch('./app/assets/styles/..',function(){
    gulp.start('styles');
    });
    

});


