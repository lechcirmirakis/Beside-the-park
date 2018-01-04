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

  menuTrig.addEventListener('click', (event) => {
    let menuWrap = document.querySelector('.js-navbar__leftside-menu');
    let menuLinks = document.querySelectorAll('.js-navbar__link');
    menuWrap.classList.toggle('js-leftside-menu--visible');
    menuLinks.forEach((e) => {
      e.classList.toggle('animated_1-5s');
      e.classList.toggle('fadeInUp');
    });

  });

  // Services box animation
  let boxes = document.querySelectorAll('.js-services__box');

  boxes.forEach((e) => {
    let link = e.querySelector('.js-services__link');
    e.addEventListener('mouseenter', (event) => {
      link.classList.add('animated_1-5s');
      link.classList.add('fadeIn');
    });
    e.addEventListener('mouseleave', (event) => {
      link.classList.remove('animated_1-5s');
      link.classList.remove('fadeIn');
    });

  });

});
