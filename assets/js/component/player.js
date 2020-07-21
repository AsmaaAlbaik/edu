
// console.log(activeLessonVideo)
// var livePlayer = videojs('live', {
//   playbackRates: [0.5, 1, 1.5, 2],
//   // sources: [{
//   //     src: '//path/to/video.mp4',
//   //     type: 'video/mp4'
//   //   }, {
//   //     src: '//path/to/video.webm',
//   //     type: 'video/webm'
//   //   }]
//   userActions: {
//       doubleClick: myDoubleClickHandler,
//       hotkeys: function(event) {
//           // `this` is the player in this context
    
//           // `x` key = pause
//           if (event.which === 88) {
//             this.pause();
//           }
//           // `y` key = play
//           if (event.which === 89) {
//             this.play();
//           }
//         }
//     },
// })
// var player = videojs('my-player', {
//     playbackRates: [0.5, 1, 1.5, 2],
//     // sources: [{
//     //     src: '//path/to/video.mp4',
//     //     type: 'video/mp4'
//     //   }, {
//     //     src: '//path/to/video.webm',
//     //     type: 'video/webm'
//     //   }]
//     userActions: {
//         doubleClick: myDoubleClickHandler,
//         hotkeys: function(event) {
//             // `this` is the player in this context
      
//             // `x` key = pause
//             if (event.which === 88) {
//               this.pause();
//             }
//             // `y` key = play
//             if (event.which === 89) {
//               this.play();
//             }
//           }
//       },
      
// });
var activeLessonVideo =  $('.student-dashboard__right-content .card .card-body ul li');
var firstactiveLessonVideo =  $('.student-dashboard__right-content #accordion2 .card .card-body ul li.active');
// var videoLesson;
// console.log(firstactiveLessonVideo)
var index, nextButton, prevButton;
$('#prvButton').attr("disabled",true);
$('#nextButton').attr("disabled",true);
$('#prvButton').on('click', function () {
  prevButton = $(this);
  $('#nextButton').removeAttr("disabled");
  // var lessonsNumber = activeLessonVideo.parent().children().length;
  index = activeLessonVideo.index();
  // console.log(index);
  if (index == 0) {
    prevButton.attr("disabled", true);
  } else {
    activeLessonVideo.removeClass('active').prev('li').addClass('active');
    var videoId = activeLessonVideo.prev('li').data('video-id');
    // console.log(videoId);
    var lesson_name = activeLessonVideo.prev('li').data('lesson-name');
    $("#lesson-name").text(lesson_name);
    // console.log(videoId)
    activeLessonVideo.prev('li').addClass('active').siblings().removeClass('active'); 
    //  console.log($(this).parent().parent().parent().parent().nextAll('.card').find('li').removeClass('active'))
    // activeLessonVideo.prev('li').parent().parent().parent().parent().prevAll('.card').find('li').removeClass('active');
     document.getElementById('course-video').src = `https://player.vimeo.com/video/${videoId}`;

    activeLessonVideo = activeLessonVideo.prev('li');
  }

});
$('#nextButton').on('click', function () {

    // var count = 0;
    // if (count == 0) {
    //   videoLesson = firstactiveLessonVideo;
    //   console.log(activeLessonVideo)
  
    //   count = 1;
    //   console.log(count);
    // } else {
    //   videoLesson = activeLessonVideo;
    // }
    nextButton = $(this);
    $('#prvButton').removeAttr("disabled");
    index = activeLessonVideo.index();

    // console.log(activeLessonVideo.parent().children().length);
    var lessonsNumber = activeLessonVideo.parent().children().length;

    if ((lessonsNumber-1) <= index) {
      // console.log("equal");
      nextButton.attr("disabled", true);
      // activeLessonVideo = activeLessonVideo.next('li').parent().parent().parent().parent().prevAll('.card').find('li');
      // console.log(activeLessonVideo);
      // activeLessonVideo.next('li').parent().parent().parent().parent().prevAll('.card').find('li').removeClass('active');
    } else {
      activeLessonVideo.removeClass('active').next('li').addClass('active');
      var videoId = activeLessonVideo.next('li').data('video-id');
      // console.log(videoId);
      var lesson_name = activeLessonVideo.next('li').data('lesson-name');
      $("#lesson-name").text(lesson_name);
      // console.log(videoId)
      activeLessonVideo.next('li').addClass('active').siblings().removeClass('active'); 
      //  console.log($(this).parent().parent().parent().parent().nextAll('.card').find('li').removeClass('active'))
      nextButton.removeAttr("disabled");
      document.getElementById('course-video').src = `https://player.vimeo.com/video/${videoId}`;
  
       activeLessonVideo = activeLessonVideo.next('li');
    }

    //  console.log(activeLessonVideo)
    // newPlayerSrc(videoId);

});
activeLessonVideo.on('click', function () {
  // console.log($(this));
  activeLessonVideo = $(this);
  $('#prvButton').removeAttr("disabled");
  $('#nextButton').removeAttr("disabled");
  // console.log(activeLessonVideo)
  // index = $(this).index();
  // console.log(index);
    var videoId = $(this).data('video-id');
    var lesson_name = $(this).data('lesson-name');
    $("#lesson-name").text(lesson_name);
    // console.log(videoId)
    $(this).addClass('active').siblings().removeClass('active'); 
    //  console.log($(this).parent().parent().parent().parent().nextAll('.card').find('li').removeClass('active'))
     $(this).parent().parent().parent().parent().prevAll('.card').find('li').removeClass('active');
     document.getElementById('course-video').src = `https://player.vimeo.com/video/${videoId}`;

 });
   // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    // get
