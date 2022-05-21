'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener("click", function (e) {

  section1.scrollIntoView({
    behavior: "smooth"
  });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
// el.addEventListener('click', function (e) {
// e.preventDefault();
// const id = this.getAttribute('href');
// console.log(id);
// console.log("LINK");
// document.querySelector(id).scrollIntoView({
// behavior: "smooth"
// });
// });
// });
// 

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    console.log("LINK");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }
});

const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookie for improved functionality and analitics. <button class="btn btn--close-cookie" >Got it!</button>';
// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))
// header.before(message);
// header.after(message)

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = "#37383d"
message.style.width = "120%";


const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});





const h1 = document.querySelector('h1');
// 
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// 
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// 
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// 
// h1.closest('.header').style.background = "var(--gradient-secondary)";
// 
// h1.closest('h1').style.background = "var(--gradient-primary)";
// 
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// 
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// 
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
// if (el !== h1) el.style.transform = "scale(0.5)";
// });
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
// alert('addEventlistener: Great! You are reading the heading');

// h1.removeEventListener('mouseenter', alertH1);
// }


// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter',
// alertH1), 3000);

// const randomInt = (min, max) =>
// Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
// `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log(this === e.currentTarget);

// e.stopPropagation();
// });
// 
// document.querySelector('.nav__links').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log("container", e.target, e.currentTarget);
// 
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log("nav", e.target, e.currentTarget);
// 
// });



// console.log(randomColor(0, 255));
// h1.onmouseenter = function (e) {
// alert('onmouseenter: great... you are reading the head');
// };