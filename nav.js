$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fas fa-times');
        $('.navigate').toggleClass('nav-toggle');
    });

    
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fas fa-times');
        $('.navigate').removeClass('nav-toggle');
    });

});
