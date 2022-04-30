$(function(){
   



    
  $(window).on("scroll",function(){
      let sct=$(window).scrollTop();
      $(".section").each(function(){
          let this_top=$(this).offset().top;
          if(sct > this_top -400) {
              $(this).addClass("on");//.siblings().removeClass("on")
          }
          if(sct < 200) { $(".section").removeClass("on")}
      });
  });

  $("#intro h1").on("click", function(){
      $("#intro").addClass("on");
      $("#main .main-text").addClass("on");
  });
})

// //search
// $("#search_top").on("submit", function() {
//     let seachVal = $("#searchInput").val();
//     if (!seachVal) alert("검색어를 입력하세요!");
// })


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

$("#main-visual .xi-angle-left").on("click", function(){
    $(".main-slider").slick("slickPrev");
});    
$("#main-visual .xi-angle-right").on("click", function(){
    $(".main-slider").slick("slickNext");
});
});

// best-slider
$(".best-slider").slick({
arrows:false,
autoplay:true,
autoplaySpeed:2000,
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

]
});

    $("#best .xi-arrow-left").on("click", function(){
$("#best").slick("slickPrev");
});    
$("#best .xi-arrow-right").on("click", function(){
$(".best-slider").slick("slickNext");
});

$("#best .xi-arrow-left").on("click", function(){
$("#best").slick("slickPrev");
});    
$("#best .xi-arrow-right").on("click", function(){
$(".best-slider").slick("slickNext");
});
$(".b-right").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    pauseOnDotsHover:false,
    pauseOnDotsFocus:false,
    slidesToShow: 3,
    responsive: [
        {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
      breakpoint: 370,
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

    $(".con-slider").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
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

        $(".con-right").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    pauseOnDotsHover:false,
    pauseOnDotsFocus:false,
    slidesToShow: 1,
});



    $("#content .xi-arrow-left").on("click", function(){
    $("#content").slick("slickPrev");
});    
$("#content .xi-arrow-right").on("click", function(){
    $(".con-slider").slick("slickNext");
});





    $(".link-btn a").on("click", linkShow);
function linkShow(){
    $(".link").toggleClass("on");
    return false;
}




$("nav .xi-search").on("click", function () {
    $("header .search").slideToggle();
});

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


