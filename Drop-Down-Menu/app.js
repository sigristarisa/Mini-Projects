const menuButton = document.getElementById("menuButton");
const menuContainer = document.getElementById("menuContainer");

menuButton.addEventListener("click", () => {
  if (menuContainer.style.display === "none") {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
});
