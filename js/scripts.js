$(document).ready(function() {
    var $container = $('.blog-grid');

    var gutter = 30;
    var min_width = 345;
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: '.post',
            gutterWidth: gutter,
            isAnimated: true,
            columnWidth: function(containerWidth) {
                var box_width = (((containerWidth - gutter) / 2) | 0);

                if (box_width < min_width) {
                    box_width = (((containerWidth - gutter) / 2) | 0);
                }

                if (box_width < min_width) {
                    box_width = containerWidth;
                }

                $('.post').width(box_width);

                return box_width;
            }
        });

    });
});

// Animate loader off screen
$(window).load(function() {
    $(".preload").fadeOut("slow");;
});
