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

    $("#login").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          noBlank: true,
          noSpace: true,
        }
      },
      messages: {
        email: {
          required: "هذا الحقل مطلوب",
          email: "الرجاء ادخال بريد الكتروني صحيح"
        },
        password: {
          required: "هذا الحقل مطلوب"
        }
      }
    });

    $("#course-request-form").validate({
      rules: {
        'course-name': {
          required: true,
          noBlank: true
        },
        'uni-name': {
          required: true,
          noBlank: true
        },
        'teacher-name': {
          required: true,
          noBlank: true
        },
        email: {
            required: true,
            email: true
          },
      },
      messages: {
        'course-name': {
          required: "هذا الحقل مطلوب",
        },
        'uni-name': {
          required: "هذا الحقل مطلوب"
        },
        'teacher-name': {
          required: "هذا الحقل مطلوب"
        },
        email: {
          required: "هذا الحقل مطلوب",
          email: "الرجاء ادخال بريد الكتروني صحيح"
        },
      }
    });
});