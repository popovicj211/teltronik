window.onload = function(){
	
        //proveraForme();
		document.getElementById("send").addEventListener("click",proveraForme);
		document.getElementById("reset").addEventListener("click",resetovanje);
    
}

  
function proveraForme()
{
	
	var imePrezime, regImePrezime, formLista,formLista2, autoIzbor,autoIzbor2, tel, regTel, emailAdresa, regEmailAdresa, sifra, regSifra;
	
	//DOHVATANJE VREDNOSTI
	imePrezime = document.getElementById("imePrezime");
	tel = document.getElementById("tel");
	//grad = document.getElementById("grad").value;
	emailAdresa = document.getElementById("emailAdresa");
	sifra = document.getElementById("sifra");
	
	
	
	formLista = document.getElementById("list");
	autoIzbor = formLista.options[formLista.selectedIndex].text;
    formLista2 = document.getElementById("grad");
    autoIzbor2 = formLista2.options[formLista2.selectedIndex].text;
	
	//REGULARNI IZRAZI
	regImePrezime =/^[A-ZŠĐŽĆČ][a-zšđžćč]{2,10}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{2,15})+$/;
	regTel =/^(\+381\s?6|06)[01234569](\s|\/)?[\d]{3}(\-|\s|\/)?[\d]{2}(\-|\s|\/)?[\d]{1,2}$/;
    //regEmailAdresa =/^[\w]+[\.\_\-\w\d]*\@gmail\.com$/;
    regEmailAdresa =/^[a-z]{4,}(\.)?[a-z]{4,}([0-9]{0,5})?\@((gmail)|(yahoo)|(hotmail))\.com$/;
	regSifra =/^[a-z]{2,20}[0-9]{1,}$/;

	
	var Greske = new Array();
	var Podaci = new Array();
	
	if(regImePrezime.test(imePrezime.value))
	{
           Podaci.push("Ime i prezime: " + imePrezime.value);
           imePrezime.style = "border:2px solid #ecf0f1 ";  
	}
	else
	{
       
        Greske.push("Greska - ime i prezime!");
        imePrezime.style = "border:2px solid red ";
    }
    
    if(regSifra.test(sifra.value))
	{
               Podaci.push("Sifra: " + sifra.value);
               sifra.style = "border:2px solid #ecf0f1 ";
	}
	else
	{
       
        Greske.push("Greska - Sifra!");
         sifra.style = "border:2px solid red ";
	}

    if(regEmailAdresa.test(emailAdresa.value))
	{
            Podaci.push("Email Adresa: " + emailAdresa.value);
           emailAdresa.style = "border:2px solid #ecf0f1 ";
	}
	else
	{
      
        Greske.push("Greska - Email Adresa!");
        emailAdresa.style = "border:2px solid red ";
	}

    if(autoIzbor !="Izaberite")
	{
             Podaci.push("Model: " + autoIzbor);
             formLista.style = "border:2px solid #ecf0f1 ";
	}
	else
	{
       
             Greske.push("Izaberite model automobila")
             formLista.style = "border:2px solid red ";
    }
    
    if(autoIzbor2 !="Izaberite")
	{
           Podaci.push("Model: " + autoIzbor2);
           formLista2.style = "border:2px solid #ecf0f1 ";
	}
	else
	{
      
        Greske.push("Izaberite mesto")
         formLista2.style = "border:2px solid red ";
	}

	if(regTel.test(tel.value))
	{
            Podaci.push("Adresa: " + tel.value);
           tel.style = "border:2px solid #ecf0f1 ";
	}
	else
	{
      
           Greske.push("Greska - Broj mobilnog!");
           tel.style = "border:2px solid red ";
	}
	
	
	
	
	
	
	
	//ISPIS
	var rezultat ="<h2>OBAVESTENJE</h2>"
	rezultat += "<ul>";
	if(Greske.length != 0)
	{
		for(var i = 0; i < Greske.length; i++)
		{	
			rezultat += "<li style='color:#ff0000;'>" + Greske[i] + "</li>";
		}
	}
	else
	{
		for(var j = 0; j < Podaci.length; j++)
		{
			rezultat += "<li style='color:#fff;'>" + Podaci[j] + "</li>";
		}
	}
	
	rezultat += "</ul>";
	
	document.getElementById("print").style.display = "block";
	document.getElementById("print").innerHTML = rezultat;
}

function resetovanje(){

	var resetImePrezime = document.getElementById("imePrezime").value ="";
	var resetTel = document.getElementById("tel").value ="";
	var resetEmailAdresa = document.getElementById("emailAdresa").value ="";
	var resetSifra = document.getElementById("sifra").value ="";
	var resetListaModel = document.getElementById("list").text = "Izaberite";
	var resetListaGrad = document.getElementById("grad").text = "Izaberite";
	var imePrezimeBoja = document.getElementById("imePrezime").style = "border:2px solid #ecf0f1 ";  
	var telBoja = document.getElementById("tel").style = "border:2px solid #ecf0f1";
	var emailAdresaBoja = document.getElementById("emailAdresa").style = "border:2px solid #ecf0f1";
	var sifraBoja = document.getElementById("sifra").style = "border:2px solid #ecf0f1";
	var listModelBoja = document.getElementById("list").style = "border:2px solid #ecf0f1";
	var listGradBoja = document.getElementById("grad").style = "border:2px solid #ecf0f1"
	


	var ispis = "";
	document.getElementById("print").innerHTML = ispis;



}