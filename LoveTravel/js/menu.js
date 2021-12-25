document.addEventListener("DOMContentLoaded",function(){
    var close = document.getElementById("close");
    var menu = document.getElementById("menu");
    var sidebar = document.getElementById("sidebar");
    console.log(close);
    console.log(menu);
    close.onclick = function(){
        sidebar.classList.remove("show");
    }
    menu.onclick = function(){
        sidebar.classList.add("show");
        console.log("Hello");
    }
}, false);