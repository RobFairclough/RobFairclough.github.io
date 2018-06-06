$(document).ready(function () {    

    $( ".nav-link" ).click(function () {
        var linkTo = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(linkTo).offset().top }, 2000);
    });

});
