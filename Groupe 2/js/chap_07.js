
$(document).ready(function () {
$( "a" ).append( "<span></span>" );
});

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