// mobile menu section
const body = document.querySelector('body');

const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.fa-xmark');
const mobileMemu = document.querySelector('.mobile-menu-section');

hamburgerBtn.addEventListener('click', () => {
  mobileMemu.classList.add('active');
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileMemu.classList.remove('active');
  body.style.overflow = 'auto';
});

const mobileAllCourse = document.querySelector('.mobile-all-course');
const mobileAllCourseLists = document.querySelector('.mobile-all-course-lists');
const mobileAllCourseHeader = document.querySelector(
  '.mobile-all-course-header'
);

mobileAllCourse.addEventListener('click', () => {
  mobileAllCourseLists.classList.add('active');
});

mobileAllCourseHeader.addEventListener('click', () => {
  mobileAllCourseLists.classList.remove('active');
});

const mobileMembers = document.querySelector('.mobile-members');
const mobileMembersLists = document.querySelector('.mobile-members-lists');
const mobileMembersHeader = document.querySelector('.mobile-members-header');

mobileMembers.addEventListener('click', () => {
  mobileMembersLists.classList.add('active');
});

mobileMembersHeader.addEventListener('click', () => {
  mobileMembersLists.classList.remove('active');
});

const mobilePersonal = document.querySelector('.mobile-personal');
const mobilePersonalLists = document.querySelector('.mobile-personal-lists');
const mobilePersonalHeader = document.querySelector('.mobile-personal-header');

mobilePersonal.addEventListener('click', () => {
  mobilePersonalLists.classList.add('active');
});

mobilePersonalHeader.addEventListener('click', () => {
  mobilePersonalLists.classList.remove('active');
});

window.onclick = function (event) {
  if (event.target === mobileMemu) {
    mobileMemu.classList.remove('active');
  }
};

// document.addEventListener('click', () => {
//   if (mobileMemu.contains('active')) {
//     mobileMemu.classList.remove('active');
//   }
// });

// Swiper section
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 1,
      spaceBetween: 580,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1140: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
