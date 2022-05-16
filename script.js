var divElem3classes

function init() {
  console.log("page loaded and DOM is ready");

  // use the selection API to select the div
  divElem3classes = document.getElementsByClassName("wavingFlag2");
  // alert(divElem3classes.length);

}

// ---------------trying with classes ----20220516---------------

var currentImage3 = 0;

function animateFlag3() {

  for(var i=0;i<divElem3classes.length;i++)
  {drawFlag3(currentImage3,i);}
  
  // next time, show next sprite/subimage
  currentImage3 = (currentImage3 +1) % 6;

}


function drawFlag3(indexImage3,i) {
  // set the left pos of the div using the left margin
  divElem3classes[i].style.marginLeft = "px";
  // change the width and height of the div
  divElem3classes[i].style.width = "100px";
  divElem3classes[i].style.height = "100px";
  // remove the text inside the div
  divElem3classes[i].innerHTML = "";
  // set the background image
  divElem3classes[i].style.backgroundImage = "url(images/readyImages/scotspriteflag.jpg)";
  // remove the background color
  divElem3classes[i].style.backgroundColor = "transparent";
  // select the starting pos in the background image
  var offset3 = indexImage3 * 100;
  divElem3classes[i].style.backgroundPosition  = offset3 + "px";
  // alert(offset3);
}

// moved from contacts.html file to check if it can be in a separate script (it can be!!!)

var myVar3;
function speedFunction3()
{
    myVar3 = setInterval(animateFlag3,80);
}
speedFunction3();



