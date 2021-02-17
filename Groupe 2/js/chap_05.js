<<<<<<< HEAD
//Exo5-céline

$(document).ready(function () {
    $("p").on({
        mouseenter: function () {
            $(this).toggleClass("over");
        },

        mouseleave: function () {
            $(this).toggleClass("leave");
        },

    });
});

$("p").mouseleave(function () {
    $(this).css("background-color", "white");
});


$(".test").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});
=======
$(".test").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
>>>>>>> e7ab0da4d5d2e132fc740de3e0393a1d1748c9f4
