// //search
// $("#search_top").on("submit", function() {
//     let seachVal = $("#searchInput").val();
//     if (!seachVal) alert("검색어를 입력하세요!");
// })

//기준 설정 
// var windowWidth = window.matchMedia("screen and (max-width: 768px)");

// if (windowWidth.matches) {
//     //screen and (max-width: 768px)에 해당한다.
//     alert('모바일 사이즈 입니다.')
// } else {
//     //screen and (max-width: 768px)에 해당하지 않는다.
//     alert('모바일 사이즈가 아닙니다.')
// }




// 수영점 지도 //
    new daum.roughmap.Lander({
        "timestamp" : "1638831931269",
        "key" : "28c3v",
        "mapHeight" : "360"
    }).render();


    
// 해운대점 지도//
	new daum.roughmap.Lander({
		"timestamp" : "1638832994503",
		"key" : "28c3w",
		"mapHeight" : "360"
	}).render();


    //mopen

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
