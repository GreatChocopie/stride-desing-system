var ordinaryOpen = document.querySelector(".notice-ordinary__button");
var ordinaryClose = document.querySelector(".notice-ordinary__modal-map-closebutton");
var ordinaryModal = document.querySelector(".notice-ordinary__modal-map-wrapper");
var snackbarOpen = document.querySelector(".notice-snackbar__button");
var snackbarClose = document.querySelector(".notice-snackbar__modal-map-cancel");
var snackbarModal = document.querySelector(".notice-snackbar__modal-map-wrapper");
var tostOpen = document.querySelector(".notice-tost__button");
var tostClose = document.querySelector(".notice-tost__modal-map-cancel");
var tostModal = document.querySelector(".notice-tost__modal-map-wrapper");



var ordinaryMapOpen = document.querySelector(".map-ordinary__button");
var ordinaryMapClose = document.querySelector(".map-ordinary__modal-popup-closebutton");
var ordinaryMapModal = document.querySelector(".map-ordinary__modal-map-wrapper");
var ordinaryMapCancel = document.querySelector(".map-ordinary__modal-popup-button2");



var randomMapOpen = document.querySelector(".map-random__button");
var randomMapClose = document.querySelector(".map-random__modal-popup-closebutton");
var randomMapModal = document.querySelector(".map-random__modal-map-wrapper");
var randomMapInput = document.querySelector(".map-random__modal-popup-input");
var randomMapCancel = document.querySelector(".map-random__modal-popup-button2");











ordinaryOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryModal.classList.add("notice-ordinary__modal-map-open");
});
ordinaryClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryModal.classList.remove("notice-ordinary__modal-map-open");
});

snackbarOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      snackbarModal.classList.add("notice-snackbar__modal-map-open");
});
snackbarClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      snackbarModal.classList.remove("notice-snackbar__modal-map-open");
});

tostOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      tostModal.classList.add("notice-tost__modal-map-open");
});
tostClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      tostModal.classList.remove("notice-tost__modal-map-open");
});



ordinaryMapOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryMapModal.classList.add("map-ordinary__modal-map-open");
});
ordinaryMapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
});
ordinaryMapCancel.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
});

window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
            if (ordinaryMapModal.classList.contains("map-ordinary__modal-map-open")) {
                  ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
            }
      }
});
ordinaryMapModal.addEventListener("click", function (evt) {
      if (evt.target.classList.contains("map-ordinary__modal-map-container")) {
            evt.preventDefault();
            ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
      }
});



randomMapOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      randomMapModal.classList.add("map-random__modal-map-open");
      randomMapInput.focus();
});
randomMapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      randomMapModal.classList.remove("map-random__modal-map-open");

});
randomMapCancel.addEventListener("click", function (evt) {
      evt.preventDefault();
      randomMapModal.classList.remove("map-random__modal-map-open");

});

window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
            if (randomMapModal.classList.contains("map-random__modal-map-open")) {
                  randomMapModal.classList.remove("map-random__modal-map-open");
            }
      }
});
randomMapModal.addEventListener("click", function (evt) {
      if (evt.target.classList.contains("map-random__modal-map-container")) {
            evt.preventDefault();
            randomMapModal.classList.remove("map-random__modal-map-open");
      }
});