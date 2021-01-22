


/*------------------------STICKY HEADER--------------------------------*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


/*------------------------RESPONSIVE TOGGLE BUTTON--------------------------------*/



var close = document.getElementById('close');
var open = document.getElementById('open');
var toggle = document.getElementById('toggle');
    function openMenu(){
        toggle.style.left = "0";
        open.style.display = "none";
        close.style.display = "block";
    }
function closeMenu(){
        toggle.style.left = "-110%";
        close.style.display = "none";
        open.style.display = "block";
    }


/*------------------------SMOOTH SCROLL--------------------------------*/

$(function(){
$('#header .menu ul li a, .responsive ul li a').on('click', function(){

$('html, body').animate({

scrollTop: $($.attr(this, 'href')).offset().top

}, 500);
return false;

});


})





