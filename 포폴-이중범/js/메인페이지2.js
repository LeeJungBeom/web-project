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
                // opacity:0
                color:'#000',
                fontWeight:'bold'
            })

            $('.hamburg').css({
                // display:'none'
                opacity:0
            })

            $('.header_fixed').css({
                background:'rgba(255,255,255,0.3)'

            })

            $('#logo').css({
                color:'#000'
            })

            $('.header').addClass('header_fixed')
        }
        else {

            $('li > a').css({
                // display :"block"
                // opacity:1
                color:'rgba(255,255,255,0.6)',
                fontWeight:'100', 
                fontSize: '20px'
            })

            $('.hamburg').css({
                // display:'block'
                opacity:1
            })

            $('.header_fixed').css({
                background:'#000'

            })

            $('#logo').css({
                color:'#fff'
            })

            $('.header').removeClass('header_fixed')
        };


    })

    $('.hamburg, .line_first, .line_second, .line_third').click(function () {

        if($('.pan').css('display') == 'none') {
            $('.hamburg >.pan').css({
                display: 'block'
            })  /// 나오게 하자
   
        }
        else 
        {
            
            $('.hamburg >.pan').css({
                display:'none'
            }) // 안나오게 하자 
        }
    })

    // $('.pan').mouseleave(function(){
    //     $('.hamburg >.pan').css({
    //         display:'none'
    //     })
    // })


    var chk = true;
    $('.hamburg').click(function(){
       
        if(chk) {
            chk = false;
             $('#line_first').removeClass('line_first_reverse')
             $('#line_second').removeClass('line_second_reverse')
             $('#line_third').removeClass('line_third_reverse')

            $('#line_first').addClass('line_first')
            $('#line_second').addClass('line_second')
            $('#line_third').addClass('line_third')
        }
       
        else {
            chk = true;
            $('#line_first').removeClass('line_first')
            $('#line_second').removeClass('line_second')
            $('#line_third').removeClass('line_third')

            $('#line_first').addClass('line_first_reverse')
            $('#line_second').addClass('line_second_reverse')
            $('#line_third').addClass('line_third_reverse')}
    
    
        })

        // 해당 메뉴 누르면 섹션으로 부드럽게 이동
        $("#menu1").click(function() {
            $('html, body').animate({
                scrollTop : 1050
            },1500);
            return false;
        })
        //  해당 메뉴 누르면 섹션으로 부드럽게 이동
        $("#menu2").click(function() {
            $('html, body').animate({
                scrollTop : 2100
            },2000);
            return false;
        })

        $("#menu3").click(function() {
            $('html, body').animate({
                scrollTop : 2750
            },2500);
            return false;
        })

        $("#menu4").click(function() {
            $('html, body').animate({
                scrollTop : 3600
            },2500);
            return false;
        })

        


// 익스플로러 체크
var agent = navigator.userAgent.toLowerCase();

