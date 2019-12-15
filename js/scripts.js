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


var ordinaryMapOpen = document.querySelector(".map-ordinary__button");
var ordinaryMapClose = document.querySelector(".map-ordinary__modal-popup-closebutton");
var ordinaryMapModal = document.querySelector(".map-ordinary__modal-map-wrapper");

ordinaryMapOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryMapModal.classList.add("map-ordinary__modal-map-open");
});
ordinaryMapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
});
// ordinaryMapModal.addEventListener("click", function (evt) {
//       evt.preventDefault();
//       ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
// });
window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
            if (ordinaryMapModal.classList.contains("map-ordinary__modal-map-open")) {
                  ordinaryMapModal.classList.remove("map-ordinary__modal-map-open");
            }
      }
});


var randomMapOpen = document.querySelector(".map-random__button");
var randomMapClose = document.querySelector(".map-random__modal-popup-closebutton");
var randomMapModal = document.querySelector(".map-random__modal-map-wrapper");

randomMapOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      randomMapModal.classList.add("map-random__modal-map-open");
});
randomMapClose.addEventListener("click", function (evt) {
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



function getFileParam() {
      try {
            var file = document.getElementById('more-file__form-input').files[0];

            if (file) {
                  var fileSize = 0;

                  if (file.size > 1024 * 1024) {
                        fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                  } else {
                        fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
                  }

                  document.getElementById('more-file__file-name').innerHTML = 'Имя: ' + file.name;
                  document.getElementById('more-file__file-size').innerHTML = 'Размер: ' + fileSize;

                  if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
                        var elPreview = document.getElementById('more-file__file-preview');
                        elPreview.innerHTML = '';
                        var newImg = document.createElement('img');
                        newImg.className = "more-file__file-preview-img";

                        if (typeof file.getAsDataURL == 'function') {
                              if (file.getAsDataURL().substr(0, 11) == 'data:image/') {
                                    newImg.onload = function () {
                                          document.getElementById('more-file__file-name').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                                    }
                                    newImg.setAttribute('src', file.getAsDataURL());
                                    elPreview.appendChild(newImg);
                              }
                        } else {
                              var reader = new FileReader();
                              reader.onloadend = function (evt) {
                                    if (evt.target.readyState == FileReader.DONE) {
                                          newImg.onload = function () {
                                                document.getElementById('more-file__file-name').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                                          }

                                          newImg.setAttribute('src', evt.target.result);
                                          elPreview.appendChild(newImg);
                                    }
                              };

                              var blob;
                              if (file.slice) {
                                    blob = file.slice(0, file.size);
                              } else if (file.webkitSlice) {
                                    blob = file.webkitSlice(0, file.size);
                              } else if (file.mozSlice) {
                                    blob = file.mozSlice(0, file.size);
                              }
                              reader.readAsDataURL(blob);
                        }
                  }
            }
      } catch (e) {
            var file = document.getElementById('more-file__form-input').value;
            file = file.replace(/\\/g, "/").split('/').pop();
            document.getElementById('more-file__file-name').innerHTML = 'Имя: ' + file;
      }
}