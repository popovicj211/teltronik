$(window).scroll(function(){
    var skrol = $(this).scrollTop();
    if(skrol > 200){
        $('#scrollToTop').fadeIn();
    }
    else {
            $('#scrollToTop').fadeOut();
      }
});

$('#scrollToTop').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 1000);
});