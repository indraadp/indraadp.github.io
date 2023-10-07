$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    responsiveClass: true,
    responsive: { 300: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    navText: [
      "<i class='fa-solid fa-circle-chevron-left'></i>",
      "<i class='fa-solid fa-circle-chevron-right'></i>",
    ],
  });
  AOS.init({
    once: true,
  });
});
