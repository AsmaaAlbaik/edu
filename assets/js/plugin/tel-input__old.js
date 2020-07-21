var phoneNO = document.querySelector(".countryCode"),
    form = document.querySelector("#teatcher_protile_info");
// errorMsg = document.querySelector("#error-msg"),
// validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
// var errorMap = ["الرقم المدخل غير صحيح", "الرجاء التأكد من أدخل كود الدولة بشكل صحيح", "Too short", "Too long", "الرقم غير صحيح"];
// var phone_country_flag = $('.phone_country_flag').text();
// if (phone_country_flag == '')
//     phone_country_flag = 'sa';

var iti = window.intlTelInput(phoneNO, {
    initialCountry: 'sa',
    separateDialCode: true,
    utilsScript: "assets/js/plugin/utils.js",
});

//var countryData = iti.getSelectedCountryData();

// iti.setNumber("+447733123456");

phoneNO.addEventListener('change', function () {

    // here we get the value of flag and country name and dialcode
    var countryName = iti.selectedCountryData.name,
        countryFlag = iti.selectedCountryData.iso2,
        countrycode = iti.selectedCountryData.dialCode;

    // console.log("countryName: " + countryName);
    // console.log("countrycode: " + countrycode);
    // console.log("countryFlag: " + countryFlag);
    // console.log("countryFlag: " + countryFlag);



    // store
    var userId = $('#userId').val();
    var request = $.ajax({
        url: window.location.origin + '/store-phone',
        type: "get",
        data: {
            'phone_country_name': countryName,
            'phone_country_code': countrycode,
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

});


$('.iti__country-list li').on('click', function () {
    phoneNO.value = "";
});

  jQuery.validator.addMethod("countryCode", function (value, element) {
    return iti.getValidationError() === 0 && iti.isValidNumber() === true;
}, "الرجاء ادخال كود الدولة بشكل صحيح");
jQuery.validator.addMethod("preventArabicNumber", function (value, element) {
    // console.log(value.charAt(0));
    return ["٠","١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"].indexOf(value.charAt(0)) < 0;
  }, "الرجاء كتابة الرقم باللغة الانجليزية");

$("#register-form").validate({
    rules: {
    tel: {
        countryCode: true,
        preventArabicNumber: true,
        minlength: 9,
        maxlength: 13,
    },
},
messages: {
    tel: {
        minlength: 'عذراً ! لا يمكن أن يكون الرقم أقل من 9 خانات',
        maxlength: 'عذراً ! لا يمكن أن يكون الرقم أكثر من 9 خانات',
    }
}
});