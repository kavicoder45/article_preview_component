const shareIcon = document.getElementById("share-icon");
const subMenu = document.querySelector(".sub-menu");
const profile = document.querySelector(".profile");

shareIcon.addEventListener("click", function () {
  profile.classList.toggle("active");
});
