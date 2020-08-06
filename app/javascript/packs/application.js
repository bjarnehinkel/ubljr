/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import { jarallax, jarallaxVideo } from 'jarallax'

// Internal imports
import { toggleActive } from "components/navbarActiveToggle";
import { disable, extend } from "components/carousel";
// import { find_next } from "components/races.js"

toggleActive();
disable();
extend();
jarallaxVideo();

const aboutAnchor = document.querySelector('.anchor#about');
const racesAnchor = document.querySelector('.anchor#races');

// const new_ = setInterval(find_next(), 2000);

jarallax(document.querySelector('.jarallax.first'), {
    imgPosition: '0px -25px'
});
jarallax(document.querySelector('.jarallax.third'), {
    imgPosition: '0px -25px'
});
