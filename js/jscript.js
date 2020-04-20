



$(document).ready(function(){
        dropdown();		
});

function dropdown(){
	$('#menulist li ul').css({
    display: "none",
    left: "auto"
  });
  $('#menulist li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
}


$("html").animate({
 
  scrollTop: 800
 }, 1000);




