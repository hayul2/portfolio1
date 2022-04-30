$(function(){
    setTimeout(intro,400) ;
    function intro(){
        $(".section").eq(0).addClass("on");
        $("nav li").eq(0).addClass("on");
    }
    
    //페이지필링
    $("#portfolio").pagepiling({
        anchors:["intro","con01","con02","con03","con04","con05"],
        direction: 'horizontal',
        sectionsColor:["#fff","#f7f7f7","#fff","#f7f7f7","#fff"],
        afterLoad:function(a,idx){//1.2.3
            console.log(idx);
            $(".m-btn li").eq(idx-1).addClass("on").siblings().removeClass("on");
            $(".section").eq(idx-1).addClass("on").siblings().removeClass("on");
            if(idx==2 || idx==4 || idx==6) {
                $("nav li").addClass("oo");
                $("header,footer,section").addClass("oo");
            }else{
                $("nav li").removeClass("oo");
                $("header,footer,section").removeClass("oo");
            }
        },
    });

    //menu popup,popclose
    $(".m_bar").on("click",function(){
        $(this).toggleClass("on");
        $(".menu").toggleClass("on");
    });

    //menu click section
    $(".menu a, .m-btn a").on("click",function(){
        $("html,body").stop().animate({scrollTop:$(this.hash).offset().top},0);
        $(".menu").removeClass("on");
        $(".m_bar").removeClass("on");
    });
    
    
    //hover fortfolio
    $(".section .case").on("mouseenter", function(){
        var imgH=$(this).find("a").height();
        var caseH=$(this).height();
        
        $(this).find("a").css({top:-(imgH-caseH)})
        
    });
    $(".section .case").on("mouseleave", function(){
        var imgH=$(this).find("a").height();
        var caseH=$(this).height();
        
        $(this).find("a").css({top:0})
        
    })
    
    //m-btn .on
    $(".section").each(function(index){
        var thisTop = $(this).offset().top;
        $(".m-btn li").eq(0).addClass("on");
        $(window).on("scroll", function(){
            var wTop = $(window).scrollTop();
            console.log(wTop);
            console.log(thisTop);
            if(wTop > thisTop - 100) {
                $("m-btn li").eq(index).addClass("on").siblings().removeClass("on");
            };
        })
    })
    
    
    //cookie 오늘하루 열지않기 팝업

$("#popup").draggable();

if(!$.cookie("ddays")) $("#popup").show();
$(".close").on("click", function(){
    if($("#daycheck").is(":checked")) $.cookie('ddays', 'Y', { expires: 1 });
    $("#popup").hide();
});


    
    //마우스 휠이벤트를 했을때
    //pf01이 active 클래스를 가지게되면 bg-color의 left를 0으로 한다
    //intro가 active 클래스를 가지게되면 bg-color의 left를 다시 -100vw로 한다
    $("html, body").on('mousewheel', function(event,delta){
        if(delta != 0){
            if($(".pf01").hasClass('active')){
//              $(".bg-color").animate({left: "0px"}, 300);
                $(".bg-color").fadeIn(1000);
            }else if($(".intro").hasClass('active')){
//              $(".bg-color").animate({left: "-100vw"},300);
                $(".bg-color").fadeOut(1000);
            }
        }
    })
})