$(document).ready(function(){
    
    slide_num = 0
    setInterval(function(){
        


    },1000)
    toggle = 0
    $('#header1_box ul li>img').click(function(){
        if(toggle==0){
            toggle=1
            $('#header1_box ul li>img').attr({'src':'icons/btn_popup_close.png'})
            $('#header_up_slide').slideDown()

        }
        else if(toggle==1){
            $('#header1_box ul li>img').attr({'src':'icons/ico_user_info_line.png'})
            $('#header_up_slide').hide()
            toggle=0
        } 
 })
    $('#search>img').click(function(){ 
        if( toggle ==0){
            toggle =1
            $('#search>img').attr({'src':'icons/x_icon.png'})
            $('#search_box').slideDown()
           
        }
        else if( toggle==1){
            toggle=0
            $('#search>img').attr({'src':'icons/ico_search.png'})
            $('#search_box').slideUp()


        }
        })
       
   
   
    // 서브메뉴
    $('#menu>li').mouseenter(function(){
        $(this).children('div').stop().fadeIn(200)
    })
    $('#menu>li').mouseleave(function(){
        $(this).children('div').stop().fadeOut()
    })
    
    // 헤더 콩모양 버튼 슬라이드업
    
    // $('#header1_box>ul>li:nth-child(6)').click(function(){
    //     $('#header1_box>ul>li:nth-child(7)').show();
    //     $('#header1_box>ul>li:nth-child(6)').hide();
    //     $('#header_up_slide').slideDown(200);

    // })
    // $('#header1_box>ul>li:nth-child(7)').click(function(){
    //     $('#header1_box>ul>li:nth-child(6)').show();
    //     $('#header1_box>ul>li:nth-child(7)').hide();
    //     $('#header_up_slide').slideUp(200);

    // })


    //me_pick_slide
    $('#md_pick_bt1>li:nth-child(1)').click(function(){
        $('#md_pick1').animate({left:0 },1000)

    })
    $('#md_pick_bt1>li:nth-child(2)').click(function(){
        $('#md_pick1').animate({left:'-2000px'},1000)
        
    })
    //md_pick_bt
    
    $('#md_pick_bt1>li').click(function(){
        $(this).children('.on').show()
        $(this).children('.off').hide()
        $(this).siblings().children('.on').hide()  
        $(this).siblings().children('.off').show()  
    })  
    //Whats_new_slide
    $('#Whats_new_bt1>li:nth-child(1)').click(function(){
        $('#Whats_new ul').stop().animate({left:0},1000)
    })
    $('#Whats_new_bt1>li:nth-child(2)').click(function(){
        $('#Whats_new ul').stop().animate({left:'-1236px'},1000)
    })
    $('#Whats_new_bt1>li:nth-child(3)').click(function(){
        $('#Whats_new ul').stop().animate({left:'-2450px'},1000)
    })
    $('#Whats_new_bt1>li:nth-child(4)').click(function(){
        $('#Whats_new ul').stop().animate({left:'-3680px'},1000)
    })
    $('#Whats_new_bt1>li:nth-child(5)').click(function(){
        $('#Whats_new ul').stop().animate({left:'-4910px'},1000)
    })

    //Whats_new_bt
    $('#Whats_new_bt1>li').click(function(){
        $(this).children('.on').show()
        $(this).children('.off').hide()
        $(this).siblings().children('.on').hide()
        $(this).siblings().children('.off').show()



    })


    //스크롤 위로 top버튼
    $('#top').click(function(){
        $('body,html').animate({scrollTop:0});
    })



})