var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default',()=>{
console.log('Gulp Task Created!!!!');
});

gulp.task('html',()=>{
console.log('May be you can edit html here....');
});



gulp.task('styles',()=>{
    console.log('May be you can edit CSS here....');
    });
    


gulp.task('watch',()=>{
watch('./app/index.html',function(){
gulp.start('html');
});

watch('./app/assets/..',function(){
    gulp.start('styles');
    });
    

});


