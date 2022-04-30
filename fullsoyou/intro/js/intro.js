// //footer_link
// $(".link-btn a").on("click", linkShow);
// function linkShow(){
//     $(".link").toggleClass("on");
//     return false;
// }


// //search
// $("#search_top").on("submit", function() {
//     let seachVal = $("#searchInput").val();
//     if (!seachVal) alert("검색어를 입력하세요!");
// })

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