// 本店所有商品模拟下拉框
$(".store_name_hover").hover(
    function(){
        $(".store-name-none").css('display','block');
    },
    function(){
        $(".store-name-none").css('display','none');
    }
)
$(".section-title-dl").hover(
    function(){
        $(".section-title_dd").css('display','block');
    },
    function(){
        $(".title-dl-dd-div").css('display','none');
        $(".section-title_dd").css('display','none');
    }
)
$(".section-title_dd").hover(
    function(){
        $(".title-dl-dd-div").css('display','block')
    },
    function(){
        // $(".title-dl-dd-div").css('display','none')
    }
)

// 食品酒水分类模拟下拉框
for(let i=1;i<=3;i++){
    var click = 0;
    $(".click_select"+i).click(function(){
        if(click == 0){
            $('.background-arrows1').addClass('background-arrows2');
            $(".select-left-ul-li-none"+i).css('display','block');
            click=1;
        }else if(click == 1){
            $('.background-arrows1').removeClass('background-arrows2');
            $(".select-left-ul-li-none"+i).css('display','none');
            click=0;
        }
    
    })
}

// 滑过进入店铺的生效
$(".select-right-ul").hover(
    function(){
        $(".select-right-ul-none").css('display','block')
    },
    function(){
        $(".select-right-ul-none").css('display','none')
    }
)



// 获取商品图
var commodity=[
    {bigImg:'./img/OH57YoN14-m2TkzLGXY85Q.jpg',little1:'./img/OH57YoN14-m2TkzLGXY85Q.jpg',little2:"./img/M9-LT1_1Iom8QH1J8l5QwQ.jpg",little3:"./img/-njjmqedJ0kYCyQ7xNJTVg.jpg",little4:"./img/MZc7CNKMsUWGLz5G8Jo7Qg.jpg",little5:"./img/3BN2pZwI_3-yW--npLVdgg.jpg"}
];
var commodityHtml=''
for(var i=0;i<commodity.length;i++){
    commodityHtml+=`
    <div class="commodity_img_big">
    <img src="${commodity[i].bigImg}" alt="">
</div>
<div class="commodity_img_little">
    <ul class="commodity_img_little_ul">
        <li class="li_active1 li_active">
            <img src="${commodity[i].little1}" alt="">
        </li>
        <li class="li_active2">
            <img src="${commodity[i].little2}" alt="">
        </li>
        <li class="li_active3">
            <img src="${commodity[i].little3}" alt="">
        </li>
        <li class="li_active4">
            <img src="${commodity[i].little4}" alt="">
        </li>
        <li class="li_active5">
            <img src="${commodity[i].little5}" alt="">
        </li>
    </ul>
</div>
<div class="commodity_img_little_span">
    <span>
        <i class="contrast-position contrast contrast1"></i>
        对比
    </span>
    <span>
        <i class="contrast-position contrast contrast2"></i>
        分享
    </span>
    <span>
        <i class="contrast-position contrast contrast3"></i>
        关注
    </span>
</div>
    `
}
// $(".commodity_img").html(commodityHtml)

// 商品滑过更换图片
function active(){
    for(let i=1;i<=5;i++){
        $(".li_active"+i).hover(
            function(){
                $('.li_active'+i).addClass('li_active');
                $(".commodity_img_big_block").html('');
                $(".li_active"+i).children().clone().prependTo(".commodity_img_big_block");
                $('.li_active'+i).siblings().removeClass('li_active');
            },
            function(){
                $('.li_active'+i).siblings().removeClass('li_active');
            }
        )
    }
}
active()

    function scr(){
    $.fn.zoom = function () {
        var img = $(this).find("img");
        var span = $(this).find("span");
        var zoom = $(".zoom");
        //获取略缩图相对于窗口的位置
        console.log(img)
        console.log(span)
var tLeft = $(img).offset().left;
        var tTop = $(img).offset().top;

        $(this).mousemove(function (e) {
            //获取鼠标坐标
var mLeft = e.clientX;
            var mTop = e.clientY;

            //计算鼠标相对于图片区域的位置
var l = mLeft - tLeft;
            var t = mTop - tTop;

            //鼠标移动时移动span
$(span).css({
                "display": "block",
                "left": (l - 100) + "px",
                "top": (t - 100) + "px"
});

            //计算偏移量
var ll = (l / $(img).width()) * 100 + "%";
            var tt = (t / $(img).height()) * 100 + "%";

            //设置大图偏移
$(zoom).css({
                "display": "block",
                "background-position": ll + " " + tt
})
        });

        //解除绑定
$(this).mouseout(function () {
            $(span).css("display", "none");
            $(zoom).css("display", "none");
        })
    }

$(".wrap").zoom();

    }

    for(let i=1;i<=2;i++){
        $(".freight"+i).hover(
            function(){
                $(".freight_none"+i).css('display','block');
            },
            function(){
                $(".freight_none"+i).css('display','none');
            }
        )
    }


// 购物车系列
$(".discounts_dl_ul_solid").hover(
    function(){
        $(this).addClass('discounts_dl_ul_border')
    },
    function(){
        $(this).removeClass('discounts_dl_ul_border')
    }
)
// 购物车点击数量设置
// amount
var value = 1;
$(".minus").click(
    function(){
        if($("#amount").val() == 1){
            value = 2;
        }
        if($("#amount").val() == 99){
            $("#amount").val(99)
        }else{
            $("#amount").val(value++)
        }
    }
)
$(".plus").click(
    function(){
        if($("#amount").val() == 1){
            $("#amount").val(1)
        }else{
            // console.log(value--)
            value--
            $("#amount").val(value-1)
        }
       
    }
)
