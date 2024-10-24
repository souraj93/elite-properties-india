$(document).ready(function(){
    $('.HeaderSlider').slick({
        arrows:false,
        dots:true,
        infinite:true,
        speed:1600,
        autoplay:true,
        fade: true,
       // slidesToShow:1,
        //vertical:true,
        slidesToScroll:1
    });

    $('.newly_lunched_slider').slick({
        arrows:false,
        dots:true,
        speed:1200,
        infinite:false,
        autoplay:false,
        slidesToShow:3,
        //vertical:true,
        slidesToScroll:3,
        responsive:[
            {
                breakpoint:1025,
                settings:{
                    dots:true,
                    slidesToScroll:2,
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    dots:true,
                    slidesToScroll:1,
                    slidesToShow:1
                }
            },
        ]
    });

    $('.affordable_slider').slick({
        arrows:false,
        dots:true,
        speed:1200,
        infinite:false,
        autoplay:false,
        slidesToShow:4,
        //vertical:true,
        slidesToScroll:4,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    dots:true,
                    slidesToScroll:3,
                    slidesToShow:3,
                }
            },
            {
                breakpoint:992,
                settings:{
                    dots:true,
                    slidesToScroll:3,
                    slidesToShow:3,
                }
            },
            {
                breakpoint:768,
                settings:{
                    dots:true,
                    slidesToScroll:2,
                    slidesToShow:2
                }
            },
            {
                breakpoint:576,
                settings:{
                    dots:true,
                    slidesToScroll:1,
                    slidesToShow:1
                }
            },
        ]
    });

    $('.ClientSpeak_Slider').slick({
        arrows:false,
        dots:true,
        speed:1200,
        infinite:false,
        autoplay:false,
        slidesToShow:1,
        //vertical:true,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:1025,
                settings:{
                    arrows:true,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:992,
                settings:{
                    arrows:true,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:576,
                settings:{
                    arrows:true,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
        ]
    });

    $('.brands_slider').slick({
        arrows:false,
        dots:false,
        speed:1200,
        infinite:true,
        autoplay:true,
        slidesToShow:6,
        //vertical:true,
        slidesToScroll:6,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    arrows:true,
                    slidesToShow:5,
                    slidesToScroll:5
                }
            },
            {
                breakpoint:992,
                settings:{
                    arrows:true,
                    slidesToShow:4,
                    slidesToScroll:4
                }
            },
            {
                breakpoint:576,
                settings:{
                    arrows:true,
                    slidesToShow:2,
                    slidesToScroll:2
                }
            },
        ]
    });

    $('.similar_slider').slick({
        arrows:true,
        dots:true,
        speed:1200,
        infinite:false,
        autoplay:false,
        slidesToShow:2,
        //vertical:true,
        slidesToScroll:2,
        responsive:[
            {
                breakpoint:1025,
                settings:{
                    dots:true,
                    slidesToScroll:2,
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    dots:true,
                    slidesToScroll:1,
                    slidesToShow:1
                }
            },
        ]
    });


    $('.CityBrochure_slider').slick({
            dots:true,
            centerMode: true,
            centerPadding: '140px',
            slidesToShow: 1,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });

    $('.sliderZone').slick({
        arrows:false,
        dots:true,
        speed:1200,
        infinite:true,
        autoplay:true,
        slidesToShow:6,
        //vertical:true,
        slidesToScroll:6,
        responsive:[
            {
                breakpoint:1025,
                settings:{
                    arrows:true,
                    slidesToShow:4,
                    slidesToScroll:4
                }
            },
            {
                breakpoint:992,
                settings:{
                    arrows:true,
                    slidesToShow:2,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:576,
                settings:{
                    arrows:true,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
        ]
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:false,
        fade:true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.slider-for',
        dots: false,
       // centerMode: true,
        focusOnSelect: true
    });



    AOS.init({
        duration: 700,
        offset:0,
    });
    
})