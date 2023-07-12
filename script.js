$(document).ready(function() {

    $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-submenu').toggle();
        $('.nav-submenu').not($(this).siblings()).hide();
        $('.input-icons').show();
        e.stopPropagation();
    });

    $('html').click(function() {
        $('.nav-submenu').hide();


    });


    $('#nav-boton').click(function() {
        var inputDiv = document.getElementById('hide-input');
        $('.nav-menu').toggle();
        $('#nav-boton').toggleClass("activo");

        if (inputDiv.style.opacity === '1') {
            inputDiv.style.opacity = '0';
            $('.main-content-menu').hide();
            $('.view-order').hide();
        } else if (inputDiv.style.opacity === '0') {
            inputDiv.style.opacity = '1';
            $('.main-content-menu').show();
            $('.view-order').show();
        }
    })


});