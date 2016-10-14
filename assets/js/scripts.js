//MENU ICON
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
nav.classList.toggle('mostrar');
});


//PARALLAX
$('.parallax').each(function(){
var $obj = $(this);
$(window).scroll(function() {
var yPos = -($(window).scrollTop() / $obj.data('speed')); 
var bgpos = '50% '+ yPos + 'px';
$obj.css('background-position', bgpos );
}); 
});


//ANCORA MENU    
$(document).ready(function(){
$('.ancora').click(function(){
var alvo = $(this).attr('href').split('#').pop();
$('html, body').animate({scrollTop: $('#'+alvo).offset().top }, 1000);
return false;
});
});



//VOLTAR AO TOPO SCROOL
$(function() { $(window).scroll(function() { if($(this).scrollTop() != 0) { 
$('.backtopo').fadeIn();   } else { $('.backtopo').fadeOut(); } }); 
$('.backtopo').click(function() { $('body,html').animate({scrollTop:0},800); });
});


