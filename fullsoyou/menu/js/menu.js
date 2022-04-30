// //search
// $("#search_top").on("submit", function() {
//     let seachVal = $("#searchInput").val();
//     if (!seachVal) alert("검색어를 입력하세요!");
// })

//탭
$(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
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
  


