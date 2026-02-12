document.addEventListener("DOMContentLoaded", function () {

  let currentPage = 0;
  const pages = document.querySelectorAll(".page");

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
    document.getElementById("partyOverlay").style.display = "flex";
  };

});
