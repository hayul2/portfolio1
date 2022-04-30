// //search
// $("#search_top").on("submit", function() {
//     let seachVal = $("#searchInput").val();
//     if (!seachVal) alert("검색어를 입력하세요!");
// })

//tab
$(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
    });


//     //footer_link
//     $(".link-btn a").on("click", linkShow);
// function linkShow(){
//     $(".link").toggleClass("on");
//     return false;
// }

//아코디언메뉴//
$(".que").click(function() {
   $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});


// function Submit() {
// 	var form = document.Regist;

// 	if($("input:checkbox[id=agree]").is(":checked") == true) {
// 	}else{
// 		alert("이용약관에 동의해야 합니다.");
// 		form.agree.focus();
// 		return;
// 	}
// 	if (form.user_nm.value =="") {
// 		alert("성명을 입력해 주세요");
// 		form.user_nm.focus();
// 		return;
// 	}
// 	if (form.age_group.value =="") {
// 		alert("연령대를 입력해 주세요");
// 		form.age_group.focus();
// 		return;
// 	}
// 	if (form.email1.value =="") {
// 		alert("이메일을 입력해 주세요");
// 		form.email1.focus();
// 		return;
// 	}
// 	if (form.email2.value =="") {
// 		alert("이메일을 입력해 주세요");
// 		form.email2.focus();
// 		return;
// 	}

// 	if (form.hp.value =="") {
// 		alert("연락처를 입력해 주세요");
// 		form.hp.focus();
// 		return;
// 	}

// 	if (form.home_addr1.value =="") {
// 		alert("주소를 입력해 주세요");
// 		form.home_addr1.focus();
// 		return;
// 	}

// 	if (form.home_addr2.value =="") {
// 		alert("상세주소를 입력해 주세요");
// 		form.home_addr2.focus();
// 		return;
// 	}

// 	if (form.invest_amt.value =="") {
// 		alert("투자가능금액을 입력해 주세요");
// 		form.invest_amt.focus();
// 		return;
// 	}

// 	if (form.store_addr1.value =="") {
// 		alert("점포주소를 입력해 주세요");
// 		form.store_addr1.focus();
// 		return;
// 	}

// 	if (form.store_addr2.value =="") {
// 		alert("점포상세주소를 입력해 주세요");
// 		form.store_addr2.focus();
// 		return;
// 	}

// 	if (form.region.value =="") {
// 		alert("희망지역을 입력해 주세요");
// 		form.region.focus();
// 		return;
// 	}

// 	if (form.store_size.value =="") {
// 		alert("예상평수를 입력해 주세요");
// 		form.store_size.focus();
// 		return;
// 	}

// 	if (form.content.value =="") {
// 		alert("문의내용을 입력해 주세요");
// 		form.content.focus();
// 		return;
// 	}

// 	form.submit();
// }

// //이메일선택
// function email_Choice() {
// 	var form = document.Regist;
// 	if(form.email_choice.value == "") {
// 		form.email2.value = "";
// 		form.email2.readOnly = false;
// 		form.email2.focus();
// 	} else {
// 		form.email2.value = form.email_choice.value;
// 		form.email2.readOnly = true;
// 	}
// }

// //only_number check
// $(".only_number").keyup(function (event) {
// 	regexp = /[^0-9]/gi;
// 	v = $(this).val();
// 	if (regexp.test(v)) {
// 		alert("숫자만 입력가능 합니다.");
// 		$(this).val(v.replace(regexp, ''));
// 	}
// });

/*변수 선언*/


var id = document.querySelector('#id');

var pw1 = document.querySelector('#pswd1');
var pwMsg = document.querySelector('#alertTxt');
var pwImg1 = document.querySelector('#pswd1_img1');

var pw2 = document.querySelector('#pswd2');
var pwImg2 = document.querySelector('#pswd2_img1');
var pwMsgArea = document.querySelector('.int_pass');

var userName = document.querySelector('#name');

var yy = document.querySelector('#yy');
var mm = document.querySelector('#mm');
var dd = document.querySelector('#dd');

var gender = document.querySelector('#gender');

var email = document.querySelector('#email');

var mobile = document.querySelector('#mobile');

var error = document.querySelectorAll('.error_next_box');



/*이벤트 핸들러 연결*/


id.addEventListener("focusout", checkId);
pw1.addEventListener("focusout", checkPw);
pw2.addEventListener("focusout", comparePw);
userName.addEventListener("focusout", checkName);
yy.addEventListener("focusout", isBirthCompleted);
mm.addEventListener("focusout", isBirthCompleted);
dd.addEventListener("focusout", isBirthCompleted);
gender.addEventListener("focusout", function() {
    if(gender.value === "성별") {
        error[5].style.display = "block";
    } else {
        error[5].style.display = "none";
    }
})
email.addEventListener("focusout", isEmailCorrect);
mobile.addEventListener("focusout", checkPhoneNum);





/*콜백 함수*/


function checkId() {
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if(id.value === "") {
        error[0].innerHTML = "이름을 입력해 주세요.";
        error[0].style.display = "block";
    } else if(!idPattern.test(id.value)) {
        error[0].innerHTML = "한글만 사용가능합니다.";
        error[0].style.display = "block";
    } 
}

function checkName() {
    var namePattern = /[a-zA-Z가-힣]/;
    if(userName.value === "") {
        error[3].innerHTML = "필수 정보입니다.";
        error[3].style.display = "block";
    } else if(!namePattern.test(userName.value) || userName.value.indexOf(" ") > -1) {
        error[3].innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        error[3].style.display = "block";
    } else {
        error[3].style.display = "none";
    }
}

function isEmailCorrect() {
    var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

    if(email.value === ""){ 
        error[6].style.display = "none"; 
    } else if(!emailPattern.test(email.value)) {
        error[6].style.display = "block";
    } else {
        error[6].style.display = "none"; 
    }

}

function checkPhoneNum() {
    var isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

    if(mobile.value === "") {
        error[7].innerHTML = "필수 정보입니다.";
        error[7].style.display = "block";
    } else if(!isPhoneNum.test(mobile.value)) {
        error[7].innerHTML = "형식에 맞지 않는 번호입니다.";
        error[7].style.display = "block";
    } else {
        error[7].style.display = "none";
    }

    
}