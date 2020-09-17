// export const phoneWithCountryCode = phoneCountryCode();
// console.log(phoneCountryCode())
var phoneNO = document.getElementsByClassName("countryCode");
    // form = document.querySelector("#teatcher_protile_info");
    // console.log(phoneNO);
    function phoneCountryCode() {
    var country_Code;
    if (phoneNO) {
        for (let i = 0; i < phoneNO.length; i++) {
            // console.log(phoneNO[i])
                    // here, the index maps to the error code returned from getValidationError - see readme
            // var errorMap = ["الرقم المدخل غير صحيح", "الرجاء التأكد من أدخل كود الدولة بشكل صحيح", "Too short", "Too long", "الرقم غير صحيح"];
            var phone_country_flag = $('.phone_country_flag').text();
         
            if (phone_country_flag == '')
                phone_country_flag = 'sa';
                // console.log(phone_country_flag)
    
            var iti = window.intlTelInput(phoneNO[i], {
                initialCountry: phone_country_flag,
                separateDialCode: true,
                utilsScript: "assets/js/plugin/utils.js",
            });
            console.log(iti.utilsScript)
           
            //var countryData = iti.getSelectedCountryData();
    
            // iti.setNumber("+447733123456");
    
            phoneNO[i].addEventListener('change', function () {
    
                // here we get the value of flag and country name and dialcode
                // console.log(iti)
                var countryName = iti.selectedCountryData.name,
                    countryFlag = iti.selectedCountryData.iso2,
                    countryCode = iti.selectedCountryData.dialCode;
    
                country_Code = {
                    'countryName': iti.selectedCountryData.name,
                    'countryFlag': iti.selectedCountryData.iso2,
                    'countryCode': iti.selectedCountryData.dialCode
                }
                // console.log(country_Code)
                // console.log("countryName: " + countryName);
                // console.log("countrycode: " + countrycode);
                // console.log("countryFlag: " + countryFlag);
                // $('.phone_country_flag').text(countryFlag)
               var thisCountryName = $(this).parent().nextAll('.country-name'),
               thisCountryFlag = $(this).parent().nextAll('.country-flag'),
               thisCountryCode = $(this).parent().nextAll('.country-code');
                // console.log($(this).parent().nextAll('.country-name'));
                // console.log($(this).parent().nextAll('.country-flag'));
                // console.log($(this).parent().nextAll('.country-code'));
                $(thisCountryName).val(countryName);
                $(thisCountryFlag).val(countryFlag);
                $(thisCountryCode).val(countryCode);
    
                // console.log("name: "+$(thisCountryName).val())
    
                // console.log("countryName: " + countryName);
                // console.log("countrycode: " + countryCode);
                // console.log("countryFlag: " + countryFlag);
    
    
                // store
                var userId = $('#userId').val();
                // console.log("userId: " + userId);
    
                if (userId){
                    var request = $.ajax({
                        url: window.location.origin + '/store-phone',
                        type: "get",
                        data: {
                            'phone_country_name': countryName,
                            'phone_country_code': countryCode,
                            'phone_country_flag': countryFlag,
                            'userId': userId
                        }
                    });
                    // Callback handler that will be called on success
                    request.done(function (response, textStatus, jqXHR) {
                        // console.log("Hooray, it worked!"+textStatus);
                        if (textStatus == 'success') {
                            // instanciate new modal
                        } else {
                            //error MSG
                            console.log('error MSG');
                        }
                    });
                    // Callback handler that will be called on failure
                    request.fail(function (jqXHR, textStatus, errorThrown) {
                        // Log the error to the console
                        console.error(
                            "The following error occurred: " +
                            jqXHR, textStatus, errorThrown
                        );
                    }); 
                }
                // console.log(country_Code)
                return country_Code;
            
    
            });
    
    
            $('.iti__country-list li').on('click', function () {
                phoneNO.value = "";
            });
    
            jQuery.validator.addMethod("countryCode", function (value, element) {
                return iti.getValidationError() === 0 && iti.isValidNumber() === true;
            }, " الرجاء التأكد من كود الدولة أو الرقم");
    
            $("#register-form").validate({
                rules: {
                phone: {
                    countryCode: true,
                    minlength: 9,
                    maxlength: 13,
                },
            },
            messages: {
                phone: {
                    minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 9 خانات',
                    maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
                }
            }
            });
    
            $("#student-register-form").validate({
                rules: {
                    phone: {
                        required: true,
                        countryCode: true,
                        minlength: 9,
                        maxlength: 13,
                    },
                },
                messages: {
                    phone: {
                        required: 'هذا الحقل مطلوب',
                        minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 9 خانات',
                        maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
                    }
                }
            });
            
            
        }
    }
  
}

phoneCountryCode();
// console.log( "asnma "+phoneCountryCode())