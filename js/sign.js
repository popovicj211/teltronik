window.onload = function(){
	
    document.getElementById("signbtn").addEventListener("click",registracija);

}

var korIme, regKorIme,  emailAdresa, regEmailAdresa, sifra, regSifra,  errorsDisplay;
	
//DOHVATANJE VREDNOSTI
korIme = document.getElementById("signname");
emailAdresa = document.getElementById("signemail");
sifra = document.getElementById("signpass");
 displayErrorsDiv = document.querySelector("#displayErrors");
 
//REGULARNI IZRAZI
regKorIme =/^[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{2,15})+$/;
regEmailAdresa =/^[a-z]{4,}(\.)?[a-z]{4,}([0-9]{0,5})?\@((gmail)|(yahoo)|(hotmail))\.com$/;
regSifra =/^[0-9A-Z\*\/\?\_\-]{4,15}$/;


var Greske = [];
var Podaci = [];


function registracija(){
   
	
	if(regKorIme.test(korIme.value))
	{
    
           korIme.style.borderBottom = "1px solid #fff ";  
          
	}
	else
	{
       
        Greske.push("Loše ste uneli korisničko ime!");
        korIme.style.borderBottom = "1px solid red ";
       
    }

    if(regEmailAdresa.test(emailAdresa.value))
	{
           emailAdresa.style.borderBottom = "1px solid #fff ";
	}
	else
	{
      
        Greske.push("Loše ste uneli e-mail adresu!");
        emailAdresa.style.borderBottom = "1px solid red ";
    }
    
    if(regSifra.test(sifra.value))
	{
               
               sifra.style.borderBottom = "1px solid #fff ";
	}
	else
	{
       
        Greske.push("Loše ste uneli šifru!");
         sifra.style.borderBottom = "1px solid red ";
	}

   
    var rezultat ="";
    rezultat += "<ul>";
	if(Greske.length != 0)
	{
        document.querySelector(".login-box2").style.height = "520px";
        
		for(var i = 0; i < Greske.length; i++)
		{	
            rezultat += "<li class='error' style='color:#ff0000;'>" + Greske[i] + "</li>";
          
        }
       
    }
    rezultat += "</ul>";
    
   
   
	

	document.getElementById("displayErrors").style.display = "block"; 
    document.getElementById("displayErrors").innerHTML = rezultat;

}
  