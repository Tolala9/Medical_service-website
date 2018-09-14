// 3rd party packages from NPM
// var $ = require('jquery');

// Our modules / classes
import Person 				from './modules/Person';
import OwlCarousel 		from './modules/owl-carousel';
import Parallax 			from './modules/materianize-parallax';
import SlickSlider 		from './modules/slick-slider';
import RDMailForm 		from './modules/rd-mail-form';
import CopyrightYear 	from './modules/copyright-year';
import UIToTop 				from './modules/ui-to-top';
import Swiper 				from './modules/swiper';

// Instantiate a new object using our modules/classes
var john = new Person("John Doe", "blue");
john.greet();

var owlCarousel 	= new OwlCarousel(); 
var parallax 			= new Parallax();
var slick 				= new SlickSlider();
var rdMailForm 		= new RDMailForm();
var copyrightYear = new CopyrightYear();
var uitotop 			= new UIToTop();
var swiper 				= new Swiper();




// owlCarousel.hello();
// $("h1").remove();//test jquery
