// For Side Projects

// on click of leftBigPic, rightTopPic, rightBtmPic enlarge to whole screen

jQuery( document ).ready(function() {

    jQuery(".fancybox").fancybox({
             openEffect  : 'none',
            closeEffect : 'none'
    });

    $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
    });
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    });

    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
    wow.init();

    new WOW().init();

    // 'use strict';

    //     var smoothStateOptions = {
    //         prefetch: true,
    //         cacheLength: 2,
    //         anchors: '.mainWork a, .movingNav a', 
    //         onStart: {
    //             duration: 2400, // Duration of our animation
    //             render: function ($container) {
    //                 // Add your CSS animation reversing class
    //                 $container.addClass('is-exiting');

    //                 // Restart your animation
    //                 //smoothState.restartCSSAnimations();
    //             }
    //         },
    //         onReady: {
    //             duration: 0,
    //             render: function ($container, $newContent) {
    //                 // Remove your CSS animation reversing class
    //                 $container.removeClass('is-exiting');

    //                 // Inject the new content
    //                 $container.html($newContent);
    //                 $container.addClass('is-entering');

    //             }
    //         },
    //         onAfter: {
    //             duration: 0,
    //             render: function ($container, $newContent) {
    //                 // Remove your CSS animation reversing class
    //                 $container.removeClass('is-entering');


    //             }
    //         }
    //     };

    //     var smoothState = $('#main').smoothState(smoothStateOptions);

    //$('#main').smoothState({ debug: true });

    $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});

