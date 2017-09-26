$(".button-collapse").sideNav();

$('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: true });

changeCarousel();

function changeCarousel() {
    setTimeout(function() {
        $('.carousel').carousel('next');
        changeCarousel();
    }, 4000);
}