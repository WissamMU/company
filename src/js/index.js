import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js'
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import "../sass/style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



// show and hide details - latest work section
$(function () {
    $('.thumbnail2').hover(function () {
        $(this).find('.project-category').hide();
        $(this).find('.caption2').slideDown(250);
    },
        function () {
            $(this).find('.caption2').slideUp(250);
            $(this).find('.project-category').show();
        }
    );
});