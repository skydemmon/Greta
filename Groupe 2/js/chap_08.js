$(document).ready(function () {
$( "h1" ).wrap( '<div style="background-color:red";> </div>' );
$("p").after('<a href = "#top">Haut de Page</a>');
$("#contenu").after('<footer id="foot">@Copyright Groupe 2 - Greta 2021</footer>');
});