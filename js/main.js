// For Side Projects

// on click of leftBigPic, rightTopPic, rightBtmPic enlarge to whole screen

$( document ).ready(function() {

        'use strict';

        var smoothStateOptions = {
            prefetch: true,
            cacheLength: 2,
            anchors: 'a',
            onStart: {
                duration: 2400, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.addClass('is-exiting');

                    // Restart your animation
                    //smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');

                    // Inject the new content
                    $container.html($newContent);
                    $container.addClass('is-entering');

                }
            },
            onAfter: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-entering');


                }
            }
        };

        var smoothState = $('#main').smoothState(smoothStateOptions);

    //$('#main').smoothState({ debug: true });

});

