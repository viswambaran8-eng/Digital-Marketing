const reviews = [
  "Their marketing strategy increased our website traffic by 300% in just three months. Creative team.",

  "Outstanding results! Our conversions doubled after their campaigns. Professional, efficient, and highly reliable team.",

  "Our digital presence with clear communication, measurable growth, excellent support throughout.",

  "One of the best agencies! Strategic thinking, fast execution, and delivering real, measurable marketing results."
];


let currentIndex = 0;
const reviewText = document.getElementById("reviewText");

let autoSlide; // timer reference

function updateReview() {
  reviewText.style.opacity = 0;

  setTimeout(() => {
    reviewText.textContent = `“${reviews[currentIndex]}”`;
    reviewText.style.opacity = 1;
  }, 200);
}

function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReview();
  resetAutoSlide();
}

function prevReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReview();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview();
  }, 4000); // ⏱ 4 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Button events
document.getElementById("nextBtn").addEventListener("click", nextReview);
document.getElementById("prevBtn").addEventListener("click", prevReview);

// Initial load
updateReview();
startAutoSlide();
