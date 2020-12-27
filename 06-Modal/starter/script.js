'use strict';
const modal = document.querySelector('.show-modal');
const modal1 = document.querySelector('.show');
const modal2 = document.querySelector('.screen');
const modal3 = document.querySelector('.model');

const openModal = function () {
  modal3.classList.remove('hidden');
  modal2.classList.remove('hidden');
};

const closeModal = function () {
  modal3.classList.add('hidden');
  modal2.classList.add('hidden');
};
for (let i = 0; i < modal1; i++) modal1.addEventListener('click', openModal);
modal1.addEventListener('click', closeModal);
modal2.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
