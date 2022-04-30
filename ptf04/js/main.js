$(function () {


    //main-slider//
    $(".main-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: false,
        slidesToShow: 1,
        adaptiveHeight: true,
    });


    $(".pro-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        pauseOnDotsHover: false,
        pauseOnDotsFocus: false,
        slidesToShow: 4,
          responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2,
        slidesToScroll: 2
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
    });




    //totop
    $(".totop").on("click", toTop);

    function toTop() {
        $("html,body").animate({
            scrollTop: 0
        }, 200); //1000占쏙옙 1�ο옙
    }
    $("totop").hide();
    $(window).on("scroll", topShow);

    function topShow() {
        var wh = $(window).scrollTop();
        if (wh > 500) {
            $(".totop").fadeIn();
        } else {
            $(".totop").fadeOut();
        }
    }
	$(".slider-wrap>div").slick({
		arrows:false,
		autoplay:true,
		swipe:true,
        autoplaySpeed:3000,
	});
	$(".slider-num li").eq(0).addClass("on");
	$(".slider-wrap>div").on("afterChange",function(event,slick,currentSlider){
		$(".slider-num li").eq(currentSlider).addClass("on").siblings().removeClass("on");
	})

	$(".slider-num li").on("click", slideNum);

	function slideNum(){
		var idx=$(this).index();
		$(".slider-wrap>div").slick("slickGoTo", idx);
		$(this).addClass("on").siblings().removeClass("on");
	}

    $(".mopen").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });

    $(".gnb-menu>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).parent().siblings().find("ul").removeClass("on")
            $(this).next().toggleClass("on");
        }
    });

    $(window).on("resize", function(){
        $(".gnb-submenu").removeClass("on");
    })

});