$(document).ready(function () {
    "use strict";
    $('[data-fancybox="gallery"]').fancybox({
        arrows: true,
        infobar: false,
        toolbar  : true,

        prevEffect  : 'none',
        nextEffect  : 'none',
 
                // Options will go here
    });
    $( "#send_request" ).on('click', function( event ) {
        // alert( "Handler for .submit() called." );
        // console.log($(this).find('input'))
        $("#contact-form").find('input').each((index,input) => {
            console.log(input)
            if (input.value !== "") {
                Swal.fire({
                    icon: 'success',
                    title: 'تم استلام طلبك وسيتم التواصل معك قريبا',
                    showConfirmButton: true,
                    confirmButtonText: 'تأكيد'
                })
            }
        })
 
        event.preventDefault();
      });
    
        $(window).scroll(function () {

            $('.slide').each(function() {

                if ($(window).scrollTop() >= $(this).offset().top - 50 ) {
                    // console.log("offset of window: "+ $(window).scrollTop())
                    // console.log('offset')
                    // console.log($(this).offset().top)

                var slideId = $(this).attr('id');
                if (slideId == 'slide-1' || slideId == 'slide-2') {
                    if (!$('.dot-slides > span[data-value="'+ slideId +'"]').hasClass('dot--white')) {
                        $('.dot-slides > span[data-value="'+ slideId +'"]').addClass(' dot--white').siblings().addClass(' dot--white');
                    }
                  
                } 
                else {
         
                    $('.dot-slides > span[data-value="'+ slideId +'"]').removeClass('dot--white').siblings().removeClass('dot--white');
                }
                $('.dot-slides > span[data-value="'+ slideId +'"]').addClass('active').siblings().removeClass('active'); 
                // console.log($('.dot-slides > span[data-value="'+ slideId +'"]'));
                }   
            });
        });
        $('.dot-slides > span').on('click', function () {
            var slideId = $(this)
            $('html, body').animate({
                scrollTop: $('#'+ $(this).data('value')).offset().top
            },1000, function () {
                // console.log("offset of slide div: ");
                console.log($('#'+ slideId.data('value')).offset().top)
                // console.log($('#'+ $(this).data('value')).offset().top )
                
            });

        });
        $('#back-to-home').on('click', function () {
            // console.log("a,sa")
            $('html, body').animate({

            scrollTop: $('#slide-1').offset().top

            },1500);
        });
        $('.scroll-down').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#slide-2').offset().top

            },1000);
        });
        
        $('#see-features').click(function() {

            $('html, body').animate({

                scrollTop: $('#slide-6').offset().top

            },1000);


        });
      
    });
    /*global $, JQuery , alert*/
$(function () {
    'use strict';
    // this function to prevent any added spaces
    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") < 0 && value != "";
    }, "عذراً ! لا يمكنك ترك مسافات ");

    // this function to check the blank and prevent submit the form with blank
    jQuery.validator.addMethod("noBlank", function (value, element) {
        return value.trim().length !== 0;
    }, "عذراً  ! الحقل فارغ ");

    $("#contact-form").validate({
      rules: {
        Fname: {
          required: true,
          noBlank: true
        },
        phone: {
            required: true,
            minlength: 8,
            maxlength: 13,
        },
        email: {
            required: true,
            email: true
          },
      },
      messages: {
        Fname: {
            required: "هذا الحقل مطلوب",
          },
          phone: {
            required: "هذا الحقل مطلوب",
            minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 8 خانات',
            maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
          },

        email: {
          required: "هذا الحقل مطلوب",
          email: "الرجاء ادخال بريد الكتروني صحيح"
        },
      }
    });


 

});