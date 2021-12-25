var index = 0;
slides();
function slides(){
    var mySlides = document.getElementsByClassName("myslide");
    for(var i  = 0; i < mySlides.length; i++){
        mySlides[i].style.display = "none";
    }
    index++;
    if(index > mySlides.length)
    index = 1;
    mySlides[index - 1].style.display = "block";
    setTimeout(slides, 3000);
}
