//VOLTAR AO TOPO SCROOL
$(function() { $(window).scroll(function() { if($(this).scrollTop() != 0) {
$('.backtopo').fadeIn();   } else { $('.backtopo').fadeOut(); } });
$('.backtopo').click(function() { $('body,html').animate({scrollTop:0},800); });
});
