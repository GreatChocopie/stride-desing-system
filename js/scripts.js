var ordinaryOpen = document.querySelector(".notice-ordinary__button");
var ordinaryClose = document.querySelector(".notice-ordinary__modal-map-closebutton");
var ordinaryModal = document.querySelector(".notice-ordinary__modal-map-wrapper");
var snackbarOpen = document.querySelector(".notice-snackbar__button");
var snackbarClose = document.querySelector(".notice-snackbar__modal-map-cancel");
var snackbarModal = document.querySelector(".notice-snackbar__modal-map-wrapper");
var tostOpen = document.querySelector(".notice-tost__button");
var tostClose = document.querySelector(".notice-tost__modal-map-cancel");
var tostModal = document.querySelector(".notice-tost__modal-map-wrapper");




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