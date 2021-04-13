const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

//Funcion que compila SASS
function css () {
    return src('src/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/css'))
}

//Compilar JavaScript
function javascript() {
    return src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./build/js'))
}

//Minificar Imagenes
function imagenes () {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

function versionWebp () {
    return src('src/img/**/*')
        .pipe(webp())
        .pipe(dest('./build/img'))
}

//WatchArchivos
function watchArchivos () {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
}


exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);