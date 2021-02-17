//exo 3-Céline

$(document).ready(function () {
    $("p").mouseover(function () {
        $("p").addClass("fond");
    });
});

$(document).ready(function () {
    $("p").mouseout(function () {
        $("p").removeClass("fond");
    });
});

$("h2").attr("align", "center");
$("p").css("text-align", "center");


//