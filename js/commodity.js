// 本店所有商品模拟下拉框
$(".store_name_hover").hover(
    function () {
        $(".store-name-none").css('display', 'block');
    },
    function () {
        $(".store-name-none").css('display', 'none');
    }
)
$(".section-title-dl").hover(
    function () {
        $(".section-title_dd").css('display', 'block');
    },
    function () {
        $(".title-dl-dd-div").css('display', 'none');
        $(".section-title_dd").css('display', 'none');
    }
)
$(".section-title_dd").hover(
    function () {
        $(".title-dl-dd-div").css('display', 'block')
    },
    function () {
        // $(".title-dl-dd-div").css('display','none')
    }
)

// 食品酒水分类模拟下拉框
for (let i = 1; i <= 3; i++) {
    var click = 0;
    $(".click_select" + i).click(function () {
        if (click == 0) {
            $('.background-arrows1').addClass('background-arrows2');
            $(".select-left-ul-li-none" + i).css('display', 'block');
            click = 1;
        } else if (click == 1) {
            $('.background-arrows1').removeClass('background-arrows2');
            $(".select-left-ul-li-none" + i).css('display', 'none');
            click = 0;
        }

    })
}

// 滑过进入店铺的生效
$(".select-right-ul").hover(
    function () {
        $(".select-right-ul-none").css('display', 'block')
    },
    function () {
        $(".select-right-ul-none").css('display', 'none')
    }
)



