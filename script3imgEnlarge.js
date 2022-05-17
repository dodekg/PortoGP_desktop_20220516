function enlargeImage(x) {
    x.style.height = "200px";
    x.style.width = "400px";
  }
function normalImage(x) {
x.style.height = "100px";
x.style.width = "235px";
}

document.getElementById("myBrand").addEventListener("click", function() {

    //   document.getElementById("myBrand").innerHTML = "Hello World";
    document.getElementById("myBrand").style.backgroundImage = "url(images/redundant/troll.png)";

    });
  