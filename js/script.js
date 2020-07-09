let form = document.querySelector('.form-container');
let buttonForm = document.querySelector('.button-open-form');
let searchForm = document.querySelector('.search-form');
let inputDate = document.querySelector('.input-date');
let inputNumber = document.querySelector('.input-number');

  form.classList.toggle('modal-hidden');
  form.classList.toggle('modal-open');
  
buttonForm.addEventListener('click', function(evt) {
  evt.preventDefault();
  form.classList.toggle('modal-hidden');
  form.classList.toggle('modal-open');
});



searchForm.addEventListener('submit', function(evt) {
  if (!inputDate.value || !inputNumber.value) {
    evt.preventDefault();
    console.log('Заполните все поля')
  }
});


window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    form.classList.toggle('modal-hidden');
    form.classList.toggle('modal-open');

  }
});
