window.onload = function(){
	showSlides();		
}

var slideIndex = 0;


function showSlides() {
	var i;
    var slides = document.getElementsByClassName("tvmob_slides");
    var dots = document.getElementsByClassName("dot");
	var block = document.getElementsByClassName("text-block");

	
    for ( i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";    
    }
	    
	   block[0].style.left = "50px"; 
       block[1].style.right = "50px"; 
	  /* block[2].style.left = "50px"; 
	   block[3].style.right = "50px"; */
    
	
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); 
	
}

  



