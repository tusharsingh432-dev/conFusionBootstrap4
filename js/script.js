$(document).ready(function(){
    $('#homeCarousel').carousel({interval : 2000});
    $('#carouselButton').click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $('#homeCarousel').carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');   
        } else {
            $('#homeCarousel').carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});

$('#loginModalBtn').click(function () {
    $('#loginModal').modal();
});
    $('#reserveBtn').click(function () {
    $('#reserve').modal();
});