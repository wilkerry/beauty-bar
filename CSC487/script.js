/* Kerry Wilson Senior Project */

/*slideshow on photos page*/

let slideIndex = 1;
showSlides(slideIndex);

// Change photo
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Image control
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
