/* ===== LARENTIA ÉPURÉE — JS ===== */
(function () {
  'use strict';

  /* --- Burger menu --- */
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* --- Hero slideshow --- */
  var slides = document.querySelectorAll('.hero__slide');
  if (slides.length > 1) {
    var current = 0;
    var interval = 500; // 0.5 second per painting

    slides[0].classList.add('active');

    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, interval);
  } else if (slides.length === 1) {
    slides[0].classList.add('active');
  }

})();
