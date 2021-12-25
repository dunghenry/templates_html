var index = 0;
myFunction();
function myFunction(){
    var mySlides = document.getElementsByClassName("mySlides");
    for(let i = 0; i < mySlides.length; i++){
        mySlides[i].style.display = "none";
    }
    index++;
    if(index > mySlides.length)
        index = 1;
        mySlides[index - 1].style.display = "block";
        setTimeout(myFunction, 2000);
}