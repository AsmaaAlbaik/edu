var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser');
    const rollup = require('gulp-better-rollup');
    const babel = require('rollup-plugin-babel');
    const resolve = require('rollup-plugin-node-resolve');
    const commonjs = require('rollup-plugin-commonjs');
    const json = require('@rollup/plugin-json');

    sass.compiler = require('node-sass');

// this task for styles to make compile for SCSS code and to make autoprefixer and make source map
gulp.task('styles', function () {
    return gulp.src('./assets/css/*.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 4 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
});


//gulp css base file task
gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'assets/css/sass/components/sweetAlert.min.css',
        'assets/css/sass/components/_content-placeholder.scss',

    ])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('global.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
});



//gulp js file for all page
gulp.task('allPage', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'assets/js/plugin/popper.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery-validation/dist/jquery.validate.min.js',
        'assets/js/pages/allPage.js',
        'assets/js/component/mobileMenu.js',
        'assets/js/component/content-placeholder.js',
        'assets/js/component/custom-input.js',
    ])
    .pipe(concat('allPage.js'))
    // .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    // .pipe(terser())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});  

//gulp js file for student-dashboard page
gulp.task('student-dashboard-plugin', function () {
    return gulp.src([
        'node_modules/jquery-circle-progress/dist/circle-progress.min.js',
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'node_modules/intro.js/minified/intro.min.js',
        // 'node_modules/intro.js/minified/intro.min.js',
        'node_modules/randomcolor/randomColor.js',
        'node_modules/material-avatar/material-avatar.js',
    ])
    .pipe(concat('student-dashboard-plugin.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    // .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});


//gulp js file for student-dashboard page
gulp.task('student-dashboard', function () {
    return gulp.src([
        'assets/js/component/circle-progress.js',
        'assets/js/component/intro.js',
        'assets/js/component/player.js',
        'assets/js/component/collapse.js',
        'assets/js/pages/student.js',
        'assets/js/component/avatar.js',
        'assets/js/component/custom-input.js',
    ])
    .pipe(concat('student-dashboard.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});
//gulp js file for student-subscription page
gulp.task('student-subscription', function () {
    return gulp.src([
        'node_modules/jquery-circle-progress/dist/circle-progress.min.js',
        'assets/js/component/circle-progress.js',
    ])
    .pipe(concat('student-subscription.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

//gulp js file for profile page
gulp.task('teacher-profile', function () {
    return gulp.src([
        'node_modules/aws-sdk/dist/aws-sdk.min.js',
        'assets/js/plugin/intlTelInput.js',
        'node_modules/select2/dist/js/select2.full.min.js',
        'node_modules/dropify/dist/js/dropify.min.js',
        'assets/js/component/dropify.js',
        'assets/js/component/select2.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/view-password.js',
        'assets/js/pages/teacher-profile.js',


    ])
    .pipe(concat('teacher-profile.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

//gulp js file for subscription page
gulp.task('subscription', function () {
    return gulp.src([
        // 'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'assets/js/plugin/intlTelInput.js',
        // 'assets/js/plugin/tel-input.js',
        'assets/js/component/circle-progress.js',
        'assets/js/component/jquery-steps.js',
        'assets/js/component/payment-steps.js',
        'assets/js/component/view-password.js',
        'assets/js/component/custom-input.js',
        'assets/js/component/visitor-form-validation.js',
        // 'assets/js/component/owl-carousel.js',
        'node_modules/dropify/dist/js/dropify.min.js',
        // 'node_modules/aws-sdk/dist/aws-sdk.min.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/collapse.js',
        'assets/js/pages/student.js',
        'assets/js/pages/subscription.js',
        'assets/js/component/dropify.js',

    ])
    .pipe(concat('subscription.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

//gulp js file for subscription page
gulp.task('landing', function () {
    return gulp.src([
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/sweetalert2/dist/sweetalert2.min.js',
        'assets/js/component/owl-carousel.js',
        'assets/js/plugin/jquery.fancybox.min.js',
        'assets/js/pages/landing-page.js',
        
    ])
    .pipe(concat('landing.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('teacher-register-plugin', function () {
    return gulp.src([
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'node_modules/dropify/dist/js/dropify.min.js',
        'node_modules/select2/dist/js/select2.full.min.js',
    
    ])
    .pipe(concat('register-plugin.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    // .pipe(terser())

    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('teacher-register', function () {
    return gulp.src([
        // 'node_modules/owl.carousel/dist/owl.carousel.min.js',        
        'assets/js/plugin/intlTelInput.js',
        // 'assets/js/plugin/tel-input.js',
        'assets/js/component/jquery-steps.js',
        'assets/js/component/view-password.js',
        'assets/js/component/custom-input.js',
        'assets/js/component/visitor-form-validation.js',
        // 'assets/js/component/owl-carousel.js',
        'assets/js/component/dropify.js',
        'assets/js/component/select2.js',
        // 'node_modules/dropzone/dist/min/dropzone.min.js'
    ])
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(json())
    .pipe(rollup({ plugins: [json({compact: true}), babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(concat('teacher-register.js'))  
    .pipe(terser())
       // Stop the process if an error is thrown.
    //    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    // .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('login', function () {
    return gulp.src([
        'assets/js/component/view-password.js',
        'assets/js/component/visitor-form-validation.js',
    ])
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(json())
    .pipe(rollup({ plugins: [json({compact: true}), babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(concat('login.js'))  
    .pipe(terser())
       // Stop the process if an error is thrown.
    //    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    // .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('search', function () {
    return gulp.src([
        // 'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'assets/js/plugin/intlTelInput.js',
        // 'assets/js/plugin/tel-input.js',
        'assets/js/component/jquery-steps.js',
        'assets/js/component/view-password.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/visitor-form-validation.js',
        // 'assets/js/component/owl-carousel.js',
        'assets/js/component/custom-input.js',
    ])
    .pipe(concat('search.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('home', function () {
    return gulp.src([
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'assets/js/plugin/intlTelInput.js',
        // 'assets/js/plugin/tel-input.js',
        'assets/js/component/jquery-steps.js',
        'assets/js/component/view-password.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/visitor-form-validation.js',
        'assets/js/component/owl-carousel.js',
        'assets/js/component/custom-input.js',
    ])
    .pipe(concat('home.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('service', function () {
    return gulp.src([
        // 'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'assets/js/plugin/intlTelInput.js',
        // 'assets/js/plugin/tel-input.js',
        'assets/js/component/jquery-steps.js',
        'assets/js/component/view-password.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/visitor-form-validation.js',
        // 'assets/js/component/owl-carousel.js',
        'assets/js/component/custom-input.js',
    ])
    .pipe(concat('service.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('about', function () {
    return gulp.src([
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/jquery-steps/build/jquery.steps.min.js',
        'assets/js/plugin/intlTelInput.js',
        // 'assets/js/plugin/tel-input.js',
        'assets/js/component/jquery-steps.js',
        'assets/js/component/view-password.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/visitor-form-validation.js',
        'assets/js/component/owl-carousel.js',
        'assets/js/component/custom-input.js',
    ])
    .pipe(concat('about.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});
//gulp js file for profile page
gulp.task('profile', function () {
    return gulp.src([
        'node_modules/aws-sdk/dist/aws-sdk.min.js',
        'node_modules/dropify/dist/js/dropify.min.js',
        'node_modules/select2/dist/js/select2.full.min.js',
        'assets/js/plugin/intlTelInput.js',
        'assets/js/component/select2.js',
        // 'assets/js/component/custom-input.js',
        'assets/js/component/view-password.js',
        'assets/js/pages/profile.js',
        'assets/js/component/dropify.js',

    ])
    .pipe(concat('profile.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
});



// gulp.task('visitor', function () {
//     return gulp.src([
//         'node_modules/owl.carousel/dist/owl.carousel.min.js',
//         'node_modules/jquery-steps/build/jquery.steps.min.js',
//         'assets/js/plugin/intlTelInput.js',
//         // 'assets/js/plugin/tel-input.js',
//         'assets/js/component/jquery-steps.js',
//         'assets/js/component/view-password.js',
//         // 'assets/js/component/custom-input.js',
//         'assets/js/component/visitor-form-validation.js',
//         'assets/js/component/owl-carousel.js',
//     ])
//     .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
//     .pipe(concat('visitor.js'))
//     .pipe(sourcemaps.init({loadMaps: true}))

//     .pipe(terser())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./dist/js'))
// });

// auto watch
gulp.task('default', function () {
    watch('./assets/css/**/*.scss', gulp.series('styles'));
    watch('./assets/js/**/*.js', gulp.series('student-dashboard', 'student-subscription', 'about', 'home', 'allPage', 'landing'));
    watch('./assets/js/**/*.js', gulp.series('subscription','profile','teacher-register','search','teacher-profile', 'service'));
});
