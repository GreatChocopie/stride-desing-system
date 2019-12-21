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
                  var elemBut = document.querySelector(".more-file__form-submit").style.display = "block";

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


var form_input = document.getElementById('more-file__form-input');

form_input.addEventListener("change", getFileParam);
document.querySelector(".more-file__form-submit").addEventListener('click', function (e) {
      var form_elem = document.querySelector('.more-file__form');
      form_elem.submit();

})



var findNextSibling = function (elem, firstElem) {
      elem = elem.nextSibling;
      if (!elem) {
            elem = firstElem;
      }
      if (elem.nodeName == "#text")

            return findNextSibling(elem, firstElem);
      return elem;
}


var findPrevSibling = function (elem, lastElem) {
      elem = elem.previousSibling;
      if (!elem) {
            elem = lastElem;
      }
      if (elem.nodeName == "#text")

            return findPrevSibling(elem, lastElem);
      return elem;
}


var slider = document.querySelector(".more-slider__container");

if (slider) {

      var sliderWrapper = slider.querySelector(".more-slider__wrapper");
      var sliderButtonBack = slider.querySelector(".more-slider__button-back");
      var sliderButtonForward = slider.querySelector(".more-slider__button-forward");
      sliderButtonForward.addEventListener("click", function (evt) {

            var currentSlider = sliderWrapper.querySelector(".more-slider__slider--active");
            var firstSlider = sliderWrapper.firstChild;
            var nextSlider = findNextSibling(currentSlider, firstSlider);
            currentSlider.classList.remove("more-slider__slider--active");
            nextSlider.classList.add("more-slider__slider--active");
      });

      sliderButtonBack.addEventListener("click", function (evt) {

            var currentSlider = sliderWrapper.querySelector(".more-slider__slider--active");
            var lastSlider = sliderWrapper.lastChild;
            var prevSlider = findPrevSibling(currentSlider, lastSlider);
            currentSlider.classList.remove("more-slider__slider--active");
            prevSlider.classList.add("more-slider__slider--active");
      });
}

var sliderPhoto = document.querySelector(".more-photo__wrapper");

if (sliderPhoto) {

      var sliderPhotoWrapper = sliderPhoto.querySelector(".more-photo__slider-container");
      var sliderPhotoButtonBack = sliderPhoto.querySelector(".more-photo__button-back");
      var sliderPhotoButtonForward = sliderPhoto.querySelector(".more-photo__button-forward");
      sliderPhotoButtonForward.addEventListener("click", function (evt) {

            var currentSlider = sliderPhotoWrapper.querySelector(".more-photo__slider--active");
            var firstSlider = sliderPhotoWrapper.firstChild;
            var nextSlider = findNextSibling(currentSlider, firstSlider);
            currentSlider.classList.remove("more-photo__slider--active");
            nextSlider.classList.add("more-photo__slider--active");
      });

      sliderPhotoButtonBack.addEventListener("click", function (evt) {

            var currentSlider = sliderPhotoWrapper.querySelector(".more-photo__slider--active");
            var lastSlider = sliderPhotoWrapper.lastChild;
            var prevSlider = findPrevSibling(currentSlider, lastSlider);
            currentSlider.classList.remove("more-photo__slider--active");
            prevSlider.classList.add("more-photo__slider--active");
      });

}