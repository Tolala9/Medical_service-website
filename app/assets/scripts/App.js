// 3rd party packages from NPM
// var $ = require('jquery');

// Our modules / classes
import Person 							from './modules/Person';
import OwlCarousel 					from './modules/owl-carousel';
import Parallax 						from './modules/materianize-parallax';
import SlickSlider 					from './modules/slick-slider';
import RDMailForm 					from './modules/rd-mail-form';
import CopyrightYear 				from './modules/copyright-year';
import UIToTop 							from './modules/ui-to-top';
import Select2 							from './modules/select-2';
import Swiper 							from './modules/swiper';
import RDNavbar 						from './modules/rd-navbar';
import Wow 									from './modules/wow';
import Counter 							from './modules/counter';
import ProgressLinear 			from './modules/progress-linear';
import ProgressBarCircle 		from './modules/progress-bar-circle';
import DateCountdown		 		from './modules/date-countdown';
import Schedule					 		from './modules/cd-schedule';
// import Scroller		 					from './modules/scroller';


// Instantiate a new object using our modules/classes
var john = new Person("John Doe", "blue");
john.greet();

var owlCarousel 				= new OwlCarousel(); 
var parallax 						= new Parallax();
var slick 							= new SlickSlider();
var rdMailForm 					= new RDMailForm();
var copyrightYear 			= new CopyrightYear();
var uitotop 						= new UIToTop();
var select2 						= new Select2(); 
var swiper 							= new Swiper(); 
var rdNavbar 						= new RDNavbar();
var counterAnimate 			= new Counter();
var progressLinear 			= new ProgressLinear();
var progressBarCircle 	= new ProgressBarCircle();
var dateCountdown 			= new DateCountdown();
var schedule 						= new Schedule();
// var scroller 			      = new Scroller();






// owlCarousel.hello();
// $("h1").remove();//test jquery
