

var buttonForm = document.querySelector(".button-open-form");
var formSearch = document.querySelector(".form-container");

buttonForm.addEventListener("click", function () {
	evt.preventDefault();
  formSearch.classList.add("modal-hidden");
  
});