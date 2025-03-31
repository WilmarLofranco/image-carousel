let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel img"); // Select all images
    const dots = document.querySelectorAll(".dot");

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Remove 'active' class from all dots
    dots.forEach((dot) => dot.classList.remove('active'));

    // Show the current slide
    slides[currentSlide].style.display = 'block';

    // Add 'active' class to the current dot
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Add event listeners to the buttons instead of using inline onclick
document.querySelector(".left").addEventListener("click", () => changeSlide(-1));
document.querySelector(".right").addEventListener("click", () => changeSlide(1));

// Add event listeners for dots
document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

// Initialize the first slide
showSlide(currentSlide);

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

export { showSlide, changeSlide };
