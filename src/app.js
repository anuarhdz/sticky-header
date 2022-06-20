import { Sliders } from './Sliders';
//import './StickyHeader';


// home slide
if(document.querySelector('#slider .splide')){
  const homeSlider = document.querySelector('#slider .splide');
  let homeSliderOptions = {
    type: 'loop',
    perView: 1,
    pagination: false,
    arrows: false,
  }
  Sliders(homeSlider, homeSliderOptions);
}


