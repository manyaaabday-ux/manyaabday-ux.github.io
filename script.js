let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

function blowCandle() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
}
