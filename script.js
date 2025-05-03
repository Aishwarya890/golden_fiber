let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

