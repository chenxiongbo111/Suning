function hover() {
    // 网站导航模拟下拉框
    $(".site").mouseenter(function () {
        $(".site_none").css('display', 'block')
        $(".site").addClass('span_border')

    })
    $(".site").mouseleave(function () {
        $(".site_none").css('display', 'none')
        $(".site").removeClass('span_border');
    })

    $(".site_none").mouseenter(function () {
        $(".site_none").css('display', 'block')
        $(".site").addClass('span_border')
    })
    $(".site_none").mouseleave(function () {
        $(".site_none").css('display', 'none')
        $(".site").removeClass('span_border');
    })

    // 商家入驻模拟下拉框
    $(".site_odd2").mouseenter(function () {
        $(".none_two").css('display', 'block')
        $(".site_odd2").addClass('span_border')
    })
    $(".site_odd2").mouseleave(function () {
        $(".none_two").css('display', 'none')
        $(".site_odd2").removeClass('span_border');
    })
    $(".none_two").mouseenter(function () {
        $(".none_two").css('display', 'block')
        $(".site_odd2").addClass('span_border')
    })
    $(".none_two").mouseleave(function () {
        $(".none_two").css('display', 'none')
        $(".site_odd2").removeClass('span_border');
    })


    // 客户服务模拟下拉框
    $(".site_odd3").mouseenter(function () {
        $(".none_three").css('display', 'block')
        $(".site_odd3").addClass('span_border')
    })
    $(".site_odd3").mouseleave(function () {
        $(".none_three").css('display', 'none')
        $(".site_odd3").removeClass('span_border');
    })
    $(".none_three").mouseenter(function () {
        $(".none_three").css('display', 'block')
        $(".site_odd3").addClass('span_border')
    })
    $(".none_three").mouseleave(function () {
        $(".none_three").css('display', 'none')
        $(".site_odd3").removeClass('span_border');
    })

    // 我的订单模拟下拉框
    $(".order").mouseenter(function () {
        $(".none_four").css('display', 'block')
        $(".order").addClass('span_border')
    })
    $(".order").mouseleave(function () {
        $(".none_four").css('display', 'none')
        $(".order").removeClass('span_border');
    })
    $(".none_four").mouseenter(function () {
        $(".none_four").css('display', 'block')
        $(".order").addClass('span_border')
    })
    $(".none_four").mouseleave(function () {
        $(".none_four").css('display', 'none')
        $(".order").removeClass('span_border');
    })

    // 我的易购模拟下拉框
    $(".e_gou").mouseenter(function () {
        $(".none_five").css('display', 'block')
        $(".e_gou").addClass('span_border')
    })
    $(".e_gou").mouseleave(function () {
        $(".none_five").css('display', 'none')
        $(".e_gou").removeClass('span_border');
    })
    $(".none_five").mouseenter(function () {
        $(".none_five").css('display', 'block')
        $(".e_gou").addClass('span_border')
    })
    $(".none_five").mouseleave(function () {
        $(".none_five").css('display', 'none')
        $(".e_gou").removeClass('span_border');
    })

    // 购物车模拟下拉框
    $(".cart").mouseenter(function () {
        $(".none_six").css('display', 'block')
        $(".cart").addClass('span_border')
    })
    $(".cart").mouseleave(function () {
        $(".none_six").css('display', 'none')
        $(".cart").removeClass('span_border');
    })
    $(".none_six").mouseenter(function () {
        $(".none_six").css('display', 'block')
        $(".cart").addClass('span_border')
    })
    $(".none_six").mouseleave(function () {
        $(".none_six").css('display', 'none')
        $(".cart").removeClass('span_border');
    })

    // 手机苏宁模拟下拉框
    $(".mobile").mouseenter(function () {
        $(".none_seven").css('display', 'block')
        $(".mobile").addClass('span_border')
    })
    $(".mobile").mouseleave(function () {
        $(".none_seven").css('display', 'none')
        $(".mobile").removeClass('span_border');
    })
    $(".none_seven").mouseenter(function () {
        $(".none_seven").css('display', 'block')
        $(".mobile").addClass('span_border')
    })
    $(".none_seven").mouseleave(function () {
        $(".none_seven").css('display', 'none')
        $(".mobile").removeClass('span_border');
    })

    // 侧边栏滑过出现第一块内容
    $(".sidebar_hover").hover(function () {
        $(".sidebar_none1").css('display', 'block')
    },
        function () {
            $(".sidebar_none1").css('display', 'none')
        }
    )

    // 侧边栏滑过出现第二块内容
    $(".sidebar_hover2").hover(function () {
        $(".sidebar_none2").css('display', 'block')
    },
        function () {
            $(".sidebar_none2").css('display', 'none')
        }
    )

    // 侧边栏滑过出现第三块内容
    $(".sidebar_hover3").hover(function () {
        $(".sidebar_none3").css('display', 'block')
    },
        function () {
            $(".sidebar_none3").css('display', 'none')
        }
    )

    // 侧边栏滑过出现第四块内容
    $(".sidebar_hover4").hover(function () {
        $(".sidebar_none4").css('display', 'block')
    },
        function () {
            $(".sidebar_none4").css('display', 'none')
        }
    )

    // 侧边栏滑过出现第五块内容
    $(".sidebar_hover5").hover(function () {
        $(".sidebar_none5").css('display', 'block')
    },
        function () {
            $(".sidebar_none5").css('display', 'none')
        }
    )
    // 侧边栏滑过出现第六块内容
    $(".sidebar_hover6").hover(function () {
        $(".sidebar_none6").css('display', 'block')
    },
        function () {
            $(".sidebar_none6").css('display', 'none')
        }
    )
    // 侧边栏滑过出现第七块内容
    $(".sidebar_hover7").hover(function () {
        $(".sidebar_none7").css('display', 'block')
    },
        function () {
            $(".sidebar_none7").css('display', 'none')
        }
    )



}
hover()



