$(function () {



    //탑팝업 닫기 버튼
    $(".top-banner i").on("click", function () {
        $(".top-banner").slideUp();
    });

    //메인 슬라이드
    var mainSlider = $(".visual-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });


    $(".link-btn>a").on("click", linkShow);

    function linkShow() {
        $(this).next().toggleClass("on");
        $(this).toggleClass("on");
        return false;
    }



    var slideDots = $(".slick-dots li");
    var slideItem = $(".visual-slider figure");

    slideItem.eq(1).addClass("on");
    mainSlider.on("afterChange", function (event, slick, current) {
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current + 1).addClass("on").siblings().removeClass("on");
    });

    var slidePause = $("#main-visual i.xi-pause");
    var slidePlay = $("#main-visual i.xi-play");

  
    slidePause.on("click", function () {
        mainSlider.slick("slickPause")
    });
    slidePlay.on("click", function () {
        mainSlider.slick("slickPlay")
    });
    slideDots.on("click", function () {
        var idx = $(this).index();
        mainSlider.slick("slickGoTo", idx)
    });



    //tab
    $(".tab-menu01 li").on("click", tabMove);

    function tabMove() {
        var idx = $(this).index();
        $(".tab-con01>div").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    }

    //사이트맵 만들기

    let allMenu = $(".gnb-menu").clone();
    allMenu.find("*").removeAttr("class");
    allMenu.addClass("total").removeClass().attr({
        id: "allMenu"
    });
    $("nav").append(allMenu);

    $("nav .xi-bars").on("click", function () {
        $("#allMenu").toggle();
    });



    //검색버튼
    $("nav .xi-search").on("click", function () {
        $("header .search").slideToggle();
    });

/*
    $(".quick-slider").slick({
        arrows: false,
        dots: false,
        //autoplay:true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 5,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll:2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]    
    });
*/
    $(".focus-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 1,
        dots: false,
    })

    $(".content-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 3,
        pauseOnFocus: true,
        dots: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })

    $(".top-banner i").on("click", function(){
        $(".top-banner").slideUp();
    });

    $(".mopen").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });

    $(".mobile-gnb-menu>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).parent().siblings().find("ul").stop().slideUp(300);
            $(this).next().stop().slideToggle(300);
        }
    });

    $(window).on("resize", function(){
        $(".gnb-submenu").removeClass("on");
    })


});
