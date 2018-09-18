var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('coreJs', function() {
	return gulp.src([
		'./app/assets/libs/Jquery_2.2.4/jquery_2.24.min.js',
		'./app/assets/libs/OwlCarousel/owl.carousel.js',
		'./app/assets/libs/Parallax/materianizeParallax.js',
		'./app/assets/libs/SlickSlider/slick-slider.js',
		'./app/assets/libs/RD-mailForm/rd-mailForm.js',
		'./app/assets/libs/UIToTop/ui-to-top.js',
		'./app/assets/libs/Swiper_3.4.2/Swiper.js',
		'./app/assets/libs/Select-2/select_2.js'
		])
	.pipe(concat('core.min.js'))
	// .pipe(uglify()) // minimize
	.pipe(gulp.dest('./app/temp/scripts/'))
	
});