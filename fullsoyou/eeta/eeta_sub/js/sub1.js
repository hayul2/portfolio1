window.onload = function() {

    var top = document.getElementsByClassName('top')[0];
    top.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    


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
                            case 1: media_p[1].style.height = "250px";
                                break;
                            case 2: media_p[2].style.height = "150px";
                                break;
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
    var menua = document.querySelectorAll('.sub1>ul>li>span');
    media_submenu(menua);
    var menu_media = document.querySelectorAll('.media_p1>p>a');
    media_submenu(menu_media);

    var media_sub1_menu = document.querySelectorAll('.media_p>p');
    for(var i = 0; i < media_sub1_menu.length; i++) {
        (function(i) {
            media_sub1_menu[i].onclick = function() {
                if(!toggle1) {
                    media_menu_hidden.style.top = "0%";
                    toggle1++;
                } else {
                    media_menu_hidden.style.top = "-100%";
                    toggle1--;
                }                
            }
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
}



function media_submenu(i) {
    var scrollcontect1 = document.getElementsByClassName('AB_CEO_par')[0];
    var scrollcontect2 = document.getElementsByClassName('AB_history')[0];
    var scrollcontect3 = document.getElementsByClassName('SE_location')[0];
    i[0].onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    i[1].onclick = function () {
        window.scrollTo({
            top: scrollcontect1.offsetTop - 200,
            behavior: "smooth"
        });
    }
    i[2].onclick = function () {
        window.scrollTo({
            top: scrollcontect2.offsetTop - 100,
            behavior: "smooth"
        });
    }
    i[3].onclick = function () {
        window.scrollTo({
            top: scrollcontect3.offsetTop - 100,
            behavior: "smooth"
        });
    }
}