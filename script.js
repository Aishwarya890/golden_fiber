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

  AOS.init();

  document.addEventListener('DOMContentLoaded', function () {
    const carouselInners = document.querySelectorAll('.carousel-equal-heights .carousel-inner');

    function updateItemsHeight() {
      carouselInners.forEach(function (inner) {
        const items = inner.querySelectorAll('.carousel-item');
        let maxHeight = 0;

        // Reset heights
        items.forEach(function (item) {
          item.style.height = 'auto';
        });

        // Calculate max height
        items.forEach(function (item) {
          const height = item.offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });

        // Set max height
        items.forEach(function (item) {
          item.style.height = maxHeight + 'px';
        });
      });
    }

    updateItemsHeight();
    window.addEventListener('resize', updateItemsHeight);
  });

