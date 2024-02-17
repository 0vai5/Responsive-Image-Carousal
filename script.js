let currentIndex = 0;
const totalSlides = document.querySelectorAll(".carousel-item").length;
const carousel = document.getElementById("carousel");

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const translateValue = -currentIndex * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-play functionality
let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Start auto-play on page load
startAutoplay();

// Pause auto-play when hovering over the carousel
document
  .getElementById("carousel-container")
  .addEventListener("mouseenter", stopAutoplay);
document
  .getElementById("carousel-container")
  .addEventListener("mouseleave", startAutoplay);
