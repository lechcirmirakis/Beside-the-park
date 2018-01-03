$(() => {

  // navbar height reduction

  $(window).scroll(() => {

    if ($(window).scrollTop() > 80) {
      $('.c-navbar').css({
        'height': '100px',
      });

      $('.c-navbar__leftside-menu').css({
        'top': '100px',
      });
    }

  });

  window.setTimeout(() => {
    let mainContent = document.querySelector('.c-main-content');
    let iphon = document.querySelector('.js-iphone-img');
    mainContent.classList.add('animated_2s');
    mainContent.classList.add('fadeIn');
    iphon.classList.add('animated_2s');
    iphon.classList.add('fadeIn');

  }, 1500);

  // side menu

  let menuTrig = document.querySelector('.c-navbar__menu-icon');
  let menuWrap = document.querySelector('.c-navbar__leftside-menu');

  menuTrig.addEventListener('click', (event) => {
    menuWrap.classList.toggle('js-leftside-menu--visible');
  });

});
