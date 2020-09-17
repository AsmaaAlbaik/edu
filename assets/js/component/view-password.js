$(document).ready(function () {

    $(".hide-show-pass").on("click", function() {
        var eye = $(this);
        // eye.css('color','#254A5D');

        var password = eye.prev().prev('input')[0];
        if (password == undefined) {
            password = eye.prev().prev().prev('input')[0];
            // console.log('undefined asm')
        }
        // console.log(password);
        // console.log("asmaa")
        if (eye.hasClass("fa-eye")) {
        // eye.css('color','#C7D1D5');
        eye.removeClass("fa-eye").addClass(" fa-eye-slash");
        $(password).prop("type", "text");
        } else {
        // eye.css('color','#254A5D');
        eye.removeClass("fa-eye-slash").addClass(" fa-eye");
        $(password).prop("type", "password");
        }
    });

    $('.empty-field').on('click', function(){
        var form = $(this).parent().parent('form')[0];
        // console.log(form);
        form.reset();
        // var input = $(this).parent().parent().find('input');
        // console.log(input);
        // $(input).each(function () {
        //     var type = $(this).attr('type');
        //     console.log("input type " +type);
        //     if ( (type !== 'hidden') || (type !== 'button') || (type !== 'submit')){
        //         $(input).val('');
        //     } 
        //   });
    })
});