// 获取商品图
var commodity = [
    { bigImg: './img/OH57YoN14-m2TkzLGXY85Q.jpg', little1: './img/OH57YoN14-m2TkzLGXY85Q.jpg', little2: "./img/M9-LT1_1Iom8QH1J8l5QwQ.jpg", little3: "./img/-njjmqedJ0kYCyQ7xNJTVg.jpg", little4: "./img/MZc7CNKMsUWGLz5G8Jo7Qg.jpg", little5: "./img/3BN2pZwI_3-yW--npLVdgg.jpg" }
];
var commodityHtml = ''
for (var i = 0; i < commodity.length; i++) {
    commodityHtml += `
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
function active() {
    for (let i = 1; i <= 5; i++) {
        $(".li_active" + i).hover(
            function () {
                $('.li_active' + i).addClass('li_active');
                $(".commodity_img_big_block").html('');
                $(".li_active" + i).children().clone().prependTo(".commodity_img_big_block");
                $('.li_active' + i).siblings().removeClass('li_active');
            },
            function () {
                $('.li_active' + i).siblings().removeClass('li_active');
            }
        )
    }
}
active()

function scr() {
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

for (let i = 1; i <= 2; i++) {
    $(".freight" + i).hover(
        function () {
            $(".freight_none" + i).css('display', 'block');
        },
        function () {
            $(".freight_none" + i).css('display', 'none');
        }
    )
}


// 购物车系列
$(".discounts_dl_ul_solid").hover(
    function () {
        $(this).addClass('discounts_dl_ul_border')
    },
    function () {
        $(this).removeClass('discounts_dl_ul_border')
    }
)
// 购物车点击数量设置
// amount
var value = 1;
$(".minus").click(
    function () {
        if ($("#amount").val() == 1) {
            value = 2;
        }
        if ($("#amount").val() == 99) {
            $("#amount").val(99)
        } else {
            $("#amount").val(value++)
        }
    }
)
$(".plus").click(
    function () {
        if ($("#amount").val() == 1) {
            $("#amount").val(1)
        } else {
            // console.log(value--)
            value--
            $("#amount").val(value - 1)
        }

    }
)


// 服务滑动出现隐藏效果

for (let i = 1; i <= 4; i++) {
    $(".discounts_promise_span_hover" + i).hover(
        function () {
            $(".discounts_promise_none" + i).css('display', 'block');
        },
        function () {
            $(".discounts_promise_none" + i).css('display', 'none');
        }
    )
}


for (let j = 0; j < 5; j++) {
    var extend = [
        { imgurl: './img2/float1.jpg', title: '正品丹麦皇家酸奶饮品200ml*12盒礼盒装原味酸牛奶', money: '24.80' },
        { imgurl: './img2/float2.jpg', title: '伊利 安慕希希腊风味酸奶原味205g*16盒（礼盒装）常温整箱早餐酸牛奶', money: '79.90' },
        { imgurl: './img2/float3.jpg', title: '伊利 安慕希高端PET酸牛奶原味礼盒装230g*10盒 希腊风味营养学生成人早餐奶酸奶', money: '78.00' },
        { imgurl: './img2/float4.jpg', title: '伊利 安慕希草莓燕麦希腊风味酸奶200g*10盒（礼盒装） 营养牛奶成人学生早餐奶', money: '68.00' },
        { imgurl: './img2/float5.jpg', title: '君乐宝简醇无蔗糖酸奶袋装非脱脂益生菌发酵乳酸牛奶160g*12袋', money: '39.90' },
    ]
    var extendHtml = ''
    for (var i = 0; i < extend.length; i++) {
        extendHtml += `
    <li class="extend_li${i}">
    <a href=""><img src="${extend[i].imgurl}" alt=""></a>
    
    <p> ${extend[i].title} </p>
    <span class="extend_div_price"><i>￥</i>${extend[i].money}</span>
    <label for="" class="extend_label_none extend_label_none${i}">
        <input type="checkbox">
        加入对比
    </label>
</li>
    `
        // $(".extend_ul"+j).html(extendHtml)

    }
    $(".extend_ul" + j).html(extendHtml)

}
$(".extend_ul_html").html(extendHtml)
for (let j = 0; j < 5; j++) {
    // 滑过右侧边商品显示加入对比
    $(".extend_li" + j).hover(
        function () {
            $(".extend_label_none" + j).css('display', 'block')
            console.log(12)
        },
        function () {
            $(".extend_label_none" + j).css('display', 'none')
        }
    )
}

// 商品标题插入
var merchandise = [
    {title:'商品详情'},
    {title:'包装及参数'},
    {title:'评价（169万+）'},
    {title:'问答（200）'},
    {title:'售后保障'},
]
var merchandiseHtml=''
for(let i=0;i<merchandise.length;i++){
    merchandiseHtml+=`
    <li class="merchandise_text_li_hover">
    <span>商品详情</span>
</li>
<li>
    <span>包装及参数</span>
</li>
    `
}

console.log($(".merchandise-text_title_ul").children()[0])

// $(".merchandise-text_title_ul").children().click(
//     function(){
//         $(".merchandise-text_title_ul").children().addClass('merchandise_text_li_hover')
//         // $(".merchandise-text_title_ul").siblings().removeClass('merchandise_text_li_hover')
//     }
// )
for(let i=0;i<5;i++){
    $(".merchandise_text_li_hover"+i).click(
        function(){
            $(".merchandise_text_li_hover"+i).addClass('merchandise_text_li_hover');
            $(".merchandise_text_li_hover"+i).siblings().removeClass('merchandise_text_li_hover');
        }
    )
}
$(".merchandise-text_title_sao").hover(
    function(){
        $('.merchandise-text_title_sao_none').stop().animate({
            height:'150px',
        },500)
        $('.merchandise-text_title_sao_none').css('display','block');
        $('.layui-rotate0').css('display','none');
            $('.layui-rotate1').css('display','inline-block');
    },
    function(){
        $('.merchandise-text_title_sao_none').stop().animate({
            height:'0',
        },300)
        $('.merchandise-text_title_sao_none').css('display','none')
        $('.layui-rotate0').css('display','inline-block');
        $('.layui-rotate1').css('display','none');
    }
)
$(".merchandise_comm").hover(
    function(){
        $('.merchandise_comm_none').stop().animate({
            height:'60px',
        },500)
        $('.merchandise_comm_none').css('display','block');
    },
    function(){
        $('.merchandise_comm_none').stop().animate({
            height:'0',
        },300)
        $('.merchandise_comm_none').css('display','none')
    }
)