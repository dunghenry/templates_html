document.addEventListener("DOMContentLoaded", function(){
    var toggle_mobile = document.getElementById("toggle-mobile")
    var nav_mobile = document.getElementById("nav-mobile");
    var click_band = document.getElementById("click_band");
    var click_tour = document.getElementById("click_tour");
    var click_contact = document.getElementById("click_contact");
    toggle_mobile.onclick = function(){
        
        nav_mobile.classList.toggle("show")
    }
    click_band.onclick = function(){
        nav_mobile.classList.remove("show");
    }
    click_tour.onclick = function(){
        nav_mobile.classList.remove("show");
    }
    click_contact.onclick = function(){
        nav_mobile.classList.remove("show");
    }
}, false)