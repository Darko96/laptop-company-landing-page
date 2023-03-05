// SLIDER

let currentSlide = 0;
const sliderContainer = document.querySelector(".slider__container");
const slides = document.querySelectorAll(".slider__item");
const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--next");

prevButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  sliderContainer.style.transform = `translateX(-${currentSlide * 30}%)`;
});

nextButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  sliderContainer.style.transform = `translateX(-${currentSlide * 30}%)`;
});

// FAQ

document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
      if (!item.classList.contains("open")) {
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse open";
        }, 300);
      } else {
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
        }, 300);
      }

      item.classList.toggle("open");
    }
  });
});

// ****
