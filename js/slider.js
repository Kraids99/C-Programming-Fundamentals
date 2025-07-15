let current = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  current = (current + 1) % total;
  showSlide(current);
}, 5000); 