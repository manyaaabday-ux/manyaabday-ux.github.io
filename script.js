document.addEventListener("DOMContentLoaded", function () {

  let currentPage = 0;
  const pages = document.querySelectorAll(".page");
  const heartsContainer = document.querySelector(".hearts-container");

  function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));
    pages[index].classList.add("active");
  }

  window.nextPage = function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  };

  window.playMusic = function () {
    const music = document.getElementById("bgMusic");
    music.play();
  };

  window.blowCandle = function () {
    document.getElementById("flame").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
  };

  /* Generate Floating Hearts */
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 500);

});
