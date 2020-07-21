var executed = false;
$('.tab .nav-pills .nav-link#live').on('click', function(){
 
    if (!executed) {
        executed = true;
        console.log(executed);
        MaterialAvatar(document.getElementsByClassName('md-avatar-circle'), {
            shape: 'circle',
            initials: '',

            randomColor: {hue: 'origin'}
        });
    }
    // document.getElementById("live-list").onload = function() {
      
    // }

 
})
    // $('.tab .nav-pills li:last-child .nav-link').tab('show')

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  
    e.target // newly activated tab
    console.log(e.target)
    e.relatedTarget // previous active tab
    console.log(e.relatedTarget)
  })
//    $('.md-avatar-circle').materialAvatar({
//        backgroundColor: '#f12a27',
//         textColor: '#777'
//     });

// console.log("asmaa")