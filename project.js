  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;

  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    slider.style.transform = `translateX(-${index * 100}%)`;
  });

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    slider.style.transform = `translateX(-${index * 100}%)`;
  });

