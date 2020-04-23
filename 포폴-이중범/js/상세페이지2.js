$(document).ready(function () {

    var h_o_top = $('.header').offset().top;

    var s_top;
    $(window).scroll(function(){
        s_top = $(window).scrollTop();

        // 스크롤 될때 헤더 고정했다가 풀었다가
        if(s_top > h_o_top) {

            // 스크롤이 되면 메뉴를 안보이게 
            $('li > a').css({
                // display :"none"
                opacity:0
            })

           

            $('.header').addClass('header_fixed')
        }
        else {

            $('li > a').css({
                // display :"block"
                opacity:1
            })


            $('.header').removeClass('header_fixed')
        };
    })


    $(".back_top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        },2100);
        return false;
    })
}) 