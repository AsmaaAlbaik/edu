$(document).ready(function() {
    $('.navbar-toggler').on('click', function () {
       $('.fixed-menu').animate({
         right: '0px'
       },200);
    });
    $('.fixed-menu img').on('click', function () {
       if ($(window).width() <= 400 ) {
         //  console.log("asmaa")
         $('.fixed-menu').animate({
            right: '-400px'
           },200);
       } else if ( ($(window).width() > 400) && ($(window).width() <= 600) ) {
         $('.fixed-menu').animate({
            right: '-600px'
           },200);
         } else if ( ($(window).width() > 600) && ($(window).width() <= 767) ) {
            $('.fixed-menu').animate({
               right: '-767px'
              },200);
         } else if ( ($(window).width() > 767) && ($(window).width() <= 800) ) {
            $('.fixed-menu').animate({
               right: '-800px'
            },200);  
         } else if ( ($(window).width() > 800) && ($(window).width() <= 991) ) {
            $('.fixed-menu').animate({
               right: '-991px'
            },200);
         }
     
    });
  });
  