window.onload = function(){
	
	gallery();
	
}


function gallery(){

    var slike = [ 
    
        {
            alt: 'Klio i golf 7',
            putanja: 'slike/photograph.jpg',
            alt2: 'Klio i golf 7',
            putanja2: 'slike/photograph2.jpg'
        },
        {
            alt: 'Enterijer novog audija',
            putanja: 'slike/mobcar2.jpg',
            alt2: 'Klio i golf 7',
            putanja2: 'slike/mobcar.jpg'
        },
        {
            alt: 'Kampur model renoa',
            putanja:'slike/ps4.jpg',
            alt2: 'Klio i golf 7',
            putanja2: 'slike/ps42.jpg'
        },
      
    ];
    



    var galerijaIspis ='';
     
    for(var i = 0; i < slike.length; i++){
       
            
         galerijaIspis += '<div class="pictures-gallery">';
                      
                      
        galerijaIspis += ' <a href="'+  slike[i].putanja + '" data-lightbox="image-1" > <img  src="'+ slike[i].putanja2 + '"alt="'+ slike[i].alt2 + '"/> </a> ';
                  
        galerijaIspis += '</div>'; 
       
    }
    
    
    galerijaIspis += '<div class="cleaner"> </div>';
    document.querySelector("#galleryC").innerHTML += galerijaIspis;
    
    
    
    }
         
      