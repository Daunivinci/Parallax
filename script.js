let pageSlider = new Swiper ('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    // Vertical slider
    direction: 'vertical',

    slidersPerView: 'auto',

    //turning on parallax
    parallax: true,

    //keyboar
    keyboard: {
        //turn on/off
        enabled: true,
        //Enable/disable only on viewport
        onlyInViewport: true,
        //Turt on/off buttons up/down controll
        pageUpDown: true,
    },

    //mouse
    mousewheel: {
        sensivity: 1,        
    },

    watchOverflow: true,

    speed: 800,

    //refresh slider when sliders elements changed
    observer: true,

    //refresh slider when sliders parents elements changed
    observerParents: true,

    //refresh slider when sliders childs elements changed
    observerSlideChildren: true,


    //Navigation
    //bullets, current position, progressbar
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },

    //Srolling
    scrollbar: {
        el: '.page__scroll',
        dtagClass: "page__drag-scroll",
        //scroll change postion
        draggable: true 
    },
}) 

