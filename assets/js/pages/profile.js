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

    $("#personal-info-form").validate({
      rules: {
        name: {
          required: true,
          noBlank: true
        },
        Lname: {
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
        address: {
            required: true,
        },
        university_id: {
            required: true,
        }
      },
      messages: {
        name: {
            required: "هذا الحقل مطلوب",
          },
          Lname: {
            required: "هذا الحقل مطلوب",
          },
          phone: {
            required: "هذا الحقل مطلوب",
            minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 8 خانات',
            maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
          },
          address: {
            required: "هذا الحقل مطلوب",
        },
        university_id: {
            required: "هذا الحقل مطلوب",
        },
        email: {
          required: "هذا الحقل مطلوب",
          email: "الرجاء ادخال بريد الكتروني صحيح"
        },
      }
    });

    $("#account-info-form").validate({
        rules: {
            'old-password': {
                required: true,
            },
            'new-password': {
                required: true,
            },
            'confirm-password': {
                required: true,
                equalTo: '#new-password'
            },
        },
        messages: {
          'old-password': {
            required: "هذا الحقل مطلوب"
          },
          'new-password': {
            required: "هذا الحقل مطلوب",
          },
          'confirm-password': {
            required: "هذا الحقل مطلوب",
            equalTo: 'الرجاء التأكد من تطابق كلمة المرور'
          },
        }
    });

    $("#payment-info-form").validate({
        rules: {
          'name-card': {
            required: true,
          },
          'card-number': {
            required: true,
          },
          cvv: {
            required: true,    
          },
          'start-date': {
            required: true,    
          },
          'end-date': {
            required: true,    
          }
        },
        messages: {
            'name-card': {
                required: "هذا الحقل مطلوب",
            },
            'card-number': {
                required: "هذا الحقل مطلوب",
            },
            cvv: {
                required: "هذا الحقل مطلوب",
            },
            'start-date': {
                required: "هذا الحقل مطلوب",
            },
            'end-date': {
                required: "هذا الحقل مطلوب",
            }
        }
      });

});