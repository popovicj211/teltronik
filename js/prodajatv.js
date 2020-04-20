$(document).ready(function(){

	
	
     
    $.ajax({
    url: "json/prodajatv.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
   

  var ispis ='';
  
for(var i = 0; i < data.length; i++){
ispis += '<div class="block_saletv">';
        ispis += '<h2>' + data[i].ime + '</h2>';
        ispis += '<div class="image_sale">'
        + '<img  src="'+ data[i].slike.src +'" alt="'+ data[i].slike.alt +'"  />';	 
       ispis += '</div>';
ispis += '<div class="about_model"> <table> <tr> <th>Specifikacija</th> </tr> <tr>'
                        + '<td>Tip ekrana je: '+ data[i].tipekrana +' </td> </tr> <tr> <td> Broj inča:'+ data[i].brinca +'</td> </tr>'
                + '<tr> <td> Rezolucija: '+ data[i].rezolucija +' </td> </tr> <tr> <td>Procesor:'+ data[i].procesor +'</td> </tr> <tr> <td>Smart:'+ data[i].smarttv +'</td>  </tr> <tr><td>Digitalni tjuner:'+ data[i].digtjuner +'</td> </tr>'
               + '</table> ';
                
ispis += '</div>';
ispis += '<div class="shopping_sell">'
+ 'Ocena:' + data[i].ocena
    + ' <div class="sell"><p>'+ data[i].cena +' RSD</p> </div> </div>';
 ispis += '</div>'; 
} 
 ispis += '<div class="cleaner"> </div>';
document.getElementById("sale_tv").innerHTML += ispis;
    },
    error: function(xhr,status, error) {
        console.log(error);
    }
});

$.ajax({
    type: 'GET',
    url: 'json/televizori.json',
    success: function(podaci){
        // console.log(podaci)
        var ispis = "";

        $.each(podaci, function(index, podatak){
            ispis += "<option value='" + podatak.id + "'>" + podatak.naziv + "</option>";
        });
        
        // document.querySelector("#kategorije").innerHTML += ispis;
        $('#categoriestv').append(ispis);
    }
});


$('#btnShow').click(function(){
    var modelId = parseInt($('#categoriestv').val());

    $.ajax({
        type: 'GET',
        url: 'json/prodajatv.json',
        success: function(podaci){
            var ispis = "";

            $.each(podaci, function(index, podatak){
                if(podatak.model.id == modelId || modelId == 0) {
                    ispis += '<div class="block_saletv">';
                        ispis += '<h2>' + podatak.ime + '</h2>';
                              ispis += '<div class="image_sale">'
                    + '<img  src="'+ podatak.slike.src +'" alt="'+ podatak.slike.alt +'"  />';	 
              ispis += '</div>';
               ispis += '<div class="about_model"> <table> <tr> <th>Specifikacija</th> </tr> <tr>'
                        + '<td>Tip ekrana je: '+ podatak.tipekrana +' </td> </tr> <tr> <td> Broj inča:'+ podatak.brinca +'</td> </tr>'
                + '<tr> <td> Rezolucija: '+ podatak.rezolucija +' </td> </tr> <tr> <td>Procesor:'+ podatak.procesor +'</td> </tr> <tr> <td>Smart:'+ podatak.smarttv +'</td>  </tr> <tr><td>Digitalni tjuner:'+ podatak.digtjuner +'</td> </tr>'
               + '</table> ';
                
              ispis += '</div>';
             ispis += '<div class="shopping_sell">'
                    + '<a href="kontakt.html">    <div class="fa fa-shopping-cart"  style="font-size:18px; margin-left:40px;"> </div> </a>'
                    + ' <div class="sell"><p>'+ podatak.cena +' RSD</p> </div> </div>';
             ispis += '</div>'; 
                }
            });
            ispis += '<div class="cleaner"> </div>';
            document.querySelector("#sale_tv").innerHTML = ispis;
        }
    });

});

$('#sort-nameaz').click(function(e){
    e.preventDefault();
    
    $.ajax({
        type: 'GET',
        url: 'json/prodajatv.json',
        success: sortirajProizvodeAZ
    });

});


function sortirajProizvodeAZ(podaci) {
    
    podaci.sort(function(proizvodA, proizvodB){
        if(proizvodA.ime > proizvodB.ime) return 1;
        else if(proizvodA.ime < proizvodB.ime) return -1;
        else return 0;
    });

    var ispis = prikazProizvodaAZ(podaci);

    $('#sale_tv').html(ispis);
}

function prikazProizvodaAZ(podaci){
    var ispis = "";
    $.each(podaci, function(index, podatak){
        ispis += '<div class="block_saletv">';
        ispis += '<h2>' + podatak.ime + '</h2>';
              ispis += '<div class="image_sale">'
    + '<img  src="'+ podatak.slike.src +'" alt="'+ podatak.slike.alt +'"  />';	 
ispis += '</div>';
ispis += '<div class="about_model"> <table> <tr> <th>Specifikacija</th> </tr> <tr>'
        + '<td>Tip ekrana je: '+ podatak.tipekrana +' </td> </tr> <tr> <td> Broj inča:'+ podatak.brinca +'</td> </tr>'
+ '<tr> <td> Rezolucija '+ podatak.rezolucija +' </td> </tr> <tr> <td>Procesor:'+ podatak.procesor +'</td> </tr> <tr> <td>Smart:'+ podatak.smarttv +'</td>  </tr> <tr><td>Digitalni tjuner:'+ podatak.digtjuner +'</td> </tr>'
+ '</table> ';

ispis += '</div>';
ispis += '<div class="shopping_sell">'
    + '<a href="kontakt.html">    <div class="fa fa-shopping-cart"  style="font-size:18px; margin-left:40px;"> </div> </a>'
    + ' <div class="sell"><p>'+ podatak.cena +' RSD</p> </div> </div>';
ispis += '</div>';
    });
ispis += '<div class="cleaner"> </div>';	
    return ispis;
}


$('#sort-nameza').click(function(e){
    e.preventDefault();
    
    $.ajax({
        type: 'GET',
        url: 'json/prodajatv.json',
        success: sortirajProizvodeZA
    });

});


function sortirajProizvodeZA(podaci) {
    
    podaci.sort(function(proizvodA, proizvodB){
        if(proizvodA.ime < proizvodB.ime) return 1;
        else if(proizvodA.ime > proizvodB.ime) return -1;
        else return 0;
    });

    var ispis = prikazProizvodaZA(podaci);

    $('#sale_tv').html(ispis);
}

function prikazProizvodaZA(podaci){
    var ispis = "";
    $.each(podaci, function(index, podatak){
        ispis += '<div class="block_saletv">';
        ispis += '<h2>' + podatak.ime + '</h2>';
              ispis += '<div class="image_sale">'
    + '<img  src="'+ podatak.slike.src +'" alt="'+ podatak.slike.alt +'"  />';	 
ispis += '</div>';
ispis += '<div class="about_model"> <table> <tr> <th>Specifikacija</th> </tr> <tr>'
        + '<td>Tip ekrana je: '+ podatak.tipekrana +' </td> </tr> <tr> <td> Broj inča:'+ podatak.brinca +'</td> </tr>'
+ '<tr> <td> Rezolucija: '+ podatak.rezolucija +' </td> </tr> <tr> <td>Procesor:'+ podatak.procesor +'</td> </tr> <tr> <td>Smart:'+ podatak.smarttv +'</td>  </tr> <tr><td>Digitalni tjuner:'+ podatak.digtjuner +'</td> </tr>'
+ '</table> ';

ispis += '</div>';
ispis += '<div class="shopping_sell">'
    + '<a href="kontakt.html">    <div class="fa fa-shopping-cart"  style="font-size:18px; margin-left:40px;"> </div> </a>'
    + ' <div class="sell"><p>'+ podatak.cena +' RSD</p> </div> </div>';
ispis += '</div>';
    });
ispis += '<div class="cleaner"> </div>';	
    return ispis;
}



$('#sort-cost19').click(function(e){
    e.preventDefault();
    var proizvodi = $('.block_saletv,.cleaner');
    
    proizvodi.sort(function(proizvodA, proizvodB){
        var cenaA = parseFloat($(proizvodA).find('.sell').text());
        var cenaB = parseFloat($(proizvodB).find('.sell').text());

        if(cenaA < cenaB) return -1;
        else if(cenaA > cenaB) return 1;
        else return 0;
    });

    $('#sale_tv').html(proizvodi);
});

$('#sort-cost91').click(function(e){
    e.preventDefault();
    var proizvodi = $('.block_saletv,.cleaner');
    
    proizvodi.sort(function(proizvodA, proizvodB){
        var cenaA = parseFloat($(proizvodA).find('.sell').text());
        var cenaB = parseFloat($(proizvodB).find('.sell').text());

        if(cenaA > cenaB) return -1;
        else if(cenaA < cenaB) return 1;
        else return 0;
    });

    $('#sale_tv').html(proizvodi);
});


});