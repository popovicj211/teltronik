

    window.onload = function(){
	     
		document.getElementById("query_taster").addEventListener("click",testiranjeAnkete);
		document.getElementById("reset_query").addEventListener("click",resetAnketa);
	
    
}


function testiranjeAnkete(){
    var ocena = document.getElementsByName("marks");
    var dizBen = document.getElementsByName("like");
    var anketaNiz = new Array();
    var greskaNiz = new Array();
     
     var izaberiOcenu = "";
    for(var i=0;i<ocena.length;i++){
      if(ocena[i].checked){             
               izaberiOcenu = "Ocena sajta je: " + ocena[i].value;
          }      
	  }
	  
	  if(izaberiOcenu == ""){
		 greskaNiz.push("Molimo vas čekitrajte ocenu");
	}else{
		anketaNiz.push(izaberiOcenu);
	}


	var izaberiAuto = "";
    for(var i=0;i<dizBen.length;i++){
      if(dizBen[i].checked){             
               izaberiAuto = "Više volim: " + dizBen[i].value;
          }      
	  }
	  
	  if(izaberiAuto == ""){
		 greskaNiz.push("Molimo vas čekitrajte ocenu");
	}else{
		anketaNiz.push(izaberiAuto);
	}

      //ISPIS
	var rezultat =""
	rezultat += "<ul>";
	if(greskaNiz.length != 0)
	{
		for(var i = 0; i < greskaNiz.length; i++)
		{	
			rezultat += "<li style='color:#ff0000; margin-left:20px; '>" + greskaNiz[i] + "</li>";
		}
	}
	else
	{
		for(var j = 0; j < anketaNiz.length; j++)
		{
			rezultat += "<li style='color:#fff; margin-left:20px;'>" + anketaNiz[j] + "</li>";
		}
	}
	
	rezultat += "</ul>";
	
	document.getElementById("anketaIspis").style.display = "block";
	document.getElementById("anketaIspis").innerHTML = rezultat;
}


function resetAnketa(){
	var ocenaReset = document.getElementsByName("marks");
	var dizBenReset = document.getElementsByName("like");

	
	var resetOcena = "";
    for(var i = 0; i < ocenaReset.length; i++){    
               resetOcena =  ocenaReset[i].checked = false;
              
	  }

	  var resetDizBen = "";
	  for(var i = 0; i < dizBenReset.length; i++){    
				 resetDizBen =  dizBenReset[i].checked = false;
				
		}

		var rezultatReset = "";
		document.getElementById("anketaIspis").innerHTML = rezultatReset;
  
}



$(document).ready(function(){
     question(); 
});

function question(){
    $("#question_block table tr:odd").css({'backgroundColor':'#ff0000','opacity':'0.6'});
    }


   