$("html, body").on('mousewheel DOMMouseScroll', function() {
    // 익스 체크
    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

        console.log("인터넷 익스플로러 브라우저 입니다.");
        // // 내려갈때
        // if(event.wheelDelta < 0) {
            
        //     setTimeout(function(){
        //         console.log("2: " + $('.wrap').offset().top  * -1);
        //         wrap_offsetTop = ($('.wrap').offset().top * -1) + 100 ;   
        //     }, 170) 
        // }
        // // 올라갈때
        // else if(event.wheelDelta > 0) {
        //     setTimeout(function(){
        //         console.log($('.wrap').offset().top  * -1);
        //         wrap_offsetTop = ($('.wrap').offset().top * -1) - 100 ;    
        //     }, 170)
        // }

        setTimeout(function(){
            console.log("2: " + $('.wrap').offset().top  * -1);
            wrap_offsetTop = ($('.wrap').offset().top * -1)

        
    //탑버튼 푸터에 닿으면 사라지게 
            if(wrap_offsetTop <= 50 || (window.innerHeight - $('.footer').height()  >= $('.footer').offset().top)){
                console.log("사라짐")
                $(".go_to_top").hide(0);
                // $(".go_to_top").css({display: 'none'})
            }
            else {
                console.log("나타남")
                $(".go_to_top").show(0);
            }

       // 스크롤 될때 헤더 고정했다가 풀었다가
       if(wrap_offsetTop > h_o_top) {
        // 스크롤이 되면 메뉴를 안보이게 
        $('li > a').css({
            // display :"none"
            // opacity:0
            color:'#000',
            fontWeight:'bold'
        })

        $('.hamburg').css({
            // display:'none'
            opacity:0
        })

        $('.header_fixed').css({
            background:'rgba(255,255,255,0.3)'

        })

        $('#logo').css({
            color:'#000'
        })

        $('.header').addClass('header_fixed')
    }
    else {

        $('li > a').css({
            // display :"block"
            // opacity:1
            color:'rgba(255,255,255,0.6)',
            fontWeight:'100', 
            fontSize: '20px'
        })

        $('.hamburg').css({
            // display:'block'
            opacity:1
        })

        $('.header_fixed').css({
            background:'#000'

        })

        $('#logo').css({
            color:'#fff'
        })

        $('.header').removeClass('header_fixed')
    };

        }, 170) 
     }


    // 크롬 체크
    else if (agent.indexOf("chrome") != -1) {
    
      console.log("크롬 브라우저입니다.");
    
    }

    // 엣지 체크
 if (/Edge/.test(navigator.userAgent)) {
    console.log('Hello Microsoft User!');

    
    
}
});


    //탑버튼 푸터에 닿으면 사라지게 
    $(window).scroll(function () {
// 익스 체크
        if( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

            console.log("인터넷 익스플로러 브라우저 입니다.2222");
           
        }
        // 크롬 체크
        else if(agent.indexOf("chrome") != -1) {
            console.log("크롬 브라우저입니다.2222");
            if (window.scrollY >= ($(document).height() - $(window).height() - 18)) {
                $(".go_to_top").hide();
            }
            else {
                $(".go_to_top").show();
            }


            // 탑버튼 평상시에는 안보이다 스크롤 한번이라도 들어가면 보이게
            if($(this).scrollTop() > 50 ){
                $('.go_to_top').show
            }
            else{
                $('.go_to_top').hide();
            }
        }
        

       
    
    })


    
    // 탑버튼 누르면 부드럽게 이동
    $("#MOVE_TOP_BTN").click(function() {
        $('html, body').animate({
            scrollTop : 0
        },2200);
        return false;
    })
    // 하단 footer에 버튼 누르면 부드럽게 문서 최상단으로 이동
    $("#back").click(function() {
        $('html, body').animate({
            scrollTop : 0
        },2000);
        return false;
    })

     // 자동 슬라이드 배너
     var $banner = $(".banner").find("ul");

     var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
     var $bannerHeight = $banner.children().outerHeight(); // 높이
     var $length = $banner.children().length;//이미지의 갯수
     var rollingId;
 
     //정해진 초마다 함수 실행
     rollingId = setInterval(function() { rollingStart(); }, 2000);//다음 이미지로 롤링 애니메이션 할 시간차
     
 
 
     
 
     function rollingStart() {
         $banner.css("width", $bannerWidth * $length + "%");
         $banner.css("height", $bannerHeight + "%");

         //배너의 좌측 위치를 옮겨 준다.
         $banner.animate({left: - $bannerWidth + "px"}, 800, function() 
         {
             //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가
             $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
             //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제.
             $(this).find("li:first").remove();
             //다음 움직임을 위해서 배너 좌측의 위치값을 초기화.
             $(this).css("left", 0);
         });
     }


// 익스플로러 체크
var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

//   alert("인터넷 익스플로러 브라우저 입니다.");
}

// 크롬 체크
else if (agent.indexOf("chrome") != -1) {

//   alert("크롬 브라우저입니다.");

}



// else if (/Edge/.test(navigator.userAgent)) {
//     alert('Hello Microsoft User!');
// }


})

