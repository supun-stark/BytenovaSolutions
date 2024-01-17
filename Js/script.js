let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loggingForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loggingForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loggingForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =()=>{
    loggingForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


// media queries
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loggingForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loggingForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Product Swiper
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

//Reviews Swiper
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });