$(() => {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    var windowTop = $(this).scrollTop();

    $('.fade-scroll').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var objectTop = $(this).offset().top + $(this).outerHeight() - $(this).height();
      /* If the element is out of bounds of the window then fade it out */
      if (objectBottom - 80 < windowTop || objectTop + 80 > windowBottom) { // object fades out
        if ($(this).css('opacity') == 1) {$(this).fadeTo(400,0);}
      } else { //object comes into view
        if ($(this).css('opacity') == 0) {$(this).fadeTo(400,1);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
})
