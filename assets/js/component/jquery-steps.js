// $(function () {
//   'use strict';
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

if ($("#register-form")) {
  var register_form = $("#register-form").show();
 
  register_form.steps({
      headerTag: "h3",
      bodyTag: "fieldset",
      transitionEffect: "slideLeft",
     labels: {
      cancel: "Cancel",
      current: "current step:",
      pagination: "Pagination",
      finish: "اتمام التسجيل",
      next: "التالي",
      previous: "السابق",
      loading: "Loading ..."
  },
      onInit:  function (_event, _currentIndex) {
        // console.log(currentIndex);
        // if ( currentIndex == 0) {
          // console.log('asmaaa');
          $('.wizard > .actions > ul > li a[href="#previous"]').css('display', 'none')[0];
        // } else {
          var input = $(Object.values(register_form)[0]).find('input');
          var select = $(Object.values(register_form)[0]).find('select');
          var textarea = $(Object.values(register_form)[0]).find('textarea');
    
          input.each(function (_index, value) {
              if (input[_index].type == "file"){
                var name = $(value).attr('name');
                $(value).attr('data-default-file', $(value).next().val());
  
              } else if (input[_index].type == "password") {
  
              } else if (input[_index.type] == "number"){
                var name = $(value).attr('name');
                $(value).val(Number(sessionStorage.getItem(name)));
              }
              else {
                var name = $(value).attr('name');
                if (name != "_token"){
                  $(value).val(sessionStorage.getItem(name));
                }
              }
          });
          select.each(function (_index, value) {
            var name = $(value).attr('name');
            if ($(value).hasClass('select2')) {
              var term;
              if (sessionStorage.getItem(name)){
                term  = sessionStorage.getItem(name).split(",");
                $(value).find('option').each(function() {
                  var valueee = $(this).val();
                    console.log(valueee)
                    for (let index = 0; index < term.length; index++) {
                      if (term[index] != valueee) {
                        console.log("equal")
                        $(value).append(`<option>${term[index]}<option>`).trigger('change');
                      }
                    }
                });
                  console.log(term);
              }   
            } else {
              $(value).val(sessionStorage.getItem(name));
  
            }
          })
          textarea.each(function (_index, value) {
            var name = $(value).attr('name');
            $(value).val(sessionStorage.getItem(name));
          })
  
  
          // // // end sessions
          setTimeout(function(){ 
            input.each(function (_index, value) {
              if (input[_index].type == "file"){
                $(value).attr('data-default-file', '');
              } else {
                var name = $(value).attr('name');
                if (name != "_token") {
                  sessionStorage.removeItem(name);
                }
              }
            });
            select.each(function (_index, value) {
              var name = $(value).attr('name');
              sessionStorage.removeItem(name);
            })
            textarea.each(function (_index, value) {
              var name = $(value).attr('name');
              sessionStorage.removeItem(name);
            })
           }, 3000);
        
      },
      onStepChanging: function (_event, currentIndex, newIndex)
      {
  
        if (currentIndex == 1)
        {
          // $('.wizard > .actions > ul > li a[href="#previous"]').css('display', 'block')[0];
  
        }
          // Allways allow previous action even if the current form is not valid!
          if (currentIndex > newIndex)
          {
              return true;
          }
     
          // Needed in some cases if the user went back (clean up)
          if (currentIndex < newIndex)
          {
              // To remove error styles
              register_form.find(".body:eq(" + newIndex + ") label.error").remove();
              register_form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
          }
          register_form.validate().settings.ignore = ":disabled,:hidden";
          return register_form.valid();
      },
      onStepChanged: function (_event, _currentIndex, _priorIndex)
      {
        // var today = new Date();
        // var expiry = new Date(today.getTime() + 24 * 3600 * 1000);
  
        // function setCookie(name, value) {
        //   document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
        // }
  
      
        $('.wizard > .actions > ul > li a[href="#previous"]').css('display', 'block')[0];
      },
      onFinishing: function (_event, _currentIndex)
      {
   
        register_form.validate().settings.ignore = ":disabled";
          return register_form.valid();
          
      },
      onFinished: function (_event, _currentIndex)
      {
        var input = $(Object.values(register_form)[0]).find('input');
        var select = $(Object.values(register_form)[0]).find('select');
        var textarea = $(Object.values(register_form)[0]).find('textarea');
        // console.log(input)
        input.each(function (_index, value) {
          
          if (input[_index].type == "file"){
            var name = $(value).attr('name');
            var hidden = $(value).next().val();
            var val = $(value).val();
            $(value).attr('data-default-file', hidden );
            sessionStorage.setItem(name, hidden);
          } else if (input[_index].type == "password") {
          } else {
            if (name != "_token") {
                var name = $(value).attr('name');
                var val = $(value).val();
                sessionStorage.setItem(name, val)
            }
          }
        })
        select.each(function (_index, value) {
          var name = $(value).attr('name');
          var val = $(value).val();
          sessionStorage.setItem(name, val)
        })
        textarea.each(function (_index, value) {
          var name = $(value).attr('name');
          var val = $(value).val();
          sessionStorage.setItem(name, val)
        })
        register_form.submit();  
      }
  }).validate({
      errorPlacement: function errorPlacement(error, element) {
        element.before(error);
      },
      rules: {
        name: {
            required: true,
            noBlank: true,
            // numericOrSymbol: true,
            acceptChar: true,
            minlength: 4,
        },
        password: {
          required: true,
          minlength: 6,
        },
        password_confirmation: {
          required: true,
          equalTo: '#register-password'
      },
      bio: {
        required: true,
      },
      'qualification-img': {
            required: true,
            noBlank: true
      },
      Qualification: {
        required: true,
      },
      Years_of_experience: {
        required: true,
        noBlank: true
      },
      'profile-img': {
        required: true,  
      },
      phone: {
        required: true,  
        // countryCode: true,
        noBlank: true,
      },
      email: {
        required: true,
        email: true
      },
      'specialties[]': {
        required: true,
      },
      'personal-card-img-s3url': {
        required: true, 
      },
      'type-of-card': {
        required: true, 
      },
      'certification-img': {
        required: true,   
      },
      'card-img': {
        required: true,    
      },
      'courses[]': {
        required: true,
      }
    },
    messages: {
        name: {
            required: "هذا الحقل مطلوب",
            minlength: "لا يمكن أن يكون الاسم أقل من 4 حروف"
        },
        password: {
          required: "هذا الحقل مطلوب",
          minlength: "يجب أن لا تقل كلمة المرور عن 6 حروف"
        },
        password_confirmation: {
          required: "هذا الحقل مطلوب",
          equalTo: "الرجاء التأكد من تطابق كلمة المرور"
        },
        bio: {
          required: "هذا الحقل مطلوب",
        },
        Qualification: {
          required: 'هذا الحقل مطلوب '
        },
        'qualification-img': {
        required: "هذا الحقل مطلوب",
      },
      Years_of_experience: {
        required: "هذا الحقل مطلوب",
      },
      'profile-img': {
        required: "هذا الحقل مطلوب",
      },
      phone: {
        required: "هذا الحقل مطلوب",
        cantBeZero: true,
      },
      email: {
        required: "هذا الحقل مطلوب",
        email: "الرجاء ادخال بريد الكتروني صحيح"
      },
      'specialties[]': {
        required: "هذا الحقل مطلوب",
      },
      'personal-card-img': {
        required: "هذا الحقل مطلوب",
      },
      'type-of-card': {
        required: "هذا الحقل مطلوب",
      },
      'certification-img': {
        required: "هذا الحقل مطلوب",
      },
      'card-img': {
        required: "هذا الحقل مطلوب",
      },
      'courses[]': {
        required: "هذا الحقل مطلوب",
      }
    }
  });
  
}
// for student register form
if ($('#student-register-form')) {
    var registeredPhone;
    var student_register = $('#student-register-form').show();

    student_register.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
      labels: {
        cancel: "Cancel",
        current: "current step:",
        pagination: "Pagination",
        finish: "اشتراك",
        next: "الخطوة التالية",
        previous: "الخطوة السابقة",
        loading: "Loading ..."
    },
        onInit:  function (_event, _currentIndex) {
          // console.log(_currentIndex)
          $('.wizard > .actions > ul > li a[href="#previous"]').css('display', 'none')[0];
        },
        onStepChanging: function (_event, currentIndex, newIndex)
        {
          $('.wizard > .actions > ul > li a[href="#previous"]').css('display', 'block')[0];
            // Allways allow previous action even if the current form is not valid!
            if (currentIndex > newIndex)
            {
                return true;
            }
            // Needed in some cases if the user went back (clean up)
            if (currentIndex < newIndex)
            {
                // To remove error styles
                student_register.find(".body:eq(" + newIndex + ") label.error").remove();
                student_register.find(".body:eq(" + newIndex + ") .error").removeClass("error");
            }
            student_register.validate().settings.ignore = ":disabled,:hidden";
            return student_register.valid();
        },
        onStepChanged: function (_event, _currentIndex, _priorIndex)
        {
          var phone_el = $("#mobileNumber");
          // var flag = $('.phone_country_flag').text();
          // console.log(flag);

          var countryName = $(phone_el).parent().nextAll('.country-name').val(),
           countryFlag = $(phone_el).parent().nextAll('.country-flag').val(),
           countryCode = $(phone_el).parent().nextAll('.country-code').val();

          console.log(countryName + countryCode + countryFlag);
          // console.log(_currentIndex);
          var studentName = $("#student-name").val(), 
          phone = $("#mobileNumber").val(),
          password = $("#new-password").val(),
          register_email = $("#register-email").val();
          
        // var token = $('meta').attr("content");
        var token = $('#token').val();
        // console.log(token);
        //   if (_currentIndex == 1) {   
        
        //   }
        },
        onFinishing: function (_event, _currentIndex)
        {
          student_register.validate().settings.ignore = ":disabled";
            return student_register.valid();
        },
        onFinished: function (_event, _currentIndex)
        {
          var phone_el = $("#mobileNumber");
          // var flag = $('.phone_country_flag').text();
          // console.log(flag);

          var countryName = $(phone_el).parent().nextAll('.country-name').val(),
           countryFlag = $(phone_el).parent().nextAll('.country-flag').val(),
           countryCode = $(phone_el).parent().nextAll('.country-code').val();

          // console.log(countryName + countryCode + countryFlag);
          // console.log(_currentIndex);
          var studentName = $("#student-name").val(), 
          phone = $("#mobileNumber").val(),
          password = $("#new-password").val(),
          register_email = $("#register-email").val();
          
        // var token = $('meta').attr("content");
        var token = $('#token').val();
        // console.log(token)
        // console.log(phone)
        // console.log(password)
        // console.log(studentName)
          var request = $.ajax({
            url: window.location.origin + '/student-register',
            type: "post",
            data: {
                'name': studentName,
                'phone': phone,
                'phone_country_name': countryName,
                'phone_country_code': countryCode,
                'phone_country_flag': countryFlag,
                'email': register_email,
                'password': password,
                "_token" : token,
            }
        });
        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + textStatus);
            if (textStatus == 'success') {
                // console.log('success');
                // console.log(response);
                if (response.status == true) {
                  registeredPhone = response.phone;
                  swal({
                    icon: "success",
                    text: response.message
                  })
                  window.location.href = '/student-subscriptions';
                } else {
                  swal({
                    icon: "error",
                    text: response.message
                  })
                }
            }
        });
            // console.log(registeredPhone);
          //   var code = $("#code-number").val();
          //   // console.log(code)
          //   var token = $('#token').val();
          //   // console.log(token)
          //   var request = $.ajax({
          //     url: window.location.origin + '/api/v2/verify-code',
          //     type: "post",
          //     data: {
          //       'verified_code': code,
          //       'phone': registeredPhone,
          //       "_token" : token,
          //     }
          // });
          // Callback handler that will be called on success
          // request.done(function (response, textStatus, jqXHR) {
          //     console.log("Hooray, it worked!" + textStatus);
          //     if (textStatus == 'success') {
          //         // console.log('success');
          //         // console.log(response);
          //         if (response.status == true){
          //           swal({
          //             icon: "success",
          //             text: "تمت عملية التحقق بنجاج"
          //           }) 
          //           window.location.href = '/student-subscriptions';
          //         } else {                 
          //           swal({
          //             icon: "error",
          //             text: response.ar_message
          //           })
          //         }
          //         // 
          //     }
          // });
    
        }
    }).validate({
        errorPlacement: function errorPlacement(error, element) {
          element.before(error);
        },
        rules: {
          'student-name': {
              required: true,
              noBlank: true,
              acceptChar: true,
          },
          email: {
            required: true,
            email: true,
          },
          mobileNumber: {
            required: true,
            noBlank: true,
            minlength: 8,
            maxlength: 13,
          },
          'new-password': {
            required: true,
          },
          're-password': {
            required: true,
            equalTo: '#new-password'
        },
        'code-number': {
          required: true,
          minlength: 6,
          maxlength: 6,
        }
      },
      messages: {
        'student-name': {
          required: "هذا الحقل مطلوب",
        },
        email: {
          required: "هذا الحقل مطلوب",
          email: "الرجاء ادخال بريد الكتروني صحيح"
        },
        mobileNumber: {
          required: "هذا الحقل مطلوب",
          minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 8 خانات',
          maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
        },
        'new-password': {
          required: "هذا الحقل مطلوب",
        },
        're-password': {
          required: "هذا الحقل مطلوب",
          equalTo: 'الرجاء التأكد من تطابق كلمة المرور'
        },
        'code-number': {
          required: "هذا الحقل مطلوب",
          minlength: 'عذراً ! لا يمكن أن يكون الكود أقل من 6 خانات',
          maxlength: 'عذراً ! لا يمكن أن يكون الكود أكثر من 6 خانات',
        }
      }

    });
}
// $("#resendCode").on('click', function(){
//   // console.log("asmaaaa ali albaik")
//       var resendRequest = $.ajax({
//         url: window.location.origin + '/api/v2/resend-verify-code',
//         type: "post",
//         data: {
//           'phone': registeredPhone,
//           "_token" : token,
//         }
//     });
//     // Callback handler that will be called on success
//     resendRequest.done(function (response, textStatus, jqXHR) {
//         console.log("Hooray, it worked!" + textStatus);
//         if (textStatus == 'success') {
//             // console.log('success');
//             // console.log(response);
//             if (response.status == true){
//               swal({
//                 icon: "success",
//                 text: "تمت إعادة ارسال كود تحقق جديد"
//               })
//             } 
//         }
//     });
// });
// });