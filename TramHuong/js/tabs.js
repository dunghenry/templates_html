function openPage(pageName,elmnt) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.visibility = "hidden";
  }
  document.getElementById(pageName).style.visibility = "visible";
//  elmnt.style.borderBottom = "thick solid rgba(0, 0, 0, 0.823)";

}
