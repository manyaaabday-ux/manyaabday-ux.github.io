document.addEventListener("DOMContentLoaded", function () {

  let currentPage = 0;
  const pages = document.querySelectorAll(".page");
  const heartsContainer = document.querySelector(".hearts");

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
    document.getElementById("bgMusic").play();
  };

  window.blowCandle = function () {
    document.getElementById("flame").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
  };

  /* Generate soft hearts */
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 800);

});
