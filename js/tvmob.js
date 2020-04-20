
$(document).ready(function(){
     aboutCars();   
});
/*
	function aboutCars(){
		$(".about_tvmob_text").hide();
		$(".about_tvmob_block").hover(
			function(){
				 $(this).find(".about_tvmob_text").slideDown(2000);
				  
				},
		        	
			function(){		
					$(this).find(".about_tvmob_text").slideUp(2000);       
		});
	}
*/

function aboutCars(){
	$(".about_tvmob_text").hide();
	$(".about_tvmob_block").mouseover(
		function(){
			 $(this).find(".about_tvmob_text").slideDown(2000);
			  
			});
}