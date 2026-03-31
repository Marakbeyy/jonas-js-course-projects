'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal') ;
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay   = document.querySelector('.overlay');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function(){
modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

document.addEventListener('keydown', function(e){

        console.log(e.key)
        if(!modal.classList.contains(this.hidden) && e.key=== 'Escape'){
          
            closeModal();
        }
    })
for(let i =0 ; i<btnOpenModal.length ; i++)
{
    btnOpenModal[i].addEventListener('click', openModal)
    btnCloseModal.addEventListener('click', closeModal)
}





 



















// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
