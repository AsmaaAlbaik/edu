$(".switch").click(function(event){
  event.stopPropagation();
  // alert("The span element was clicked.");
});
/*global $, JQuery , alert*/
$(function () {
    'use strict';
    // this function to prevent any added spaces
    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") < 0 && value != "";
    }, "عذراً ! لا يمكنك ترك مسافات ");

        // this function to accept just charachter value
        jQuery.validator.addMethod("acceptChar", function (value, element) {
          return this.optional(element) || /^[ءa-zA-Zأ-ي ]+$/i.test(value)
        }, "عذراً يجب ادخال حروف فقط !");

    // this function to check the blank and prevent submit the form with blank
    jQuery.validator.addMethod("noBlank", function (value, element) {
        return value.trim().length !== 0;
    }, "عذراً  ! الحقل فارغ ");

    $("#personal-info-form").validate({
      rules: {
        'name': {
          required: true,
          noBlank: true,
          acceptChar: true,
        },
        'Lname': {
          required: true,
          noBlank: true,
          acceptChar: true,
        },
        // phone: {
        //     required: true,
        //     minlength: 9,
        //     maxlength: 13,
        // },
        email: {
            required: true,
            email: true
          },
        accountName: {
            required: true,
        },
        accountNumber: {
            required: true,
        },
        password: {
            required: true,
        },
        'new-password': {
            required: true,
        },
        're-password': {
            required: true,
            equalTo: '#new-password'
        },
      },
      messages: {
        'name': {
            required: "هذا الحقل مطلوب",
        },
        'Lname': {
          required: "هذا الحقل مطلوب",
        },
      //   phone: {
      //     required: "هذا الحقل مطلوب",
      //     minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 9 خانات',
      //     maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
      // },
      accountName: {
          required: "هذا الحقل مطلوب",
      },
      accountNumber: {
          required: "هذا الحقل مطلوب",
      },
      email: {
        required: "هذا الحقل مطلوب",
        email: "الرجاء ادخال بريد الكتروني صحيح"
      },
      password: {
          required: "هذا الحقل مطلوب"
        },
        'new-password': {
          required: "هذا الحقل مطلوب",
        },
        're-password': {
          required: "هذا الحقل مطلوب",
          equalTo: 'الرجاء التأكد من تطابق كلمة المرور'
        },
      }
    });

    $("#teaching-field").validate({
        rules: {
            'specialties[]': {
                required: true,
            },
            'subjects[]': {
              required: true,
            },
            Years_of_experience: {
                required: true,
            }
        },
        messages: {
            'specialties[]': {
                required: "هذا الحقل مطلوب",
              },
              'subjects[]': {
                required: "هذا الحقل مطلوب",
              },
              Years_of_experience: {
                required: "هذا الحقل مطلوب",
            }
        }
    });
    $('#qualification').validate({
        rules: {
            'file': {
                required: true,
            },
        },
        messages: {
            'file': {
                required: "هذا الحقل مطلوب",
              },
        } 
    })

    $("#information").validate({
        rules: {
          'nickname': {
            required: true,
          },
          'specialty_id': {
            required: true,
          },
          email: {
            required: true,  
            email: true
          },
          'Bio': {
            required: true,    
          },
          'profile-image-s3url': {
            required: true,    
          }
        },
        messages: {
            'nickname': {
                required: "هذا الحقل مطلوب",
            },
            'specialty_id': {
                required: "هذا الحقل مطلوب",
            },
            email: {
                required: "هذا الحقل مطلوب",
                email: "الرجاء ادخال بريد الكتروني صحيح"
            },
            'Bio': {
                required: "هذا الحقل مطلوب",
            },
            'profile-image-s3url': {
                required: "هذا الحقل مطلوب",
            }
        }
      });

});