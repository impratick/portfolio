$(window).on('load', function() {
    $("span[data-id='curr-year']").html((new Date).getFullYear());
    $(".loader").fadeOut("slow");
});
$(document).ready(function() {
    $(document).on("click", ".tab-controll", function(e) {
        $(".tab-controll").removeClass("active");
        $(this).addClass("active");
        var target = $(e.target).attr("href");
        if (target) {
            window.location.hash = target;
        }
    });
    if (window.location.hash) {
        var hsah = window.location.hash;
        if ($('.nav-tabs a[href="' + hsah + '"]').length > 0) {
            $(".tab-controll").removeClass("active");
            $('.nav-tabs a[href="' + hsah + '"]').parent().addClass("active");
            $('.nav-tabs a[href="' + hsah + '"]').tab('show');
        }
    }
});