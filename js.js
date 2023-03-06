const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  //показываем кусочек следующего слайда
  slidesPerView: 1,
  //отступ слайдеров
  spaceBetween: 0,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    567: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 1,
    },
  },

  // effect: 'cube',

  // cubeEffect : {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },
});

// let showAll = document.querySelector('.menu-button-burger');
// let body = document.querySelector('body');
// let dFix = document.querySelector('.d-fix');

// let cardItems = document.querySelectorAll('.modal-block');
// let selectMenu = document.querySelectorAll('.modal-list');

// for (let listElem of selectMenu) {
//   listElem.onclick = function () {
//     body.classList.toggle('d-fix');

//     showAll.classList.toggle('rotate-burger');
//     for (let elem of cardItems) {
//       elem.classList.toggle('modal-block');
//       elem.classList.toggle('show');
//     }
//   };  
// }

// showAll.onclick = function () {
//   body.classList.toggle('d-fix');
//   showAll.classList.toggle('rotate-burger');
//   for (let elem of cardItems) {
//     elem.classList.toggle('modal-block');
//     elem.classList.toggle('show');

//   }
// };

// let card = document.querySelector('.scheme-card');

// let cardsFront = card.querySelector('.front');
// let cardsBack = card.querySelector('.back');

// card.addEventListener( 'click', () => {
//  cardsFront.classList.toggle('scheme-card-rotate-front');
//  cardsBack.classList.toggle('scheme-card-rotate-back');
// }
// )


