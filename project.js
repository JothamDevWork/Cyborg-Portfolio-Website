const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slidecon"); // note: slidecon, not slide
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const progressSpans = document.querySelectorAll(".progress span");

let index = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 30; // include gap
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  // update progress
  progressSpans.forEach((span, i) => {
    if (i === index) {
      span.classList.add("active");
    } else {
      span.classList.remove("active");
    }
  });
}

// initial highlight
updateSlider();

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateSlider();
});

