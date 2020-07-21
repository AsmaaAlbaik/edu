 $(document).ready(function () {
  $("form input").each(function( index ) {
    // console.log('hello');
    // console.log($(this));
  var label = $(this).next(".form__label");
  // console.log(label);

  if ($(this).val() != "") {
      label.addClass("has-data");
    } else {
      label.removeClass("has-data");
    }
});
  $("input").on("focusout keyup", function() {
    // console.log(this);
      var label = $(this).next('.form__label');
      // console.log(label);
      if ($(this).val() != "") {
        label.addClass("has-data");
      } else {
        label.removeClass("has-data");
      }
      if ($(this).hasClass('error')) {
        // console.log("erorr")
        var label = $(this).next().next('.form__label');
        label.addClass("has-data");
      }
  });

 });
