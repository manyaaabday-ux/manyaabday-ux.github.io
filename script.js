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
    document.getElementById("finalWish").style.display = "block";
    launchConfetti();
  };

  /* CONTINUOUS HEARTS */
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 6) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 11000);
  }, 700);

  /* CONFETTI EXPLOSION */
  function launchConfetti() {
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.background = ["#ff4d6d","#ff99ac","#ffffff","#ffd6e8"][Math.floor(Math.random()*4)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-10px";
      confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

});
