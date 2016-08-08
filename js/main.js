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

    function wow_add_scripts() {
    wp_register_script(
        'wow-script',
        get_stylesheet_directory_uri() . '/wow.min.js',
        false,
        '1.0',
        true
    );
 
    wp_enqueue_script( 'wow-script' );
    }
 
    add_action( 'wp_enqueue_scripts', 'wow_add_scripts' );

    new WOW().init();

     wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // change this if you are not using animate.css
        offset:       0,          // default
        mobile:       true,       // keep it on mobile
        live:         true        // track if element updates
      }
    )
   wow.init();

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

});

