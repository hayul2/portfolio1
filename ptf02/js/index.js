$(function(){

    
        //main-slider//
    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        slidesToShow: 1,
        adaptiveHeight:true
    });
    
    
        $(".tent-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        pauseOnDotsHover:false,
        pauseOnDotsFocus:false,
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
    
    $(".mopen").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
        if(!$("nav").hasClass("on")){
            $(".gnb-submenu").removeClass("on");
        }
    });
/*
    gnb에 on상태로 on이 꺼지면 -> 열려잇는것들이 원상복귀된다.
    gnb>li or gnb>li>a 를 누르면 li의 sibling들이 접히고 해당 li는 열린다
    

*/
    $(".gnb-menu>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).parent().siblings().find("ul").removeClass("on");
            $(this).parent().siblings().find(".gnb-submenu").removeClass("on");
            $(this).next().toggleClass("on");
        }
    });

    $(window).on("resize", function(){
        $(".gnb-submenu").removeClass("on");
    })
    
    
         //totop
    $(".totop").on("click", toTop);
    function toTop(){
        $("html,body").animate({scrollTop:0},200);//1000�� 1珥�
    }
    $("totop").hide();
    $(window).on("scroll", topShow);
    function topShow(){
        var wh=$(window).scrollTop();
    if(wh>500){
         $(".totop").fadeIn();  
           }else{
            $(".totop").fadeOut();   
           }
    }
    //검색버튼
    $("nav .xi-search").on("click", function(){
        $("header .search").slideToggle();
    });   

});