$(document).ready(function () {
    $("img").mouseover(function () {
        $("a").append("<span></span>");
        $("span").show();
    });
});