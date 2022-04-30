window.onload = function () {
    var top = document.getElementsByClassName('top')[0];
    top.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    // section height
    var section = document.getElementsByClassName('page');
    setSection(section);

    // 스크롤시 이벤트
    for (var i = 0; i < section.length; i++) {
        (function (i) {
            section[i].addEventListener('wheel', function (e) {
                e.preventDefault();
                var delta = (e.daltY || e.wheelDelta || e.detail) >> 10 || 1;
                if (delta < 0) { //내림
                    var next = this.nextElementSibling.offsetTop;
                    window.scrollTo({
                        top: next,
                        behavior: "smooth"
                    });
                } else { //올림
                    var prev = this.previousElementSibling;
                    window.scrollTo({
                        top: prev,
                        behavior: "smooth"
                    });
                }
            }, { paddive: false });
        })(i);
    }

    // footer
    var family_site = document.getElementsByClassName('family_site')[0];
    var family_site_ul = document.getElementsByClassName('family_site_ul')[0];
    var family_i = document.querySelectorAll('.family_site i');
    var toggle2 = 0;
    family_site.onclick = function () {
        if (!toggle2) {
            family_i[0].style.display = "none";
            family_i[1].style.display = "inline-block";
            family_site_ul.style.display = "block";
            toggle2++;
        } else {
            family_i[0].style.display = "inline-block";
            family_i[1].style.display = "none";
            family_site_ul.style.display = "none";
            toggle2--;
        }
    }

    var SE_nav_a = document.querySelectorAll('.SE_nav>ul>li>a');
    for (var i = 0; i < SE_nav_a.length; i++) {
        (function (i) {
            SE_nav_a[i].onclick = function () {
                window.scrollTo({
                    top: section[i].offsetTop,
                    behavior: "smooth"
                });
            }
        })(i);
    }



    // media menu
    var media_menu = document.getElementsByClassName('media_menu')[0];
    var media_menu_hidden = document.getElementsByClassName('media_menu_hidden')[0];
    var media_close = document.getElementsByClassName('media_close')[0];
    var media_h1 = document.getElementsByClassName('media_h1');
    var media_p = document.getElementsByClassName('media_p');
    var toggle1 = 0;
    media_menu.onclick = function () {
        if (!toggle1) {
            media_menu_hidden.style.top = "0%";
            for(var i = 0; i < media_h1.length; i++) {
                (function(i) {
                    media_h1[i].onclick = function() {
                        for(var j = 0; j < media_p.length; j++) {
                            media_p[j].style.height = "0";
                        }
                        switch(i) {
                            case 0: media_p[0].style.height = "200px";
                                break;
                        }
                        switch(i) {
                            case 1: media_p[1].style.height = "250px";
                                break;
                        }
                        switch(i) {
                            case 2: media_p[2].style.height = "150px";
                                break;
                        }
                        switch(i) {
                            case 3: media_p[3].style.height = "50px";
                                break;
                        }
                    }
                })(i);
            }
            toggle1++;
        }
    }
    media_close.onclick = function () {
        if (toggle1 == 1) {
            media_menu_hidden.style.top = "-100%";
            toggle1--;
        }
    }
    var media_sub1_menu = document.querySelectorAll('.media_p>p');
    for(var i = 0; i < media_sub1_menu.length; i++) {
        (function(i) {
            media_sub1_menu[i].onclick = function() {
                if(!toggle1) {
                    console.log(this);
                    media_menu_hidden.style.top = "0%";
                    toggle1++;
                } else {
                    media_menu_hidden.style.top = "-100%";
                    toggle1--;
                }  
            }
        })(i);
    }

// business
    var swiper = new Swiper(".mySwiper", {
        slidesPerView:3,
        spaceBetween:0,
        slidesOffsetBefore : 1,
        autoplay : true,
        loop : true, // 슬라이드 반복 여부
        navigation: {
          nextEl: ".out_next",
          prevEl: ".out_prev",
    },
        breakpoints: { //반응형 조건 속성
            300: { //640 이상일 경우
            slidesPerView: 2, //레이아웃 2열
            },
            768: {
            slidesPerView: 3,
            },
            1024: {
            slidesPerView: 3,
            },
        }
    });
    var btns = document.querySelectorAll('.buttons button');
    var tabs = document.querySelectorAll('.tabs .tab')

    btns.forEach((e, i )=>{
        e.addEventListener("click", function(){
            for(var j = 0; j < btns.length; j++){
                if(tabs[j].classList.contains('active')){
                    tabs[j].classList.remove('active');
                    btns[j].classList.remove('active')
                }
            }
            tabs[i].classList.add('active');
            btns[i].classList.add('active');
        })
    });
}


// 동작 이벤트
window.onscroll = function () {
    var top = document.getElementsByClassName('top')[0];
    if (window.scrollY > 800) {
        top.style.display = "block";
    } else {
        top.style.display = "none";
    }

    var header_txt = document.querySelectorAll('.HE_gnb>div>div>a');
    var header = document.getElementsByTagName('header')[0];
    var header_logo = document.querySelectorAll('.logo>a>img')[0];
    var media_menu = document.getElementsByClassName('media_menu')[0];
    if (window.scrollY > 0) { //내렸을떄
        media_menu.style.color = "black";
        header.style.backgroundColor = "white";
        header.style.borderBottom = "1px solid #dcdcdc";
        header_logo.src = "img/logo_width_black.png";
        for (var i = 0; header_txt.length > i; i++) {
            header_txt[i].style.color = "black";
        }
        header.onmouseout = function () {
            this.style.backgroundColor = "white";
            header.style.backgroundColor = "white";
            header_logo.src = "img/logo_width_black.png";
            for (var i = 0; header_txt.length > i; i++) {
                header_txt[i].style.color = "black";
            }
        }
    } else { //top : 0일때
        media_menu.style.color = "white";
        header.style.backgroundColor = "transparent";
        header_logo.src = "img/logo_width_white.png";
        header.style.borderBottom = "1px solid rgba(255,255,255,.2)";
        for (var i = 0; header_txt.length > i; i++) {
            header_txt[i].style.color = "white";
        }
        header.onmouseover = function () {
            media_menu.style.color = "black";
            this.style.backgroundColor = "white";
            header_logo.src = "img/logo_width_black.png";
            for (var i = 0; header_txt.length > i; i++) {
                header_txt[i].style.color = "black";
            }
        }
        header.onmouseout = function () {
            media_menu.style.color = "white";
            this.style.backgroundColor = "transparent";
            header_logo.src = "img/logo_width_white.png";
            for (var i = 0; header_txt.length > i; i++) {
                header_txt[i].style.color = "white";
            }
        }
    }

    // section nav
    var section = document.getElementsByClassName('page');
    var SE_nav_a = document.querySelectorAll('.SE_nav>ul>li>a');
    for (var j = 0; j < SE_nav_a.length; j++) {
        SE_nav_a[j].style.borderColor = "transparent";
    }
    if (window.scrollY >= section[0].offsetTop && window.scrollY < section[1].offsetTop) {
        SE_nav_a[0].style.borderColor = "white";
    }
    else if (window.scrollY >= section[1].offsetTop && window.scrollY < section[2].offsetTop) {
        SE_nav_a[1].style.borderColor = "white";
    }
    else if (window.scrollY >= section[2].offsetTop) {
        SE_nav_a[2].style.borderColor = "white";
    }
}

window.onresize = function () {
    var section = document.getElementsByClassName('page');
    setSection(section);
}

// 함수
function setSection(section) {
    for (var i = 0; i < section.length; i++) {
        section[i].style.height = window.innerHeight + "px";
    }
}

