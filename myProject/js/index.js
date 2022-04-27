<!-- made by Yang Cheng -->
"use strict";
$(document).ready(() => {
    $('#bxSliderWrap').bxSlider({
        auto: true,
        onSlideBefore: function (slideElement) {
            slideElement.find('.caption-group').each(function () {
                $(this).hide();
            });
            slideElement.next().find('.caption-group').each(function () {
                $(this).hide();
            });
        },
        onSlideAfter: function (slideElement) {
            slideElement.find('.caption-group').each(function () {
                $(this).fadeIn(500);
            });
        }
    });

});