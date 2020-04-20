/*
window.onload = function(){
	
    document.getElementById("loginsend").addEventListener("click",prijava);
 document.getElementById("loginsend").addEventListener("click",reset);
}

*/
  

var   emailAdresa, regEmailAdresa, sifra, regSifra ;
	
//DOHVATANJE VREDNOSTI

emailAdresa = document.getElementById("loginname");
sifra = document.getElementById("loginpass");

 
//REGULARNI IZRAZI

regEmailAdresa =/^[a-z]{4,}(\.)?[a-z]{4,}([0-9]{0,5})?\@((gmail)|(yahoo)|(hotmail))\.com$/;
regSifra =/^[0-9A-Z\*\/\?\_\-]{4,15}$/;




function prijava(){
   
	
	

    if(regEmailAdresa.test(emailAdresa.value))
	{
           emailAdresa.style.border = "1px solid #fff ";
	}
	else
	{
      
       
        emailAdresa.style.border = "1px solid red ";
    }
    
    if(regSifra.test(sifra.value))
	{
               
               sifra.style.border = "1px solid #fff ";
	}
	else
	{
       
       
         sifra.style.border = "1px solid red ";
	}

   
    

}


function reset(){
   
	
	
	
	var resetEmailAdresa = document.getElementById("loginname").value ="";
	var resetSifra = document.getElementById("loginpass").value ="";
	var emailAdresaBoja = document.getElementById("loginname").style = "border:1px solid #fff";
	var sifraBoja = document.getElementById("loginpass").style = "border:1px solid #fff";

	
    

}