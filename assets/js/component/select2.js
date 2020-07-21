// options = {
//     tags: true
// }
var select2 = $('.select2').select2({
    // theme: 'bootstrap4',
    tags: true
});
// console.log(select2)
$('.select2').on('change', function(){
    // console.log($(this));
    
    // console.log($(this).val());
    // if ($(this).val() == 3) {
    //     options = {
    //         tags: true
    //     }
    // }
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
// $(document).ready(function(){

//   $('[data-toggle="popover"]').popover();   
// });