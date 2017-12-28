$(() => {

  // navbar height reduction

  $(window).scroll(() => {

    if ($(window).scrollTop() > 80) {
      $('.navbar').css({
        'height': '100px',
      });

      $('.navbar__fadeIn-menu').css({
        'top': '100px',
      });
    }

  });

  // sied menu

  let menuTrig = document.querySelector('.menu-trigger');
  let menuWrap = document.querySelector('.navbar__fadeIn-menu');

  menuTrig.addEventListener('click', (event) => {
    menuWrap.classList.toggle('navbar__fadeIn-menu--visible');
  });

});
