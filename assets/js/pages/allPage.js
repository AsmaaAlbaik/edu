//   // this code to check the type of browser that user user
//   // var browser = ["Chrome", "FireFox" , "Safari" , "Opera"];
//   var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i) , b;
//   if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
//     // alert('الرجاء استخدام متصفح كروم أو فيرفوكس'  + b);
//      b = "msie";
//      alert('الرجاء استخدام متصفح كروم أو فيرفوكس' );
//    }
//    else {
//      b = ua[1].toLowerCase();
//    }
//    $(function() {
//     //  console.log("asmaa");
//     var u = window.location.href
//                 // console.log(u)
//     $(".navbar li a").each(function() {
//     $h = "https:" + $(this).attr("href");
//     // console.log($h)
//     // console.log("asmaa")
//     if ($h == u || $h == '') {
//       // console.log(true);
//       $(this).parent().addClass("active").siblings().removeClass("active");
//       // console.log($(this).parent())
//     }
       
//     })
// });
    $(".modal--login .login-form__join a").click(function () {
        // console.log("click")
            $(".login-modal").modal("hide");
    });
    $(".modal--register__student").click(function () {
            // console.log("asmaa")
            $("#register-modal").modal("hide");
    });