let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach(page => page.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}

function blowCandle() {
  const flame = document.getElementById("flame");
  const message = document.getElementById("finalMessage");

  flame.style.display = "none";
  message.style.display = "block";
}
