const navLinks = document.querySelectorAll('.quicklink');
const mainSections = document.querySelectorAll('.section');

const toggleActive = () => {
  document.querySelector('[data-id="banner"]').classList.add('active');
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
      let section = document.getElementById(link.dataset.id)
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active')
      } else{
        link.classList.remove('active')
      }
    });
  });
};

export { toggleActive }
