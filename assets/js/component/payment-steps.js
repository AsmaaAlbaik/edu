   // this function to check the blank and prevent submit the form with blank
   jQuery.validator.addMethod("noBlank", function (value, _element) {
    return value.trim().length !== 0;
}, "عذراً  ! الحقل فارغ ");
  
//   jQuery.validator.addMethod("countryCode", function (value, element) {
//     return iti.getValidationError() === 0 && iti.isValidNumber() === true;
// }, "الرجاء ادخال كود الدولة بشكل صحيح");

  // this function to check if the first char is nummeric of symbol and prevent it
  jQuery.validator.addMethod("numericOrSymbol", function (value, _element) {
    // console.log(value.charAt(0));
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "٠",
     "١", "٢", "٣", "٤", "٥", "٦", "٧", "٥   ٨", "٩", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", '+', "=", "/", "|", "{", "}", ";"].indexOf(value.charAt(0)) < 0;
}, "يجب أن تبدأ بحرف , غير مسموح أن تبدأ برقم أو رمز");
      
 // this function to accept just charachter value
 jQuery.validator.addMethod("acceptChar", function (value, element) {
  return this.optional(element) || /^[ءa-zA-Zأ-ي ]+$/i.test(value)
}, "عذراً يجب ادخال حروف فقط !");

  // this function to check if the first char is nummeric of symbol and prevent it
  jQuery.validator.addMethod("cantBeZero", function (value, _element) {
    // console.log(value.charAt(0));
    return ["0"].indexOf(value.charAt(0)) < 0;
}, "لا يمكن أن يبدأ الرقم ب 0");
var route_name = window.location.pathname;
//   console.log(route_name)
// if ((route_name != "/search" || route_name != "/" || route_name != "/services" || route_name != "/about-us")){
//   console.log("asmaa route")
if ($("#subscription-form")) {
  var form = $("#subscription-form").show();

  var course_id = $('#course_id').val();
  var token = $('#token').val();
  var coupon_code = $(".coupon_code").val();
  var coursePrice = $('#coursePrice').val();   

  var total_price = (Number(coursePrice) + (coursePrice * (5 / 100)));
  var isHasCouponCode = 0;
  var discount_value = 0;
  var radioChecked;
  // if user use or enter coupon code
  // if (coupon_code) {
    // console.log("asmaa");
    if (coupon_code != "") {
        var request = $.ajax({
            url: window.location.origin + '/coupon-operation',
            headers: {'X-CSRF-Token': token},
            type: "post",
            data: {'course_id': course_id, 'coupon_code': coupon_code}
        });

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            if (textStatus == 'success') {
                if (isNaN(response)) { // if error and returned error message
                    swal({
                        type: 'error',
                        title: response,
                        text: 'رسالة خطأ',
                        animation: false,
                        customClass: {
                            popup: 'animated tada'
                        }
                    })

                } else { // if success and returned discount value
                    $("#discount_value").text(response);
                    discount_value = response;
                    isHasCouponCode = 1;
                    var price_after_discount = coursePrice - response;
                    var course_after_discount_tax = price_after_discount * (5 / 100);

                    total_price = price_after_discount + course_after_discount_tax;
                    $("#total_price").text(total_price);
                }

            } else {
                // console.log('error');
            }
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            //Log the error to the console
            console.error(
                "The following error occurred: " +
                jqXHR, textStatus, errorThrown
            );
        });

    } else {
      // console.log($("#total_price").innerHTML = total_price);
      // console.log("asmaaa")
      $("#total_price").text(total_price + " ريال ");
    }
  // }
  form.steps({
      headerTag: "h3",
      bodyTag: "fieldset",
      transitionEffect: "slideLeft",
    labels: {
      cancel: "Cancel",
      current: "current step:",
      pagination: "Pagination",
      finish: "اشتراك",
      next: "الخطوة التالية",
      previous: "السابق",
      loading: "Loading ..."
  },
  onInit:  function (_event, currentIndex) {
    $('.fade:not(.show)').css('opacity', 1);
  },
  onStepChanging: function (_event, currentIndex, newIndex)
  {
    $('.wizard > .actions > ul > li a[href="#previous"]').css('display', 'block')[0];
    radioChecked =  $("#subscription-form input[type=radio]:checked").attr("id");
    $("#subscription-form input[type=radio]").on('change', function () {
          // if ($(this).checked == true){
          var id = $(this).attr("id");
          radioChecked = id;
          // console.log("id: " +id);
          $('.tab-content >' + "." + id).css("display", "block").siblings().css("display", "none");
          $('.fade:not(.show)').css('opacity', 1);
          $('.tab-content >' + "." + id).addClass(" active").siblings().removeClass("active");
          $('.tab-content >' + "." + id).addClass(" in").siblings().removeClass("in");

          document.querySelectorAll('[href="#next"]')[0].click();
          // console.log(document.querySelectorAll('[href="#next"]')[0]);
          // }
      });
      $('.tab-content > div input:not([type=hidden])').each(function () {
          $(this).removeAttr('required');
          // console.log($(this)[0])
          if ($(this)[0].type == "text") {
              $(this).removeAttr("noBlank");
          }
      });
      // Allways allow previous action even if the current form is not valid!
      if (currentIndex > newIndex)
      {
          return true;
      }
      // Needed in some cases if the user went back (clean up)
      if (currentIndex < newIndex)
      {
          // To remove error styles
          form.find(".body:eq(" + newIndex + ") label.error").remove();
          form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
      }
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
  },
  onStepChanged: function (_event, _currentIndex, _priorIndex)
  {

  },
  onFinishing: function (_event, _currentIndex)
  {
        // console.log(radioChecked);
        if (radioChecked == "radio-card-1") {
          $('.tab-content >' + "." + radioChecked + " input:not([type=hidden])").each(function () {
              $(this).attr("required", "required");
              // console.log($(this)[0]);

              if ($(this)[0].type == "text") {
                  $(this).attr("noBlank", true);
              }
          });

          form.validate().settings.ignore = ":disabled";
          return form.valid();
      } else if (radioChecked == "radio-card-2") {
          // console.log("two validate");
      } else {
          $('.tab-content >' + "." + radioChecked + " input:not([type=hidden])").each(function () {
              $(this).attr("required", "required");
              // console.log($(this)[0].type)

              if ($(this)[0].type == "text") {
                  $(this).attr("noBlank", true);
              }
          });
          // $('.tab-content >' + "." + radioChecked + " input:not([type=radio])").each(function () {
          //     $(this).attr("required", "required");
          //  });
          // console.log("three validate");
          form.validate().settings.ignore = ":disabled";
          return form.valid();
      }
      form.validate().settings.ignore = ":disabled";
      return form.valid();
  },
  onFinished: function (_event, _currentIndex)
  {
    // form.submit();  
      // window.open("student-dashboard.html", "_slef");
      if (radioChecked === "radio-card-3") {
        // if ($('.s3url').val() != ""){

        // }
        var s3url = $('.s3url').val();
        //*************************** start upload invoice section **************************//
        var uploadInvoiceRequest = $.ajax({
            url: window.location.origin + '/upload-invoice-payment',
            headers: {'X-CSRF-Token': token},
            type: "post",
            data: {
                'course_id': course_id,
                'coupon_code': coupon_code,
                'total_price': total_price,
                'Card_Holder': $('#Card_Holder').val(),
                's3url': s3url,
                //'discount_value': discount_value,
                'isHasCouponCode': isHasCouponCode,
            }
        });

        // Callback handler that will be called on success
        uploadInvoiceRequest.done(function (response, textStatus, jqXHR) {
            //console.log('response: ' + response.message);
            if (response.status == true) {

                swal({
                    type: 'success',
                    title: response.message,
                    text: 'رسالة نجاح',
                })
                location.reload(true);
            } else {

                swal({
                    type: 'error',
                    title: response.message,
                    text: 'رسالة خطأ',
                })
                modal.close();
            }

        });
        //*************************** end upload invoice section **************************
    } else if (radioChecked === "radio-card-2") {
        // console.log("two");
    } else {
        // console.log("three");
        //*************************** start PayTabs section ***************************
        var shipping_first_name = $.trim($('.shipping_first_name').val());
        var shipping_last_name = $.trim($('.shipping_last_name').val());

        var payTabsRequest = $.ajax({
            url: window.location.origin + '/payTabs-payment',
            headers: {'X-CSRF-Token': token},
            type: "post",
            data: {
                'course_id': course_id,
                'coupon_code': coupon_code,
                'discount_value': discount_value,
                'isHasCouponCode': isHasCouponCode,
                'shipping_first_name': shipping_first_name,
                'shipping_last_name': shipping_last_name,
            }
        });
        payTabsRequest.done(function (response, textStatus, jqXHR) {
            if (response.status == true) {
                window.location.href = response.payment_url;

            } else {

                swal({
                    type: 'error',
                    title: response.message,
                    text: 'رسالة خطأ',
                })
                modal.close();
            }
        });
        //*************************** PayTabs section **************************
    }

  }
}).validate({
  errorPlacement: function errorPlacement(error, element) {
    element.before(error);
  },
  rules: {
    // confirm: {
    //     equalTo: "#password-2"
    // },
    Card_Holder: {
        // required: true,
        // noBlank: true
    },
    // invoiceFile: {
    //     required: true,
    // },

    shipping_first_name: {
        // required: true,
        // noBlank: true
    },
    shipping_last_name: {
        // required: true,
        // noBlank: true

    },
},
messages: {
    Card_Holder: {
        required: "هذا الحقل مطلوب",
        // noBlank: true
    },
    invoiceFile: {
        required: "هذا الحقل مطلوب",
    },

    shipping_first_name: {
        required: "هذا الحقل مطلوب",
        // noBlank: true
    },
    shipping_last_name: {
        required: "هذا الحقل مطلوب",
        // noBlank: true

    },
    code: {
        required: "هذا الحقل مطلوب",
        // noBlank: true
    }
}

});
}
