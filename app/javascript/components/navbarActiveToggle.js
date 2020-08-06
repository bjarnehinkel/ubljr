const navLinks = document.querySelectorAll('.quicklink');
const mainSections = document.querySelectorAll('.section');

const toggleActive = () => {
  document.querySelector('[data-id="home"]').classList.add('active');
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
      let section = document.querySelector(link.hash)
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active')
        if (link.classList.contains('active')) {
          console.log(`added to ${link.hash}`);
          console.log(link.classList);
        } else {
          console.log('failed to add class');
        }
      } else{
        link.classList.remove('active')
        console.log(`removed from ${link.hash}`);
      }
    });
  });
};

export { toggleActive }
