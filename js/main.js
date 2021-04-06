$(window).on("load", function () {
    AOS.refresh();
  
    $(".loader").fadeOut(1000);
    $("html").css("overflow-y", "auto");
  });

$(function () {
    AOS.init({
        once: true,
        disable: "mobile",
    });
    $(window).on("scroll", function () {
        AOS.refresh();
    });
    try{
        const player = new Plyr('#player');
    }catch(err){}
    
    // open Side Nav
    $(".menuTriger").on("click", function () {
        $(".sideNav").toggleClass("open");
        // $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
        setTimeout(function () {
        $(".sideNav").addClass("origin");
        }, 500);
    });

    // Close Side Nav
    $(".close1").on("click", function () {
        // $(".navover").removeClass("open");
        $(".sideNav").toggleClass("open");
        // $(".sideNav").toggleClass("origin");
        $("body").css("overflow", "auto");
        setTimeout(function () {
        $(".sideNav").removeClass("origin");
        }, 600);
    });

    // Tabs
    $(".tabs_head li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().find(`.${$(this).data("tab")}`).addClass("active").siblings(".tab").removeClass("active");
    })

    var swiper1 = new Swiper('.activity_tabs .tab .swiper-container', {
        autoplay: {
            delay: 5000,
        },
        pagination: {
          el: '.activity_tabs .tab .swiper-pagination',
          clickable: true
        },
        observer: true,
        observeParents: true,
        loop: true,
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            992: {
                spaceBetween: 16,
                slidesPerView: 4,
            },
        },
    });

    // Navbar Active On Scroll
    $(window).on("scroll", function() {
        if($(window).scrollTop() >= $(".navbar1").outerHeight()){
            $(".navbar1").addClass("scrolled");
        }else{
            $(".navbar1").removeClass("scrolled");
        }
    })

    try{
        new GreenAudioPlayer('.audio_Embed', { stopOthersOnPlay: true, showDownloadButton: true });
        PDFObject.embed($('#example1').data("src"), "#example1");
        $('[data-fancybox="data-fancybox"]').fancybox({
            // Options will go here
        });
    }catch(err){}

    // head_tabs
    $(".head_tabs li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active").parent().parent().parent().find($(this).data("tab")).addClass("active").siblings().removeClass("active");
    })

    // Categs Collapse
    $(".menuMetis li .arr").on("click", function() {
        // alert("Hi");
        $(this).next("ul").slideToggle();
    })

});
