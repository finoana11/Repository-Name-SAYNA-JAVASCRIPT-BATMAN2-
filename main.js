

btn-up

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("Btn-up").style.display = "block";
} else {
document.getElementById("Btn-up").style.display = "none";}
}$('body').on('click', '#Btn-up', function(event) {
event.preventDefault();
$('html,body').animate({
scrollTop: 0
}, 'slow');
});

//btn-down

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {document.getElementById("Btn-down").style.display = "none";
} else {
document.getElementById("Btn-down").style.display = "block";
}
}
$('body').on('click', '#Btn-down', function(event) {
event.preventDefault();
$('html,body').animate({
scrollTop: $('body').outerHeight() + 'px'
}, 'slow');
});
