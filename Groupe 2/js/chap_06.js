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

//exo6D

$(document).ready(function () {
    $(".thumb").mouseover(function () {
        var photoSrc = $(this).find("img").attr("src");
        $(this).append("<div class='big-img-cont'><img src='" + photoSrc + "' /></div>");
    });
});
