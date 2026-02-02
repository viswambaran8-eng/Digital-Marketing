  const swiper = new Swiper(".heroSwiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1200,
  });


 const testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800, // smooth transition

  autoplay: {
    delay: 1500,              // time between slides
    disableOnInteraction: false, // keeps autoplay after swipe
    pauseOnMouseEnter: true,     // pause on hover (UX win)
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

