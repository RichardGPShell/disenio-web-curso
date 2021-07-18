const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const imagemin = require('gulp-imagemin');

function compilarSASS(done){
    return src('./src/scss/app.scss')
            .pipe( sass({
                outputStyle:'expanded'
            }) )
            .pipe(dest('./build/css') );
}

function minificarcss(done){
    return src('./src/scss/app.scss')
            .pipe( sass({
                outputStyle:'compressed'
            }) )
            .pipe(dest('./build/css') );
}

function imagenes(){
    return src('src/img/**/*')
    .pipe( imagemin() )
    .pipe( dest('./build/img') );
}

function watchChanges() {
    watch('./src/scss/**/*.scss', compilarSASS)
}


exports.compilarSASS = compilarSASS;
exports.imagenes = imagenes;
exports.watchChanges = watchChanges;