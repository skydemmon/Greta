//Exo 4-Céline
$(document).ready(function () {
    $("#plus").click(function () {
        $("p").css("font-size", "2em");
    });
});

$(document).ready(function () {
    $("#moins").click(function () {
        $("p").css("font-size", "0.5em");
    });
});
//


$(document).ready(function () {
    $("img").on({
        mouseenter: function () {
            $("span").show();
        },

        mouseleave: function () {
            $("span").hide();
        },

    });
});