const slideShow = ((imageNum) => {
  const imageSlide = document.getElementById("imageSlide");
  const images = document.querySelectorAll("#imageSlide img");
  const goLeft = document.getElementById("goLeft");
  const goRight = document.getElementById("goRight");

  let counter = 0;
  const size = images[0].clientWidth + 5;

  const slideImages = (direction) => {
    if (direction === "right") {
      if (counter < imageNum - 1) {
        counter++;
        imageSlide.style.transition = `transform 0.4s ease-in`;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;
      } else if (counter >= imageNum - 1) {
        counter = 0;
        imageSlide.style.transition = `transform 0.4s ease-in`;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    } else if (direction === "left") {
      if (0 < counter) {
        counter--;
        imageSlide.style.transition = `transform 0.4s ease-in`;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;
      } else if (counter <= 0) {
        counter = imageNum - 1;
        imageSlide.style.transition = `transform 0.4s ease-in`;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;
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
