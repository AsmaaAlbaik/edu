$(function($){
    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        // console.log('completed');
            $('.loading').hide('fast' , function(){
              $('.load').css({'display':'none'});
              $(this).css({'display':'none'});
              $('.contentPlaceholder .contentPlaceholder__box').fadeIn('slow');
              $('.contentPlaceholder .contentPlaceholder__box').show('slow');
            });
      }
  };

});
