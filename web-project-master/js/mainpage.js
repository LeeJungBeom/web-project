$(document).ready(function(){


    

    var main = $('.img_box').bxSlider({ 
        mode: 'fade', 
        auto: true,	//자동으로 슬라이드 
        controls : false,	//좌우 화살표	
        autoControls: false,	//stop,play 
        pager:false,	//페이징 
        pause: 1000, 
        autoDelay: 0,	
        slideWidth: 475, 
        speed: 1000, 
        stopAutoOnclick:false 
    }); 




    $("#MOVE_TOP_BTN").click(function() {
        $('html, body').animate({
            scrollTop : 0
        },1300);
        return false;
    })

    

    


    $('#sign').click(function(){


        $('.login').css(
            'display',"block"
        ),
        $('.id').focus();
    })

    $('.agree').click(function(){


        var myID = document.getElementsByClassName("id");
        var myPW = document.getElementsByClassName("pw");
        myID=$('.id').val();
        myPW=$('.pw').val();
    
        if((myID) == ""){
            alert("아이디를 입력해주세요")    

        }



         if((myPW) == ""){
            alert("비밀번호를 입력해주세요")
            return false;
        }

        $('.login').css(
            'display','none'
        )
        
        
    })

    $('.cancle').click(function(){
        
        $('.login').css(
            'display','none'
        );
    })


    $('.search_box').click(function(){
        var search = document.getElementsByClassName(".search_bar");
        search=$('.search_bar').val();
        if((search) ==""){
            alert("검색어를 입력해주세요(2자 이상)")
            
        }

        else {
            location.href ='searchpage.html'
        }
    })

    $('.m_s').click(function(){
        var m_search = document.getElementsByClassName('.m_s_bar');
        m_search = $('.m_s_bar').val();
        if((m_search) ==""){
            alert("검색어를 입력해주세요(2자이상)")
        }

        else {
            location.href ='searchpage.html'
        }
    })


    var myRe = new RegExp("d(b+)d", "g");
    var myArray = myRe.test("1234548");
    console.log(myArray)

    
 
    
      
});
    