// 右固定侧边栏设置

// 登录设置
var login_click = 0;
$(".right_fixed_text_login").click(
    function(){
        if(login_click == 0){
            login_click = 1 ;
            $(".right_fixed_text_login_none").stop().animate({
                right:'35px'
            },500)
            $(".right_text_login_span").css('display','none') ;
            $(".right_text_login_span_hover").css('display','block') ;
        }else if(login_click == 1){
            login_click = 0 ;
            $(".right_fixed_text_login_none").stop().animate({
                right:'-280px'
            },500)
            $(".right_text_login_span").css('display','block') ;
            $(".right_text_login_span_hover").css('display','none') ;
        }
    }
)
$(".right_fixed_text_login").hover(
    function(){
        $(".right_text_login_span_remove").removeClass('right_text_login_span');
        $(".right_text_login_span_hover").css('display','block') ;
    },
    function(){
        $(".right_text_login_span_remove").addClass('right_text_login_span');
        $(".right_text_login_span_hover").css('display','none') ;
    }
)

// 购物车点击设置
var shopping = 0;
$(".shopping").click(function(){
    if(shopping == 0){
        shopping = 1;
        $(".shopping_none").stop().animate({
            right:'35px'
        },500)
        $(".right_fixed_img_none").stop().animate({
            right:'315px'
        },500)
        $(".shopping").addClass('right_fixed_back')
        $(".tab_icon_2_position").css('display','block')
        $(".right_fixed_img2").css('display','block')
    }else if(shopping == 1){
        shopping = 0;
        $(".shopping_none").stop().animate({
            right:'-280px'
        },500)
        
        $(".right_fixed_img_none").stop().animate({
            right:'0'
        },500)
        $(".shopping").removeClass('right_fixed_back')
        $(".tab_icon_2_position").css('display','none')
        $(".right_fixed_img2").css('display','none')
    }
})

// 消息滑过设置
for(let i=1;i<=8;i++){
    // console.log(  $(".news"+i))
    $(".news"+i).hover(
        function(){
            $(".tab_icon_news"+i).addClass('tab_icon_news_none'+ (i==1 ? '':i));
            $(".news_none"+i).show();
            $(".news"+i).addClass('right_fixed_back');
            $(".news_none"+i).addClass('news_none_color');
        },
        function(){
            $(".tab_icon_news"+i).removeClass('tab_icon_news_none'+ (i==1 ? '':i));
            $(".news_none"+i).hide();
            $(".news"+i).removeClass('right_fixed_back');
            $(".news_none"+i).removeClass('news_none_color');
        }
    )
}

// 返回顶部设置
// news8

$(".news8").click(function(){
    scroollTop()
})
function scroollTop(){
    var scrollTop4 = document.documentElement.scrollTop || document.body.scrollTop ;
    var timer = null ;
    clearInterval(timer)
    if(scrollTop4 >0){
        timer = setInterval(function(){
            // document.documentElement.scrollTop = 2000
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
            var speed = (0-scrollTop)/8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            document.documentElement.scrollTop=speed+scrollTop;
            if(scrollTop <= 0){
                clearInterval(timer)
            }
        },10)
    }
}
