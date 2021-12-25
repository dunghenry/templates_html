document.addEventListener(
  "DOMContentLoaded",
  function () {
    var close = document.getElementById("close");
    var btn_close = document.getElementById("btn-close");
    var bg_dark = document.getElementById("bg-dark");
    var btn = document.getElementsByClassName("btn");
    var ticketModal = document.getElementById("ticketModal");
    console.log(close, btn_close, bg_dark, btn, ticketModal);
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = function () {
        ticketModal.classList.add("display");
        bg_dark.classList.add("show");
      };
      close.onclick = function () {
        ticketModal.classList.remove("display");
        bg_dark.classList.remove("show");
      };
      btn_close.onclick = function () {
        ticketModal.classList.remove("display");
        bg_dark.classList.remove("show");
      };
      bg_dark.onclick = function(){
        ticketModal.classList.remove("display");
        bg_dark.classList.remove("show");
      }
    }
  },
  false
);
