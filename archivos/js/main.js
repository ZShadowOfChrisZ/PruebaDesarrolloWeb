$(document).ready(function(){
    // $('.carruselPrincipal').slick({
    //     dots: false,
    //     prevArrow: false,
    //     nextArrow: false,
    //     slidesToShow: 1,
    //     centerMode: false,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    // });

    $('.carruselPrincipal').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        // speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
});
