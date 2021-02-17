//exo6A
$(document).ready(function () {
    $(".image").css("opacity", "25%");
});

$(document).ready(function () {
    $(".image").mouseover(function () {
        $(".image").css("opacity", "100%");
    });
});
//

//exo 6B
$(document).ready(function () {
    $("ul").mouseover(function () {
        $("ul").css("margin-left", "50px");
    });
});
//

//exo6C
$("img").animate({
    "margin-left": "200px"

}, 1000);
//