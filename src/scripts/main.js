jQuery(function () {
            
    jQuery("#tabs").tabs();
});

jQuery('.main__left-wrapper--big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.main__left-wrapper--small'
});
jQuery('.main__left-wrapper--small').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main__left-wrapper--big',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});