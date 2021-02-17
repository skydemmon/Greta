
// EXO 6a 1
$(document).ready(function () {
    $(".image").css("opacity", "25%");
});

$(document).ready(function () {
    $(".image").mouseover(function () {
        $(".image").css("opacity", "100%");
    });
});
// EXO 6a 1

$(document).ready(function () {
    $("#menu").mouseover(function () {
        $("#menu").css("margin-left", "50px");
    });
});

$(document).ready(function () {
    $("img").animate({
        "margin-left": "200px"

    }, 1000);

});

$(document).ready(function () {
$(".tumb").click(function(){
    var photoSrc = $(this).find("img").attr("src");
    $(this).append("<div class='big-img-cont'><img src='"+photoSrc+"' /></div>");
});
});