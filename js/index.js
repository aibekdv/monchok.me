let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
const swiperReviews = new Swiper('.reviews .swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const sliderProducts = new Swiper('.for_you .swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1300:{
      slidesPerView:4
    },
    990:{
      slidesPerView: 3,
    },
    550:{
      slidesPerView: 2,
    },
    320:{
      slidesPerView: 1,
    },
  }
});

document.querySelector(".search_top").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".search_block").style.display = "flex";
  document.querySelector("header").style.display = "none";
});

document.querySelector(".cancel_search_btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".search_block").style.display = "none";
  document.querySelector("header").style.display = "flex";
});

$(document).ready(() => {
  $(".page_wrapper_header").hover(function () {
    if ($(window).width() > 768) {
      $(this).toggleClass("active");
    }
  });

  $(".dropdown").hover(() => {
    if ($(window).width() > 768) {
      $(".dropdown-content").toggle();
    }
  });
  $(".dropdown").click(() => {
    if ($(window).width() < 768) {
      $(".dropdown-content").toggle();
    }
  });

  var stickyOffset = $(".menu_header").offset().top;
  $(window).scroll(() => {
    var sticky = $(".menu_header"),
      scroll = $(window).scrollTop();

    if ($(window).width() > 768) {
      if (scroll >= stickyOffset) {
        sticky.addClass("fixed");
        $(".menu_header ul li").css(
          { margin: "0px 30px" },
          { "text-align": "left" }
        );
      } else {
        sticky.removeClass("fixed");
        $(".menu_header ul li").css({ margin: "0px 20px" });
      }
    }
  });

  $(".menu_mobile").click(() => {
    $(".menu_header").toggle(() => {
        $(".menu_header").css(
            { borderBottomLeftRadius: "5px" },
            { display: "flex" }
        );
    });
        $('.help_me').css({display:"flex"})
        $(".menu_header_top").css({ display: "flex" });
});

$(".menu_header_top i").click(() => {
    if ($(window).width() < 768) {
        $(".menu_header").css({ display: "none" });
        $(".menu_header").css({ borderBottomLeftRadius: "0px" });
        $(".menu_header_top").css({ display: "none" });
    }
});
});
