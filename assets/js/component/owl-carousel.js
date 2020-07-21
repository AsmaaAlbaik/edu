 $(document).ready(function(){

    $('.universities .owl-carousel').owlCarousel({
            rtl:true,
            loop:true,
            margin:40,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            nav: false,
            // center: true,
            autoWidth: true,
            autoplay: true,
            autoplayTimeout:1500,
            items:4,
            responsive:{
                0:{
                    items:1,
                    autoWidth: false,
                },
                768:{
                    items:3,
                    autoWidth: false,
                },
                1024:{
                    items:3,
                    autoWidth: false,
                },
                1200: {
                    item: 4,
                }
            }
    });
    $('.team .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:50,
        // animateOut: 'slideOutLeft',
        // animateIn: 'slideInRight',
        nav: false,
        center: true,
        autoplay:true,
        autoplayTimeout:2000,
        items:3,
        dots: true,
        responsive:{
            0:{
                items:1,
                autoWidth:true,
            },
            768:{
                items:2,
                autoWidth:true,
            },
            1000:{
                items:3,
            }
        }
      });
      $('.system-features .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:40,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplayHoverPause: true,
        // autoplayHoverPause: true, // Stops autoplay

        nav: false,
        // center: true,
        // autoWidth: true,
        autoplay: true,
        autoplayTimeout:1500,
        items:4,
        responsive:{
            0:{
                items:1,
                autoWidth: false,
                nav: true,
            },
            768:{
                items:1,
                autoWidth: false,
                nav: false,
            },
            991: {
                item: 2,
                nav: false,
                autoWidth: false,
            },
            1024:{
                items:3,
                autoWidth: false,
            },
            1200: {
                item: 4,
            }
        }
});
});