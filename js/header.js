let menuButton = document.querySelector('.hamburger-menu-button');
let parent = document.querySelector('body');

menuButton.addEventListener('click', function(){
  parent.classList.toggle('menu-open');
});

//modal js
let playButton = document.querySelector('.process__video');
let modalWindow = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close');

playButton.addEventListener('click', function(){
  modalWindow.classList.add('modal__open');
  parent.classList.add('scroll__hidden');
});

closeButton.addEventListener('click', function(){
  modalWindow.classList.remove('modal__open');
  parent.classList.add('scroll__hidden');
});

//Custom select
let selectBtn = document.querySelector('.select__btn');
let dropdownBox = document.querySelector('.select__dropdown');

selectBtn.addEventListener('click', function(){
  dropdownBox.classList.toggle('dropdown__open');
});
