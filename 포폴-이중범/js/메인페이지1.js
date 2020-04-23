$(document).ready(function () {

    // $('html, body').animate({scrollTop: '0'}, 1000);
    
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
        },3000);
        return false;
    });

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

        // 무한스크롤

        var d_height = $(document).height();
        var w_height = $(window).height();
        var count = 1;
        $(window).scroll(function(){
            var s_bot = $(window).scrollTop() + w_height;


            var list = $('ul.banner1');

            if(count <= 9    && $('.footer').offset().top <= s_bot) {

                 $("div.main").append($((list).get(0)).clone());

                d_height = $(document).height();
                count++;
            }

        });

        // 마우스 오버시 글자 보이게
        $.each($("ul.banner1 li"),function(k,v){
            $(v).prepend("<div class='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>");
        });

        
        


        $('.box').eq(0).css({
            left: 0
        })

        var count = 1;
        var timer = 1000;
        // 버튼 초기화
        $('.btn_slide').click(function(){
            // 버튼 비활성화
            // input 용
            // $('.btn_slide').attr('disabled', true); 

            // 전부다 용
            $('.btn_slide').css({'pointer-events': 'none'});
            
            setTimeout(function(){
                // 버튼 활성화
                // input 용
                // $('.btn_slide').attr('disabled', false); 
                
                // // 전부다 용
                $('.btn_slide').css({pointerEvents: 'auto'});
            }, timer)
            
        }); 

       
        var interval;
        auto_slide();
        // 자동으로 슬라이드 시작
        function auto_slide() {
            interval = setInterval(function(){
                $('#btn_R').trigger('click');
            }, 2000);
        }

        // 마우스 올리면 멈추기
        $('.slide_box').hover(
            function(){
                clearInterval(interval);
            }, 
            function(){
                auto_slide();
            }
        );  

        
        


        var item_width = $('.item').outerWidth();
        var item_count = $('.item').length;

        var interval; 
        var timer = 1000;
        

        // $('.banner_box' , 'slider').hover(function(){
        //     clearInterval(interval);
        // }, function(){
        //     auto_slide()
        // });

        // 버튼초기화
        $('.btn_slide').click(function(){
            $('#btn_L').css({pointerEvents: "none"})
            setTimeout(function(){
                $('#btn_R').css({pointerEvents: "auto"})
            }, timer)
        });
        
        // item들 위치 초기화
        for(var i=0;i<item_count;i++) {
            $('.item').eq(i).css({
                left: i * item_width
            })
        }

        // 현재 보고있는거
        var index_no = 0
        $('#btn_R').click(function(){
            // item 들 다 왼쪽으로 item의 가로만큼 이동
            $('.item').animate({
                left: '-='+item_width
            }, timer, 'linear');
            // 특정번째꺼만 왼쪽 끝으로 이동
            $('.item').eq(index_no % item_count).animate({
                left: item_width * (item_count - 1)
            }, 0, 'linear');

            // 인디케이터 색변경
            // $('.indi').eq(index_no % item_count).removeClass('indi_active');
            // $('.indi').eq((index_no+1) % item_count).addClass('indi_active');

             index_no+=1;
        }); 

        $('#btn_L').click(function() {
            index_no-=1;
            // 특정번째꺼만 오른쪽 끝으로 이동
            $('.item').eq(index_no % item_count).animate({
                left: -1 * item_width
            }, 0, 'linear')
            // item 들 다 오른쪽으로 item의 가로만큼 이동
            $('.item').animate({
                left: '+='+item_width
            }, timer, 'linear');
            
        //     // 인디케이터 색변경
        //     $('.indi').eq((index_no+1) % item_count).removeClass('indi_active');
        //     $('.indi').eq(index_no % item_count).addClass('indi_active');
        // });

    });

    var $banner = $(".slider").find("ul");

    var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
    var $bannerHeight = $banner.children().outerHeight(); // 높이
    var $length = $banner.children().length;//이미지의 갯수
    var rollingId;

    //정해진 초마다 함수 실행
    rollingId = setInterval(function() { rollingStart(); }, 1500);//다음 이미지로 롤링 애니메이션 할 시간차
    


    

    function rollingStart() {
        $banner.css("width", $bannerWidth * $length + "px");
        $banner.css("height", $bannerHeight + "px");
        //alert(bannerHeight);
        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({left: - $bannerWidth + "px"}, 5000, function() { //숫자는 롤링 진행되는 시간이다.
            //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
            $(this).find("li:first").remove();
            //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
            $(this).css("left", 0);
            //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
        });
    }
 
        
       


    });




