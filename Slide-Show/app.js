const slideShow = ((imageNum) => {
  const imageSlide = document.getElementById("imageSlide");
  const images = document.querySelectorAll("#imageSlide img");
  const goLeft = document.getElementById("goLeft");
  const goRight = document.getElementById("goRight");

  let counter = 0;
  const size = images[0].clientWidth;

  const slideImages = (direction) => {
    if (direction === "right") {
      if (counter < imageNum) {
        imageSlide.style.transition = `transform 0.1s ease-in-out`;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;
        counter++;
      }
    } else if (direction === "left") {
      if (-1 < counter) {
        imageSlide.style.transition = `transform 0.1s ease-in-out`;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;
        counter--;
      }
    }
  };

  goLeft.addEventListener("click", () => {
    slideImages("left");
  });
  goRight.addEventListener("click", () => {
    slideImages("right");
  });
})(5);
