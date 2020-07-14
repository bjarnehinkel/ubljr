const disable = () => {
  $('#infoCarousel').carousel({
    interval: false
  });
};

const extend = () => {
  $('#profilePictures').carousel({
    interval: 6000
  });
};

export { disable, extend };
