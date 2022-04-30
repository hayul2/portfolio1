$(function(){
    //-------------
    $(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        dots:true,
        
    });
    
    //---play&pause---//
    $(".xi-play").on("click", function(){
        $(".visual-slider").slick("slickPlay");
    });   
        $(".xi-pause").on("click", function(){
        $(".visual-slider").slick("slickPause");
    });
    
    //모바일 nav open
    $(".mopen").on("click", function(){
        $("nav").toggleClass("on")
    });


    //$("nav>ul>li").on("click", function(){
    //   if($("nav").hasClass("on")){
    //        $(this).toggleClass("on").siblings().removeClass("on");
    //    }
    //  });

    $("nav>ul>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).toggleClass("on");
            $(this).parent().siblings().find("a").removeClass("on");
        }
    });

    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $("nav>ul>li").removeClass("on");
    });

        $(".card-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        slidesToShow:4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    
    $(".stab-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        slidesToShow: 7,
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll:3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll:2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
//---left&right---//
    $("#service .xi-angle-left").on("click", function(){
        $(".stab-slider").slick("slickPrev");
    });    
    $("#service .xi-angle-right").on("click", function(){
        $(".stab-slider").slick("slickNext");
    });
    
    //content//
        $(".con-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        slidesToShow:4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]        
    });


 //tab
    $("#notice .tab-menu01 li").on("click", function(){
        var idx=$(this).index();
        $("#notice .tab-con01>div").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    });
     //tab
    $("#notice .tab-menu02 li").on("click", function(){
        var idx=$(this).index();
        $("#notice .tab-con02>div").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    });
    
    $("#service .stab-menu01 li").on("click", function(){
        var idx=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $('#service .stab-con01>div').eq(idx).addClass("on").siblings().removeClass("on");
    });
    
    

    
    $(".link-btn>a").on("click", linkShow);
    function linkShow(){
        $(this).next().toggleClass("on");
        $(this).toggleClass("on");
        return false;
    }
    
});