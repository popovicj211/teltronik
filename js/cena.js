
window.onload = function(){
   
   document.getElementById("demo").addEventListener("mouseenter", mouseEnter);
document.getElementById("demo").addEventListener("mouseleave", mouseLeave);

}

function mouseEnter() {
    document.getElementById("demo").style.color = "gray";
}

function mouseLeave() {
    document.getElementById("demo").style.color = "white";
}

/*
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
  */
 function bigImg(x) {
    x.style.opacity = "0.5";
  }
  
  function normalImg(x) {
    x.style.opacity = "1";
    
  }