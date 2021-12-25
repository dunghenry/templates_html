document.addEventListener("DOMContentLoaded", function () {
   var menu_mobile = document.getElementsByClassName("mobile");
   var sidebar_mobile = document.getElementsByClassName("sidebar-mobile");
   var close_mobile = document.getElementById("close-mobile");
   menu_mobile[0].onclick = function(){
     sidebar_mobile[0].classList.add("show-mobile");
   }
   close_mobile.onclick = function(){
      sidebar_mobile[0].classList.remove("show-mobile");
   }
}, false)