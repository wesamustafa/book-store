// header start
// search form start
searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}
// search form end
// fixed header-2 start
function fixedHeader() {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
}
window.onscroll = () => {
    fixedHeader();
    searchForm.classList.remove("active");
}
window.onload = () => {
    fixedHeader();
}
// fixed header-2 end
// login form start
let loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
}
document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active");
}
// login form end
// header end
// home section start
// swiper start
var swiper = new Swiper(".books-slider", {
    loop: true,
    CenteredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteractions: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// swiper end
// home section end
// featured section start
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    CenteredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteractions: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
// featured section end
// arrivals section start
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    CenteredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteractions: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// arrivals section end
// reviews section start
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop: true,
    CenteredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 9500,
        disableOnInteractions: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// reviews section end