//     var whereYouAt = player.currentTime();
//     // set
//     // player.currentTime(120); // 2 minutes into the video
//     player.currentType()

//     // Destroys the video player and does any necessary cleanup
//     // player.dispose();
//     // var lengthOfVideo = myPlayer.duration();
    
//     // Returns whether or not the player is in the "ended" state.
//     player.ended()

//     player.buffered();
//     var howMuchIsDownloaded = player.bufferedPercent();

//     // Number of different ranges of time have been buffered. Usually 1.
//     //    numberOfRanges = bufferedTimeRange.length,
//     //    // Time in seconds when the first range starts. Usually 0.
//     //    firstRangeStart = bufferedTimeRange.start(0),
//     //    // Time in seconds when the first range ends
//     //    firstRangeEnd = bufferedTimeRange.end(0),
//     //    // Length in seconds of the first time range
//     //    firstRangeLength = firstRangeEnd - firstRangeStart;

//     // var player = videojs('live');
//     function myDoubleClickHandler(event) {
//         // `this` is the player in this context
//         this.pause();
//     };

// // Check if the player is paused
//     var isPaused = player.paused();
//     var isPlaying = !player.paused();


//     // Returns the TimeRanges of the media that are currently available for seeking to.
//     player.seekable();

//     // Returns whether or not the player is in the "seeking" state.
//     player.seeking()
//     // console.log(player.bufferedPercent());

//     // Get or set the current volume of the media
//     // get
//     var howLoudIsIt = player.volume();
//     // set
//     player.volume(0.2); // Set volume to half
  // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
     // here for save the current time that user arraived if the video pause
       // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    //  player.on('pause', function() {
    //     localStorage.setItem("currentUserTime", player.currentTime());
    //   });
        // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      // here for save the current time that user arraived if the video play
        // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      // var timeCheck = function() {
      //     console.log(player.currentTime());
      //     localStorage.setItem("currentUserTime", player.currentTime());

      //     // Calculates how much time is left.
      //     var timeLeft = player.remainingTime();
      //     console.log(player.bufferedPercent());

      //       // if ( timeLeft == 0 ) {
      //       //     // player.clearInterval();
      //       //     // $( ".circle" ).remove();
      //       //     // activeLessonVideo.prepend('<img src="dist/img/student_dashboard_icons/done.svg" alt="answer">')
      //       //     console.log('video has finished go to the next automatically upload new video source');
      //       //     if (activeLessonVideo.hasClass('active')) {
      //       //         activeLessonVideo.removeClass('active').next('li').addClass('active');
      //       //         newPlayerSrc();
      //       //     }
      //       // }
      // };
      // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      // player.on('timeupdate', timeCheck);

      // player.on('play', function() {

      // });
      // function newPlayerSrc (videoId) {
      //   player.src([
      //       { type: "video/mp4", src: `https://player.vimeo.com/video/${videoId}` },
      //   ]);
      //   player.play();
      //   player.autoplay(true); 
      // }
      //  /////////////////////////////////////////////////////////////////////////////
    // set the the time that user arraived for
    /////////////////////////////////////////////////////////////////////////
    // player.currentTime(localStorage.getItem("currentUserTime"));

    // player.on('pause', function() {

    //     var modal_content = '<div class="mcwidget-embed" data-widget-id="999999">asmaaaa</div>';
      
    //     // where the magic happens
    //     var contentEl = document.createElement('div');
    //     // probably better to just build the entire thing via DOM methods
    //     contentEl.innerHTML = modal_content;
      
    //     var ModalDialog = videojs.getComponent('ModalDialog');
    //     var modal = new ModalDialog(player, {
    //         content: contentEl,
    //         temporary: false
    //     });
      
    //     // When the modal closes, resume playback.
    //     modal.on('modalclose', function() {
    //       player.play();
    //     });
      
    //   });

$('.tab .nav-pills .nav-item').on('click', function () {
  // player.pause();
  $('iframe').attr('src', $('iframe').attr('src'));
});

    //  modal popup
    // var modal_content = `<div id="do-this">do this</div>
    //  <div id="do-that">do that</div>
    //  <h1>Asmaa ALi </h1>`;

// var contentEl = document.createElement('div');

// contentEl.innerHTML = modal_content;
//     var ModalDialog = videojs.getComponent('ModalDialog');

//     var modal = new ModalDialog(player, {
//         content: contentEl,
//       // We don't want this modal to go away when it closes.
//       temporary: false
//     });
    
//     player.addChild(modal);
    
//     player.on('pause', function() {
//       modal.open();
//     });
    
//     player.on('play', function() {
//       modal.close();
//     });