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

const openMenu = document.querySelector('.header__select-menu');
const modal = document.querySelector('.modal-container')
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.modal__menu-item')
const switchers = document.querySelectorAll('.switcher__label')
const  closeBtn = document.querySelector('.close-btn')
const switcherItems = document.querySelectorAll('.table-col')

openMenu.addEventListener('click', ()=> {
  modal.classList.add('modal-container__open')
  body.style.overflow='hidden'
})
closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-container__open')
  body.style.overflow='visible'

})
for (let el of menuItems) {
  el.addEventListener('click', () => {
    modal.classList.remove('modal-container__open')
    body.style.overflow='visible'
  })
}
console.log(switchers);
for (let el of switchers) {
  el.addEventListener('click', () => {
    for (let el of switchers) {
      el.classList.remove('switcher__label--checked')  
    }
   el.classList.add('switcher__label--checked')
    for (let elem of switcherItems){
    elem.style.visibility='hidden'
    elem.style.height=0
    elem.id == "solo" && el.id == 'solo-switcher' ? (elem.style.visibility='visible',  elem.style.height='auto' ):null
    elem.id == "team" && el.id == 'team-switcher' ? (elem.style.visibility='visible', elem.style.height='auto'):null
    }
    
  })
}
