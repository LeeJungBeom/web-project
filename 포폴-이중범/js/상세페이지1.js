$(document).ready(function () {

    var h_o_top = $('.header').offset().top;

    var s_top;
    $(window).scroll(function(){
        s_top = $(window).scrollTop();

        // 스크롤 될때 헤더 고정했다가 풀었다가
        if(s_top > h_o_top) {

            // 스크롤이 되면 메뉴를 안보이게 
            $('li > a').css({
                display :"none"
            })

            // 스크롤이 되면 로고가 왼쪽으로 가면서 지정된 색으로
            $('#logo').css({
                position:'relative',
                left:'-700px',
                color:'black'
            })

            //스크롤 되면 해당 id 요소 안보이게
            $('#insta').css({
                display:'none'
            })
            $('#facebook').css({
                display:'none'
            })

            $('.header').addClass('header_fixed')
        }
        else {
            // 스크롤이 최상단으로 가면 다시 메뉴가 보이게
            $('li > a').css({
                display :"block"
            })

            // 스크롤이 최상단으로 가면 다시 로고가 원래자리로 가면서 원래색으로
            $('#logo').css({
                position:'relative',
                left:'80px',
                color:'rgba(85,35,15)'
            })

            $('#insta').css({
                display:'block'
            })

            $('#facebook').css({
                display:'block'
            })

            $('.header').removeClass('header_fixed')
        };

    })
    
    //탑버튼 푸터에 닿으면 사라지게 
    $(window).scroll(function () {

        if (window.scrollY >= ($(document).height() - $(window).height() - 90)) {
            $(".go_to_top").hide();
        }
        else {
            $(".go_to_top").show();
        }

        
    })


    // 탑버튼 누르면 부드럽게 이동
    $("#MOVE_TOP_BTN").click(function() {
        $('html, body').animate({
            scrollTop : 0
        },1500);
        return false;
    })

    // 자동 슬라이드 배너
    var $banner = $(".banner").find("ul");

    var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
    var $bannerHeight = $banner.children().outerHeight(); // 높이
    var $length = $banner.children().length;//이미지의 갯수
    var rollingId;

    //정해진 초마다 함수 실행
    rollingId = setInterval(function() { rollingStart(); }, 0);//다음 이미지로 롤링 애니메이션 할 시간차
    


    

    function rollingStart() {
        $banner.css("width", $bannerWidth * $length + "px");
        $banner.css("height", $bannerHeight + "px");
        //alert(bannerHeight);
        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({left: - $bannerWidth + "px"}, 3000, function() { //숫자는 롤링 진행되는 시간이다.
            //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
            $(this).find("li:first").remove();
            //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
            $(this).css("left", 0);
            //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
        });
    }
 


})

