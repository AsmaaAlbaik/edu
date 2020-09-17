$(function () {
    $('.subsription-buttons button.free').click(function () {
        // console.log("asmaa");
        // $(".closed").css('pointer-events', 'none');
        // $('.tab--disabled .nav-pills').css('pointer-events', 'none');
        console.log("asooom")
        $('.subsription-buttons').animate({
            bottom: '-21rem',
        }, 600, function(){
            $('.subsription-buttons').css("display","none");
        });
    })
    $('.closed').click(function () {
        // console.log("asmaa");
        // $(".closed").css('pointer-events', 'none');
        // $('.tab--disabled .nav-pills').css('pointer-events', 'none');
        $('.subsription-buttons').css("display","block");
        $('.subsription-buttons').animate({
            bottom: '-6rem',
        }, 600);
    })
    $('.student-dashboard__right-content .card .card-body ul li').on('click', function () {
        var videoId = $(this).data('video-id');
        $(this).addClass('active').siblings().removeClass('active'); 
        $(this).parent().parent().parent().parent().prevAll('.card').find('li').removeClass('active')
        document.getElementById('course-video').src = `https://player.vimeo.com/video/${videoId}`;
    });
});