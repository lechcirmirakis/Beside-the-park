document.addEventListener("DOMContentLoaded", () => {

  // delay for animation
  window.setTimeout(() => {
    let mainContent = document.querySelector('.js-main-content');
    let iphon = document.querySelector('.js-iphone-img');
    iphon.classList.add('animated_1-5s');
    iphon.classList.add('fadeInRightBig');
    mainContent.classList.add('animated_2s');
    mainContent.classList.add('fadeIn');
  }, 1000);

  // side menu
  let menuTrig = document.querySelector('.js-navbar__menu-icon');
  let menuWrap = document.querySelector('.js-navbar__leftside-menu');
  let menuLinks = document.querySelectorAll('.js-navbar__link');

  menuTrig.addEventListener('click', (event) => {
    menuWrap.classList.toggle('js-leftside-menu--visible');
    menuLinks.forEach((e) => {
      e.classList.toggle('animated_1-5s');
      e.classList.toggle('fadeInUp');
    });

  });

});
