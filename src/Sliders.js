async function Sliders(element, options) {
  if((element && options) === undefined){
    return false;
  }
  let { default: Splide } = await import('@splidejs/splide');
  let slider = (element && options) !== undefined ? new Splide(element, options) : false; 
  slider.mount();
}

export { Sliders };