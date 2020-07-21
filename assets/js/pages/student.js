/*global $, JQuery , alert*/
$(function () {
$(".switch").click(function(event){
    event.stopPropagation();
    // alert("The span element was clicked.");
});
// var rightContent = $('.student-dashboard__right-content'),
//     leftContent = $('.student-dashboard__left-content');
$('.goToLeft').on('click', function (){
    console.log("asmaaaaaaaaaaaa");
    $(this).parent().parent().next().children('.playlist').css('display','block');
    var rightContent = $(this).parent('.student-dashboard__right-content'),
        leftContent =  $(this).parent().parent().next().children('.student-dashboard__left-content');
    rightContent.animate({
        opacity: 0,
    },200, function () {
        rightContent.css('display','none');
        leftContent.css('display','block');
        leftContent.animate({
            'opacity': 1,
        },200)
    });
});
$('.playlist').on('click', function (){
    // console.log('asmaa');
    $(this).css("display","none");
    var leftContent = $(this).parent(),
        rightContent =  $(this).parent().prev().children('.student-dashboard__right-content');
    console.log(leftContent);
    console.log(rightContent);
  
    leftContent.children(".student-dashboard__left-content").animate({
        opacity: 0,
    },200, function () {
        leftContent.children(".student-dashboard__left-content").css('display','none');
        rightContent.css({'display':'block'});
        rightContent.animate({
            'opacity': 1,
        },200)
    });
});
});