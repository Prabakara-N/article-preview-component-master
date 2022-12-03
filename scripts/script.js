//elements
const shareEl = document.getElementById("js-icon");
const hideEl = document.getElementById("hide");

//event listner
shareEl.addEventListener("click", function () {
  hideEl.classList.toggle("hidden");
});
