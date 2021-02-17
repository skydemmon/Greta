//Exo5-céline

$(document).ready(function () {
    $("p").mouseenter(function () {
        $(this).css("background-color", "#EFECCA");
    });


    $("p").mouseleave(function () {
        $(this).css("background-color", "#fff");
    });
});