$(window).on('load', function() {
    $("span[data-id='curr-year']").html((new Date).getFullYear());
    $(".loader").fadeOut("slow");
});
$(document).ready(function() {
    $(document).on("click", ".tab-controll", function(e) {
        $(".tab-controll").removeClass("active");
        $(this).addClass("active");
    });
});