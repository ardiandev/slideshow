let slideImages = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
const sliderContainer = document.querySelector(".slider-container");
let intervalId;

const buttons = document.querySelector(".buttons");
document.addEventListener("DOMContentLoaded", startSlider);

function startSlider() {
  buttons.addEventListener("click", handleNavigation);
  autoSlide();

  sliderContainer.addEventListener("mouseover", () => {
    clearInterval(intervalId);
  });

  sliderContainer.addEventListener("mouseout", () => {
    autoSlide();
  });
}

function handleNavigation(event) {
  console.log(event.target.closest("span").className);
  let clickedNav = event.target.closest("span").className;
  if (clickedNav === "next") {
    slideNext();
  } else if (clickedNav === "prev") {
    prevSlide();
  }
}

let counter = 0;

function slideNext() {
  slideImages[counter].style.animation = `next1 1s ease-in forwards`;
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = `next2 1s ease-in forwards `;
}

function prevSlide() {
  slideImages[counter].style.animation = `prev1 1s ease-in forwards`;

  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = `prev2 1s ease-in forwards`;
}

function autoSlide() {
  intervalId = setInterval(() => {
    prevSlide();
  }, 3000);
}
