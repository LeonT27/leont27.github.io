$(document).ready(function () {
    $('.js-section1').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, { 
        offset: '80px;'
    });
});