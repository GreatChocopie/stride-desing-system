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
      multiple1List.classList.toggle("field-multiple-select1__list-open");
});



multiple2Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      multiple2List.classList.toggle("field-multiple-select2__list-open");
});





buttonDrop1Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      buttonDrop1List.classList.toggle("button-dropdown1__list-open");
});



buttonDrop2Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      buttonDrop2List.classList.toggle("button-dropdown2__list-open");
});




buttonDropIcon1Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      buttonDropIcon1List.classList.toggle("button-icondropdown1__list-open");
});



buttonDropIcon2Open.addEventListener("click", function (evt) {
      evt.preventDefault();
      buttonDropIcon2List.classList.toggle("button-icondropdown2__list-open");
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