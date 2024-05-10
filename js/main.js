//Wrappin every letter in a span 
function scrollleft() {
    document.getElementById("scrolling-text").style.left = '100%';
    setTimeout(scrollleft, 25);
  }
   scrollleft();

//Not sure what this is going to do 

//jQuery code to show the working of hover() method
//$(document).ready(function () {
//  $("a.about").hover(function () {
//      $(this).css("background-color", "green");
//  }, function () {
//      $(this).css("background-color", "yellow");
//  });
//});

