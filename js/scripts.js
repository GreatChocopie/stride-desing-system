var multiple1Open = document.querySelector(".form-elements__field-multiple-select1");
var multiple1List = document.querySelector(".field-multiple-select1__list-wrapper");


var multiple2Open = document.querySelector(".form-elements__field-multiple-select2");
var multiple2List = document.querySelector(".field-multiple-select2__list-wrapper");

var buttonDrop1Open = document.querySelector(".form-elements__button-dropdown1-wrapper");
var buttonDrop1List = document.querySelector(".button-dropdown1__list-wrapper");


var buttonDrop2Open = document.querySelector(".form-elements__button-dropdown2-wrapper");
var buttonDrop2List = document.querySelector(".button-dropdown2__list-wrapper");

var buttonDropIcon1Open = document.querySelector(".form-elements__button-icondropdown1-wrapper");
var buttonDropIcon1List = document.querySelector(".button-icondropdown1__list-wrapper");


var buttonDropIcon2Open = document.querySelector(".form-elements__button-icondropdown2-wrapper");
var buttonDropIcon2List = document.querySelector(".button-icondropdown2__list-wrapper");



multiple1Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      multiple1List.classList.toggle("field-multiple-select1__list-open");
});

document.querySelector('body').addEventListener("click", function (evt) {
      if (multiple1List.classList.contains("field-multiple-select1__list-open")) {
            evt.preventDefault();
            multiple1List.classList.remove("field-multiple-select1__list-open");
      }
});

multiple2Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      multiple2List.classList.toggle("field-multiple-select2__list-open");
});
document.querySelector('body').addEventListener("click", function (evt) {
      if (multiple2List.classList.contains("field-multiple-select2__list-open")) {
            evt.preventDefault();
            multiple2List.classList.remove("field-multiple-select2__list-open");
      }
});




buttonDrop1Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      buttonDrop1List.classList.toggle("button-dropdown1__list-open");
});

document.querySelector('body').addEventListener("click", function (evt) {
      if (buttonDrop1List.classList.contains("button-dropdown1__list-open")) {
            evt.preventDefault();
            buttonDrop1List.classList.remove("button-dropdown1__list-open");
      }
});




buttonDrop2Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      buttonDrop2List.classList.toggle("button-dropdown2__list-open");
});
document.querySelector('body').addEventListener("click", function (evt) {
      if (buttonDrop2List.classList.contains("button-dropdown2__list-open")) {
            evt.preventDefault();
            buttonDrop2List.classList.remove("button-dropdown2__list-open");
      }
});





buttonDropIcon1Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      buttonDropIcon1List.classList.toggle("button-icondropdown1__list-open");
});

document.querySelector('body').addEventListener("click", function (evt) {
      if (buttonDropIcon1List.classList.contains("button-icondropdown1__list-open")) {
            evt.preventDefault();
            buttonDropIcon1List.classList.remove("button-icondropdown1__list-open");
      }
});



buttonDropIcon2Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      buttonDropIcon2List.classList.toggle("button-icondropdown2__list-open");
});
document.querySelector('body').addEventListener("click", function (evt) {
      if (buttonDropIcon2List.classList.contains("button-icondropdown2__list-open")) {
            evt.preventDefault();
            buttonDropIcon2List.classList.remove("button-icondropdown2__list-open");
      }
});