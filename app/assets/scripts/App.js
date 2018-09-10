// 3rd party packages from NPM
// var $ = require('jquery');

// Our modules / classes
import Person from './modules/Person';
import OwlCarousel from './modules/owl-carousel';
import Parallax from './modules/materianize-parallax';
import SlickSlider from './modules/slick-slider';

// Instantiate a new object using our modules/classes
var john = new Person("John Doe", "blue");
john.greet();

var owlCarousel = new OwlCarousel();
var parallax = new Parallax();
var slick = new SlickSlider();
// owlCarousel.hello();




// $("h1").remove();//test jquery
