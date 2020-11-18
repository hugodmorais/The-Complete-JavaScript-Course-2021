'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

 const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }

btnCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);