  // startIntro();
  // var intro;
  // function startIntro(){
  //     intro = introJs();
  //     intro.setOptions({
  //       title: "Right To Left",
  //       nextLabel: "التالي",
  //       prevLabel: "السابق",
  //       doneLabel: "تم",
  //       skipLabel: "تخطي",
  //       tooltipPosition: 'auto',
  //       showBullets: false,
  //       steps: [
  //         {
  //           element: document.querySelectorAll('#step1')[0],
  //           intro: `<h4>قائمة دروس المنهج<h4>
  //           <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //           position: 'left'
  //         },
  //         {
  //           element: document.querySelectorAll('#step2')[0],
  //           intro: `<h4>قائمة دروس المنهج<h4>
  //           <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //           position: 'left'
  //         },
  //         {
  //         element: document.querySelectorAll('#step3')[0],
  //         intro: `<h4>قائمة دروس المنهج<h4>
  //         <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //         position: 'left'
  //         },
  //         {
  //         element: document.querySelectorAll('#step4')[0],
  //         intro: `<h4>قائمة دروس المنهج<h4>
  //         <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //         position: 'left'
  //         },
  //         {
  //         element: document.querySelectorAll('#step5')[0],
  //         intro: `<h4>قائمة دروس المنهج<h4>
  //         <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //         position: 'left'
  //         },
  //         {
  //         element: document.querySelectorAll('#step6')[0],
  //         intro: `<h4>قائمة دروس المنهج<h4>
  //         <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //         position: 'left'
  //         },
  //       ]
  //     });
  //     intro.start();
  //     // intro.onexit();
  //     intro.onchange(function(targetElement) {
  //       $('.tab').removeClass('introjs-fixParent');
  //       $('.skip').hide();
   
  //     });
  //     intro.onbeforechange(function(targetElement) {
  //       $('.tab').removeClass('introjs-fixParent');
  //     });
  //     intro.onafterchange(function(targetElement) {
  //       $('.tab').removeClass('introjs-fixParent');
  //       if ($('.introjs-nextbutton').hasClass('introjs-disabled')) {
  //         // alert('has');
  //         $('.introjs-nextbutton').css('display','none');
  //         $('.introjs-tooltipbuttons .introjs-button.introjs-skipbutton').css('display','inline-block');

  //       }  // if ($('.introjs-nextbutton').hasClass('introjs-disabled')) {
  //       //   alert('has');
  //       // }
  //     });
  //     intro.oncomplete(function() {
  //       // alert("end of introduction");
  //       // add class introjs-donebutton intsed of done
  //     });
  //     intro.onexit(function() {
  //       // $('.skip').css('display','none');
  //       // alert("exit of introduction");
  //     });
  // }
  // function exitIntro(){
  //   intro = introJs();
  //   intro.setOptions({
  //     title: "Right To Left",
  //     nextLabel: "< التالي",
  //     prevLabel: "السابق>",
  //     doneLabel: "تم",
  //     skipLabel: "تخطي",
  //     tooltipPosition: 'auto',
  //     showBullets: false,
  //     steps: [
  //       {
  //         element: document.querySelectorAll('#step1')[0],
  //         intro: `<h4>قائمة دروس المنهج<h4>
  //         <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //         position: 'left'
  //       },
  //       {
  //         element: document.querySelectorAll('#step2')[0],
  //         intro: `<h4>قائمة دروس المنهج<h4>
  //         <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //         position: 'left'
  //       },
  //       {
  //       element: document.querySelectorAll('#step3')[0],
  //       intro: `<h4>قائمة دروس المنهج<h4>
  //       <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //       position: 'left'
  //       },
  //       {
  //       element: document.querySelectorAll('#step4')[0],
  //       intro: `<h4>قائمة دروس المنهج<h4>
  //       <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //       position: 'left'
  //       },
  //       {
  //       element: document.querySelectorAll('#step5')[0],
  //       intro: `<h4>قائمة دروس المنهج<h4>
  //       <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //       position: 'left'
  //       },
  //       {
  //       element: document.querySelectorAll('#step6')[0],
  //       intro: `<h4>قائمة دروس المنهج<h4>
  //       <p>من هنا يمكنك متايعة الدروس ومعرفة انجازك بالدروة</p>`,
  //       position: 'left'
  //       },
  //     ]
  //   });
  //   // intro.start();
  //   intro.exit();
  //   intro.onexit(function() {
  //     // $('.skip').css('display','none');
  //     // alert("exit of introduction");
  //   });
  // }
  // setTimeout(function () {
  //   $('.introjs-tooltipbuttons').after(`
  //     <div class="skip">
  //       <div class="content">
  //         <div class="row">
  //           <div class="col-12 col-sm-8">
  //               <p>هل تحب أن تأخذ جولة سريعة في لوحة الكورس ؟</p>
  //           </div>
  //           <div class="col-12 col-sm-4">
  //               <button class="introjs-button introjs-skipbutton" id="skip">
  //                   تخطي
  //               </button>
  //               <button class="start" id="">
  //                   بدء الجولة
  //               </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   `);
  //   $('.skip .start').on('click', function () {
  //     // $('.skip').hide();
  //     // $('.skip').css('display','none');
  //     startIntro();
   
  //   });
  //   $('.skip #skip').on('click', function () {
  //     exitIntro();
  //   });
  //   $('.tab').removeClass('introjs-fixParent');

  // },500);
