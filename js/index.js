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
// window.addEventListener('DOMContentLoaded', ()=>{
//     const loader = document.querySelector('.loader')
//     setTimeout(()=>{
//         loader.style.opacity = '0';
//         setTimeout(()=>{
//             loader.style.display = 'none'
//         },1500)
//     },1400)
// })

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

if (document.querySelector('.counter')) {
    document.querySelector('.counter').addEventListener('click', function (e) {
        e.preventDefault()
    })
}

// document.querySelector('.product__item').addEventListener('click', function(e){
//     if (e.target.tagName.toLowerCase() === "img"){
//         e.target.style.opacity = "0.6"
//     }
//     if(e.target.className === "copa"){
//         e.target.style.color = "blue"
//     }
// })
// jquery
$(document).ready(() => {
    $(".page_wrapper_header").hover(function () {
        if ($(window).width() > 768) {
            $(this).toggleClass("active");
        }
    });

    $('.dropdown').hover(() => {
        if ($(window).width() > 768) {
            $('.dropdown-content').toggle()
        }
    })
    $('.dropdown').click(() => {
        if ($(window).width() < 768) {
            $('.dropdown-content').toggle()
        }
    })


    var stickyOffset = $(".menu_header").offset().top;
    $(window).scroll(() => {
        var sticky = $(".menu_header"),
            scroll = $(window).scrollTop();

        if ($(window).width() > 768) {
            if (scroll >= stickyOffset) {
                sticky.addClass("fixed")
                $(".menu_header ul li").css({ "margin": '0px 30px' }, { "text-align": "left" })
            }
            else {
                sticky.removeClass("fixed")
                $(".menu_header ul li").css({ "margin": '0px 20px' })

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