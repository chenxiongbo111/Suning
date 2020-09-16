// // 网站导航模拟下拉框
// $(".site").hover(function(){
//         // $(".site2").css('display','block')

//         $(".site_none").slideDown();
//         $(".site").addClass('span_border')
//     })
//     $(".site_none").mouseleave(function(){
//         // $(".site2").css('display','none')
//         $(".site_none").slideUp();
//         $(".site").removeClass('span_border');
//     })
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


// 侧边栏插入动态数据
var str = ``
var json = {
    classify: {
        '1001': ['母婴', '玩具', '车床', '童装'],
        '1002': ['运动', '户外', '足球', '骑行'],
        '1003': ['女装', '男装', '内衣', '鞋靴'],
        '1004': ['箱包', '钟表', '珠宝', '艺术'],
        '1005': ['汽车', '电摩', '汽车用品'],
        '1006': ['图书', '艺术', '原版', '文学'],
        '1007': ['医学健康', '计生情趣'],
        '1008': ['理财', '分期', '保险', '便民'],
    },
    text: {
        '1001': {
            '2001': ['车床座椅', '儿童玩具', '奶粉辅食', '童装童鞋', '苏宁国际', '企业采购'],
            '2002': ['奶粉', '宝宝尿裤', '营养辅食', '喂养用品', '孕婴洗护', '童装童鞋', '童车童床', '儿童玩具', '孕妈专区'],
            '2003': '宝宝尿裤',
        }
    },
    subclass: {
        '1001,2001,2002': ['1段奶粉', '2段奶粉', '3段奶粉', '4段奶粉', '孕妈奶粉', '特配奶粉', '有机奶粉', '雅培', '飞鹤', '合生元', '美素佳儿', '美赞臣', '惠氏奶粉', '君乐宝奶粉', '雀巢婴幼儿奶粉', '伊利', '雅培', '飞鹤']
    }
}

var data = [
    {
        name: ['母婴', '玩具', '车床', '童装'],
        list: ['车床座椅', '儿童玩具', '奶粉辅食', '童装童鞋', '苏宁国际', '企业采购'],
        asideList: [{ name: '奶粉', list: [{ color: 'h', name: '1段奶粉' }, { color: 'h', name: '2段奶粉' }, { color: 'r', name: '3段奶粉' }, { color: 'h', name: '4段奶粉' }, { color: 'h', name: '孕妈奶粉' }, { color: 'r', name: '特配奶粉' }, { color: 'r', name: '有机奶粉' }, { color: 'h', name: '雅培' }, { color: 'h', name: '飞鹤' }, { color: 'h', name: '合生元' }, { color: 'r', name: '美素佳儿' }, { color: 'h', name: '美赞臣' }, { color: 'h', name: '惠氏奶粉' }, { color: 'r', name: '君乐宝奶粉' }, { color: 'r', name: '雀巢婴幼儿奶粉' }, { color: 'h', name: '伊利' }, { color: 'h', name: '牛奶粉' }, { color: 'r', name: '羊奶粉' }] }, { name: '宝宝尿裤', list: [{ color: 'h', name: '1段奶粉' }, { color: 'h', name: '2段奶粉' }, { color: 'r', name: '3段奶粉' }, { color: 'h', name: '4段奶粉' }, { color: 'h', name: '孕妈奶粉' }, { color: 'r', name: '特配奶粉' }, { color: 'r', name: '有机奶粉' }, { color: 'h', name: '雅培' }, { color: 'h', name: '飞鹤' }, { color: 'h', name: '合生元' }, { color: 'r', name: '美素佳儿' }, { color: 'h', name: '美赞臣' }, { color: 'h', name: '惠氏奶粉' }, { color: 'r', name: '君乐宝奶粉' }, { color: 'r', name: '雀巢婴幼儿奶粉' }, { color: 'h', name: '伊利' }, { color: 'h', name: '牛奶粉' }, { color: 'r', name: '羊奶粉' }] }, {}],
        imgSmalllist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],
        imgBiglist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],

    }, {
        name: ['母婴', '玩具'],
        list: ['车床座椅', '儿童玩具'],
        asideList: [{ name: '奶粉', list: [{ color: 'h', name: '1段奶粉' }, { color: 'r', name: '3段奶粉' }, {}] }, {}, {}],
        imgSmalllist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],
        imgBiglist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],

    }, {
        name: ['母婴', '玩具'],
        list: ['车床座椅', '儿童玩具'],
        asideList: [{ name: '奶粉', list: [{ color: 'h', name: '1段奶粉' }, { color: 'r', name: '3段奶粉' }, {}] }, {}, {}],
        imgSmalllist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],
        imgBiglist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],

    }, {
        name: ['母婴', '玩具'],
        list: ['车床座椅', '儿童玩具'],
        asideList: [{ name: '奶粉', list: [{ color: 'h', name: '1段奶粉' }, { color: 'r', name: '3段奶粉' }, {}] }, {}, {}],
        imgSmalllist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],
        imgBiglist: ['a.jpg', 'http://baidu.com/c.jpg', '', '', ''],

    },]




// 轮播
layui.use(['carousel', 'form'], function () {
    var carousel = layui.carousel
        , form = layui.form;

    //图片轮播
    carousel.render({
        elem: '#test10'
        , width: '100%'
        , height: '476px'
        , interval: 3000
        , anim: 'fade'
    });
    //事件
    carousel.on('change(test4)', function (res) {
        console.log(res)
    });

    var $ = layui.$, active = {
        set: function (othis) {
            var THIS = 'layui-bg-normal'
                , key = othis.data('key')
                , options = {};

            othis.css('background-color', '#5FB878').siblings().removeAttr('style');
            options[key] = othis.data('value');
            ins3.reload(options);
        }
    };

    //监听开关
    form.on('switch(autoplay)', function () {
        ins3.reload({
            autoplay: this.checked
        });
    });

    $('.demoSet').on('keyup', function () {
        var value = this.value
            , options = {};
        if (!/^\d+$/.test(value)) return;

        options[this.name] = value;
        ins3.reload(options);
    });

    //其它示例
    $('.demoTest .layui-btn').on('click', function () {
        var othis = $(this), type = othis.data('type');
        active[type] ? active[type].call(this, othis) : '';
    });
});


// 秒杀部分开始
// var seckill = [{titleImg:'../img/seckill1.png',}]
// var arr = [
//     {
//         name: '上半场',
//         namUrl: '',
//         list: [{ text: '', Url: '' },
//         { text: '', Url: '' },
//         { text: '', Url: '' }]
//     },
//     {
//         name: '下半场',
//         nameUrlL: '',
//         list: [{ text: '', Url: '' },
//         { text: '', Url: '' }]
//     }]

// var strHtml = ''
// for (var i = 0; i < seckill.length; i++) {
//     // console.log(seckill[i])
//     for (var j = 0; j < seckill[i].length; j++) {
//         console.log(seckill[i][j])
//         console.log(seckill[i][j].textTitle)
//         // console.log(seckill[i][j])
//         strHtml += `<li class="sec_margin">
//         <div>
//             <div class="section_sec_title">
//                 <div style="padding: 15px;">
//                     <img src="${seckill[i][j].titleImg}" alt="">
//                     <i>距离下场</i>
//                     <span>00</span>:<span>00</span>:<span>00</span>
//                     <ul>
//                         <li class="active_red">13:00场</li>
//                         <li class="active_bai">16:00场</li>
//                     </ul>
//                 </div>
//             </div>
//             <div class="section_sec">
//                 <div class="section_sec_margin">
//                     <img src="${seckill[i][j].textImg}" alt="">
//                     <p>格力（GREE）冷风扇KS-10X63D双冰晶降温 10L大水箱 15小时定时预约 负离子调节 遥控版空调扇</p>
//                     <p class="money">
//                         <span class="place"><i>￥</i><em>469.00</em></span>
//                         <span class="replace"><i>￥</i><em>599</em></span>
//                     </p>
//                     <p class="line"><span></span></p>
//                     <p class="prepare">已抢<i>49%</i></p>
//                 </div>
//             </div>
//         </div>
//     </li>`
//     }

// }
// $(".section_sec_all").html(strHtml)


// 天天低价内容插入
var arr = [
    { imgUrl: './img/seckill1-img.jpg', text: '格力（GREE）冷风扇KS-10X63D双冰晶降温 10L大水箱 15小时定时预约 负离子调节 遥控版空调扇', money: '369.00', mobey_delect: '599', plan: '49' },
    { imgUrl: './img/seckill1-img2.jpg', text: '【第二件减2元M】欧贝拉黑麦面包400g（早餐吐司切片轻食零代餐脂肪卡热量零食品宿舍即食）西式糕点 面包', money: '369.00', mobey_delect: '599', plan: '88' },
    { imgUrl: './img/seckill1-img3.jpg', text: '【20件免运费】溢流香 1枚装50克 国产 松花皮蛋无铅工艺皮蛋鸭蛋变蛋盒装', money: '369.00', mobey_delect: '599', plan: '10' },
]
var strHtml = ''
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i].imgUrl)
    strHtml += `<div class="section_sec_margin">
    <img src="${arr[i].imgUrl}">
    <p class="p_text">${arr[i].text}</p>
    <p class="money">
        <span class="place"><i>￥</i><em>${arr[i].money}</em></span>
        <span class="replace"><i>￥</i><em>${arr[i].mobey_delect}</em></span>
    </p>
    <p class="line"><span style="width:${arr[i].plan}px;"></span></p>
    <p class="prepare" >已抢<i>${arr[i].plan}%</i></p>
</div>`
}
$(".section_sec_ti").html(strHtml)


// 秒杀内容插入
var seckill = [
    { imgUrl: './img/miao1.jpg', text: '华为/HUAWEI Mate 30 5G 8GB+128GB 亮黑色 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信5G全网通手机', money: '4499.00', mobey_delect: '599', plan: '1781' },
    { imgUrl: './img/miao2.jpg', text: '奥美园烤馍片500g饼干整箱粗粮馒头片批发 早餐食品烤香干馍片零食', money: '9.90', mobey_delect: '599', plan: '34113' },
    { imgUrl: './img/miao3.jpg', text: 'vivo iQOO Z1x 海蔚蓝 6+128G 120Hz刷新率 5000mAh大电池 高通骁龙765G 33W闪充强续航 PC级液冷散热 全网通版 5G手机', money: '1798.00', mobey_delect: '599', plan: '246' },
]
var strHtml = ''
for (var i = 0; i < seckill.length; i++) {
    // console.log(seckill[i].imgUrl)
    strHtml += `         <div class="section_sec_margin">
    <img src="${seckill[i].imgUrl}" alt="">
    <p class="p_text">${seckill[i].text}</p>
    <p class="money">
        <img src="./img/seck.png" alt="">
        <span class="place"><i>￥</i><em>${seckill[i].money}</em></span>
    </p>
    <span class="prepare">月销${seckill[i].plan}件</span>
</div>`
}
$(".section_sec_mi").html(strHtml)




// 领券中心内容插入
var coupon = [
    { imgUrl: './img/coupon1.jpg', text: '华为/HUAWEI Mate 30 5G 8GB+128GB 亮黑色 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信5G全网通手机', money: '4499.00', mobey_delect: '599', plan: '1781', title: "限小米易购优选旗舰店", money_off: "满100用2" },
    { imgUrl: './img/coupon2.jpg', text: '奥美园烤馍片500g饼干整箱粗粮馒头片批发 早餐食品烤香干馍片零食', money: '9.90', mobey_delect: '599', plan: '34113', title: "限平台超市品类部分商品使用", money_off: "满20用10" },
    { imgUrl: './img/coupon3.jpg', text: 'vivo iQOO Z1x 海蔚蓝 6+128G 120Hz刷新率 5000mAh大电池 高通骁龙765G 33W闪充强续航 PC级液冷散热 全网通版 5G手机', money: '1798.00', mobey_delect: '599', plan: '246', title: "限果农富旗舰店部分商品", money_off: "满28用2" }
]
var strHtml = ''
for (var i = 0; i < coupon.length; i++) {
    // console.log(coupon[i].imgUrl)
    strHtml += `    <div class="section_sec_margin">
    <img src="${coupon[i].imgUrl}" alt="">
    <div class="section_sec3_block">
         <p>${coupon[i].money_off}</p>
         <p>${coupon[i].title}</p>
         <span>立即领取</span>
    </div>
</div>`
}
$(".section_sec2").html(strHtml)

// 推荐榜单内容插入
var arae1 = [
    { imgUrl: './img/area-img1.jpg', title: "家用电饭煲榜", title_off: "卖爆1.4万件" },
    { imgUrl: './img/area-img2.jpg', title: "人气智能电视榜", title_off: "卖爆3.3万件" },
    { imgUrl: './img/area-img3.jpg', title: "甄选营养纯奶榜", title_off: "卖爆16.4万件" }
]
var arae2 = [
    { imgUrl: './img/area-img4.jpg', title: "家用电饭煲榜", title_off: "卖爆1.4万件" },
    { imgUrl: './img/area-img5.jpg', title: "人气智能电视榜", title_off: "卖爆3.3万件" },
    { imgUrl: './img/area-img6.jpg', title: "甄选营养纯奶榜", title_off: "卖爆16.4万件" }
]
var arae3 = [
    { imgUrl: './img/area-img7.jpg', title: "家用电饭煲榜", title_off: "卖爆1.4万件" },
    { imgUrl: './img/area-img8.jpg', title: "人气智能电视榜", title_off: "卖爆3.3万件" },
    { imgUrl: './img/area-img9.jpg', title: "甄选营养纯奶榜", title_off: "卖爆16.4万件" }
]
var strHtml = ''
for (var i = 0; i < arae1.length; i++) {
    strHtml += `
    <div class="area_region">
    <img src="${arae1[i].imgUrl}" alt="">
    <p>${arae1[i].title}</p>
    <p class="area_huo_img">
    <span><img src="./img/huo.png"alt="">
</span>${arae1[i].title_off}</p>
</div>
`
}
$(".area_flex1").html(strHtml)

var strHtml = ''
for (var i = 0; i < arae2.length; i++) {
    strHtml += `
    <div class="area_region">
    <img src="${arae2[i].imgUrl}" alt="">
    <p>${arae2[i].title}</p>
    <p class="area_huo_img">
    <span><img src="./img/huo.png"alt="">
</span>${arae2[i].title_off}</p>
</div>
`
}
$(".area_flex2").html(strHtml)

var strHtml = ''
for (var i = 0; i < arae3.length; i++) {
    strHtml += `
    <div class="area_region">
    <img src="${arae3[i].imgUrl}" alt="">
    <p>${arae3[i].title}</p>
    <p class="area_huo_img">
    <span><img src="./img/huo.png"alt="">
</span>${arae3[i].title_off}</p>
</div>
`
}
$(".area_flex3").html(strHtml)


// // 推荐榜单区域轮播
layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        , width: '100%' //设置容器宽度
        , height: '246px' //设置容器宽度
        , arrow: 'none' //始终不显示箭头
        , anim: 'updown' // 上下轮播
        , indicator: 'none'
        , autoplay: 'false'
        , interval: '3000'
        , speed: 'slow'
        //,anim: 'updown' //切换动画方式
    });
});


// 苏宁直播内容
var live = [
    { imgUrl: './img/live1.jpg', imgNone: './img/qr-code.png', textNone: '手机苏宁扫一扫' },
    { imgUrl: './img/live2.jpg', imgNone: './img/qr-code.png', textNone: '手机苏宁扫一扫' },
    { imgUrl: './img/live3.jpg', imgNone: './img/qr-code.png', textNone: '手机苏宁扫一扫' },]
var liveHtml = '';
for (var i = 0; i < live.length; i++) {
    liveHtml += `
      <div class="live${i} live">
      <img src="${live[i].imgUrl}" alt="">
      <img src="./img/livegif.gif" alt="">
      <div class="code${i} code">
          <img src="./img/qr-code.png" alt="">
          <p>手机苏宁扫一扫</p>
      </div>
  </div>`
}
$(".section_sec4").html(liveHtml)



for (let i = 0; i <= 2; i++) {
    $(".live" + i).hover(
        function () {
            $(".code" + i).css('display', 'block')
        },
        function () {
            $(".code" + i).css('display', 'none')
        }
    )
}

// 苏宁拼购内容插入
var group1 = [
    { imgUrl: './img/group1.jpg', title: "469.00", title_off: "已拼599件" },
    { imgUrl: './img/group2.jpg', title: "4169.00", title_off: "已拼3.3万件" },
    { imgUrl: './img/group3.jpg', title: "4609.00", title_off: "已拼16.4万件" }
]
var group2 = [
    { imgUrl: './img/group4.jpg', title: "4069.00", title_off: "已拼1.4万件" },
    { imgUrl: './img/group5.jpg', title: "4649.00", title_off: "已拼3.3万件" },
    { imgUrl: './img/group6.jpg', title: "469.00", title_off: "已拼16.4万件" }
]
var group3 = [
    { imgUrl: './img/group7.jpg', title: "44169.00", title_off: "已拼1.4万件" },
    { imgUrl: './img/group8.jpg', title: "4169.00", title_off: "已拼3.3万件" },
    { imgUrl: './img/group9.jpg', title: "4069.00", title_off: "已拼16.4万件" }
]
var groupHtml = ''
for (var i = 0; i < group1.length; i++) {
    groupHtml += `
    <div class="area_region area_region${i}">
    <img src="${group1[i].imgUrl}" alt="">
    <p class="place_p">
        <span class="place"><i>￥</i><em>${group1[i].title}</em></span>
         <span class="replace replace2"><i>￥</i><em>${group1[i].title_off}</em></span>
    </p>
    <div class="code1${i} code">
        <img src="./img/qr-code.png" alt="">
        <p>手机苏宁扫一扫</p>
    </div>
</div>
`
}
$(".area_flex10").html(groupHtml)

var strHtml1 = ''
for (var i = 0; i < group2.length; i++) {
    strHtml1 += `
    <div class="area_region area_region${i}">
    <img src="${group2[i].imgUrl}" alt="">
    <p class="place_p">
        <span class="place"><i>￥</i><em>${group2[i].title}</em></span>
         <span class="replace replace2"><i>￥</i><em>${group2[i].title_off}</em></span>
    </p>
    <div class="code1${i} code">
        <img src="./img/qr-code.png" alt="">
        <p>手机苏宁扫一扫</p>
    </div>
</div>
`
}
$(".area_flex11").html(strHtml1)

var strHtml2 = ''
for (var i = 0; i < group3.length; i++) {
    strHtml2 += `
    <div class="area_region area_region${i}">
    <img src="${group3[i].imgUrl}" alt="">
    <p class="place_p">
        <span class="place"><i>￥</i><em>${group3[i].title}</em></span>
         <span class="replace replace2"><i>￥</i><em>${group3[i].title_off}</em></span>
    </p>
    <div class="code1${i} code">
        <img src="./img/qr-code.png" alt="">
        <p>手机苏宁扫一扫</p>
    </div>
</div>
`
}
$(".area_flex12").html(strHtml2)


// // 推荐榜单区域轮播
layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test2'
        , width: '100%' //设置容器宽度
        , height: '210px' //设置容器宽度
        , arrow: 'none' //始终不显示箭头
        , anim: 'updown' // 上下轮播
        , indicator: 'none'
        , autoplay: 'false'
        , interval: '4000'
        , speed: 'slow'
        //,anim: 'updown' //切换动画方式
    });
});

// 苏宁拼购滑过特效
$(".area_region0").hover(
    function () {
        $(".code10").css('display', 'block')
    },
    function () {
        $(".code10").css('display', 'none')
    }
)
$(".area_region1").hover(
    function () {
        $(".code11").css('display', 'block')
    },
    function () {
        $(".code11").css('display', 'none')
    }
)
$(".area_region2").hover(
    function () {
        $(".code12").css('display', 'block')
    },
    function () {
        $(".code12").css('display', 'none')
    }
)

// 频道广场内容插入
var channel = [
    { title: '苏宁汽车', explain: '好车放心购', imgUrl1: './img/channelimg1.jpg', imgUrl2: './img/channelimg2.jpg' },
    { title: '冰箱洗衣机', explain: '正品行货', imgUrl1: './img/channelimg3.jpg', imgUrl2: './img/channelimg4.jpg' },
    { title: '爆款手机', explain: '在意你的每部手机', imgUrl1: './img/channelimg5.jpg', imgUrl2: './img/channelimg6.jpg' },
    { title: '生活家电', explain: '潮流小家电', imgUrl1: './img/channelimg7.jpg', imgUrl2: './img/channelimg8.jpg' },
    { title: '医药馆', explain: '享健康生活', imgUrl1: './img/channelimg9.jpg', imgUrl2: './img/channelimg10.jpg' },
    { title: '箱包馆', explain: '品牌推荐', imgUrl1: './img/channelimg11.jpg', imgUrl2: './img/channelimg12.jpg' }]
var channelHtml = '';
for (var i = 0; i < channel.length; i++) {
    channelHtml += `
    <div class="channel_text">
    <div class="channel_text_title">
        <span>${channel[i].title}</span>
        <span>${channel[i].explain}</span>
    </div>
    <div class="channel_text_img">
        <img src="${channel[i].imgUrl1}" alt="">
        <img src="${channel[i].imgUrl2}" alt="">
    </div>
</div>`
}
$(".channel_flex").html(channelHtml)



// 为你推荐title头部插入

var recommend = [
    { lableImg1: './img/recommend-icon1.png', lableImg2: './img/recommend-icon1-2.png', title: '商用空调', explain: '爱上深呼吸' },
    { lableImg1: './img/recommend-icon2.png', lableImg2: './img/recommend-icon2-2.png', title: '精选冰箱', explain: '锁鲜有体验' },
    { lableImg1: './img/recommend-icon3.png', lableImg2: './img/recommend-icon3-2.png', title: '洗衣必备', explain: '速度有激情' },
    { lableImg1: './img/recommend-icon4.png', lableImg2: './img/recommend-icon4-2.png', title: '吃鸡装备', explain: '游戏杀手锏' },
]

var recommendHtml = ''

for (var i = 0; i < recommend.length; i++) {
    recommendHtml += `
<li class=" recommend_li_hover${i}">
    <p>
        <img class="label label1${i}" src="${recommend[i].lableImg1}" alt="">
        <img class="label label2${i}" src="${recommend[i].lableImg2}" alt=""> ${recommend[i].title}
    </p>
    <p>
        <span>${recommend[i].explain}</span>
    </p>
</li>`
}
var recommendLi = `
<li class="recommend_li_hover">
 <p>精选</p>
<p>
    <span>猜你喜欢</span>
</p>
</li>`

$(".recommend_title_ul").html(recommendHtml)
$(".recommend_title_ul").prepend(recommendLi)
$(".label20").css('display', 'none')
$(".label21").css('display', 'none')
$(".label22").css('display', 'none')
$(".label23").css('display', 'none')
$(".recommend_li_hover").addClass('recommend_hover_color');
console.log()


// 滑过内容插入原来位置


// 为你推荐滑过内容设置
// 精选部分
var recommend_none1 = [
    { urlImg: './img/recommend-block1.jpg', title: '【焕变水光肌】JMsolution肌司研 水光针剂 急救补水 面膜 10片/盒 黒臻版 保湿补水 JM', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block2.png', title: '闲趣韧性饼干（自然清咸原味）900g/盒苏打休闲零食盒装', discounts: '每159用30', discounts2: '满2件打9折', money: '29.90', money_none: '49.90' },
    { urlImg: './img/recommend-block3.jpg', title: '蓝月亮 洗衣液机洗2kg瓶*2+500g*2翻盖瓶+80g*2瓶 箱装 薰衣草香亮白增艳', discounts: '满114元用15元', money: '99.90', money_none: '129.00' },
    { urlImg: './img/recommend-block4.jpg', title: 'Dior迪奥口红999#哑光版 烈艳蓝金魅惑粉漾闪亮女士丰唇唇膏 淡化唇色保湿遮瑕防冻裂 3.5g', discounts: '满2件打7.5折', money: '189.00', money_none: '209.00' },
    { urlImg: './img/recommend-block5.jpg', title: '威露士衣物家居消毒液1L 衣物家居硬表面多用途消毒水杀菌率99.999%', discounts: '满99用10', money: '49.00', money_none: '59.00' },
    { urlImg: './img/recommend-block6.jpg', title: '【国内专柜版】迪奥 （Dior ）烈艳蓝金唇膏(520#)3.5g口红 缎光玫瑰红', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block7.jpg', title: '维达（Vinda） 卷纸 超韧4层78g*30卷无芯卷纸 卫生纸巾（整箱销售）', discounts: '每56元减7.5元', money: '57.90', money_none: '59.00' },
    { urlImg: './img/recommend-block5.jpg', title: '威露士衣物家居消毒液1L 衣物家居硬表面多用途消毒水杀菌率99.999%', discounts: '满99用10', money: '49.00', money_none: '59.00' },
    { urlImg: './img/recommend-block6.jpg', title: '【国内专柜版】迪奥 （Dior ）烈艳蓝金唇膏(520#)3.5g口红 缎光玫瑰红', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block7.jpg', title: '维达（Vinda） 卷纸 超韧4层78g*30卷无芯卷纸 卫生纸巾（整箱销售）', discounts: '每56元减7.5元', money: '57.90', money_none: '59.00' },
    { urlImg: './img/recommend-block1.jpg', title: '【焕变水光肌】JMsolution肌司研 水光针剂 急救补水 面膜 10片/盒 黒臻版 保湿补水 JM', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block2.png', title: '闲趣韧性饼干（自然清咸原味）900g/盒苏打休闲零食盒装', discounts: '每159用30', discounts2: '满2件打9折', money: '29.90', money_none: '49.90' },
    { urlImg: './img/recommend-block3.jpg', title: '蓝月亮 洗衣液机洗2kg瓶*2+500g*2翻盖瓶+80g*2瓶 箱装 薰衣草香亮白增艳', discounts: '满114元用15元', money: '99.90', money_none: '129.00' },
    { urlImg: './img/recommend-block4.jpg', title: 'Dior迪奥口红999#哑光版 烈艳蓝金魅惑粉漾闪亮女士丰唇唇膏 淡化唇色保湿遮瑕防冻裂 3.5g', discounts: '满2件打7.5折', money: '189.00', money_none: '209.00' },
    { urlImg: './img/recommend-block5.jpg', title: '威露士衣物家居消毒液1L 衣物家居硬表面多用途消毒水杀菌率99.999%', discounts: '满99用10', money: '49.00', money_none: '59.00' },
    { urlImg: './img/recommend-block6.jpg', title: '【国内专柜版】迪奥 （Dior ）烈艳蓝金唇膏(520#)3.5g口红 缎光玫瑰红', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block7.jpg', title: '维达（Vinda） 卷纸 超韧4层78g*30卷无芯卷纸 卫生纸巾（整箱销售）', discounts: '每56元减7.5元', money: '57.90', money_none: '59.00' },
    { urlImg: './img/recommend-block5.jpg', title: '威露士衣物家居消毒液1L 衣物家居硬表面多用途消毒水杀菌率99.999%', discounts: '满99用10', money: '49.00', money_none: '59.00' },
    { urlImg: './img/recommend-block6.jpg', title: '【国内专柜版】迪奥 （Dior ）烈艳蓝金唇膏(520#)3.5g口红 缎光玫瑰红', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block7.jpg', title: '维达（Vinda） 卷纸 超韧4层78g*30卷无芯卷纸 卫生纸巾（整箱销售）', discounts: '每56元减7.5元', money: '57.90', money_none: '59.00' },
    { urlImg: './img/recommend-block1.jpg', title: '【焕变水光肌】JMsolution肌司研 水光针剂 急救补水 面膜 10片/盒 黒臻版 保湿补水 JM', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block2.png', title: '闲趣韧性饼干（自然清咸原味）900g/盒苏打休闲零食盒装', discounts: '每159用30', discounts2: '满2件打9折', money: '29.90', money_none: '49.90' },
    { urlImg: './img/recommend-block3.jpg', title: '蓝月亮 洗衣液机洗2kg瓶*2+500g*2翻盖瓶+80g*2瓶 箱装 薰衣草香亮白增艳', discounts: '满114元用15元', money: '99.90', money_none: '129.00' },
    { urlImg: './img/recommend-block4.jpg', title: 'Dior迪奥口红999#哑光版 烈艳蓝金魅惑粉漾闪亮女士丰唇唇膏 淡化唇色保湿遮瑕防冻裂 3.5g', discounts: '满2件打7.5折', money: '189.00', money_none: '209.00' },
    { urlImg: './img/recommend-block5.jpg', title: '威露士衣物家居消毒液1L 衣物家居硬表面多用途消毒水杀菌率99.999%', discounts: '满99用10', money: '49.00', money_none: '59.00' }
];
recommend_noneHtml1 = '';
for (var i = 0; i < recommend_none1.length; i++) {
    recommend_noneHtml1 += `
    <li>
    <img src="${recommend_none1[i].urlImg}" alt="">
    <p class="recommend_title_p">${recommend_none1[i].title}</p>
    <p class="recommend_border_p">
        <span>${recommend_none1[i].discounts}</span>
    </p>
    <p class="money">
        <span class="place place2"><i>￥</i><em>${recommend_none1[i].money}</em></span>
        <span class="replace replace4"><i>￥</i><em>${recommend_none1[i].money_none}</em></span>
    </p>
</li>
    `
}
$(".recommend_block_ul_html1").html(recommend_noneHtml1)

// 商用空调部分
var recommend_none2 = [
    { urlImg: './img/recommend-block2-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block2-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block2-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block2-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block2-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block2-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block2-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block2-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block2-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block2-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block2-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block2-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block2-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block2-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block2-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block2-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block2-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block2-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block2-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' }
];

recommend_noneHtml2 = '';
for (var i = 0; i < recommend_none2.length; i++) {
    recommend_noneHtml2 += `
    <li>
    <img src="${recommend_none2[i].urlImg}" alt="">
    <p class="recommend_title_p"><i class="zyIcon"></i> ${recommend_none2[i].title}</p>
    <p class="recommend_border_p">
        <span>${recommend_none2[i].discounts}</span>
    </p>
    <p class="money">
        <span class="place place2"><i>￥</i><em>${recommend_none2[i].money}</em></span>
        <span class="replace replace4"><i>￥</i><em>${recommend_none2[i].money_none}</em></span>
    </p>
</li>
    `
}
$(".recommend_block_ul_html2").html(recommend_noneHtml2)


// 精选冰箱部分
var recommend_none3 = [
    { urlImg: './img/recommend-block3-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block3-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block3-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block3-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block3-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block3-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block3-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block3-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block3-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block3-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block3-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block3-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block3-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block3-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block3-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block3-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block3-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block3-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block3-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' }
];

recommend_noneHtml3 = '';
for (var i = 0; i < recommend_none3.length; i++) {
    recommend_noneHtml3 += `
    <li>
    <img src="${recommend_none3[i].urlImg}" alt="">
    <p class="recommend_title_p"><i class="zyIcon"></i> ${recommend_none3[i].title}</p>
    <p class="recommend_border_p">
        <span>${recommend_none3[i].discounts}</span>
    </p>
    <p class="money">
        <span class="place place2"><i>￥</i><em>${recommend_none3[i].money}</em></span>
        <span class="replace replace4"><i>￥</i><em>${recommend_none3[i].money_none}</em></span>
    </p>
</li>
    `
}
$(".recommend_block_ul_html3").html(recommend_noneHtml3)

// 洗衣必备部分
var recommend_none4 = [
    { urlImg: './img/recommend-block4-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block4-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block4-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block4-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block4-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block4-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block4-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block4-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block4-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block4-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block4-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block4-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block4-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block4-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block4-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block4-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block4-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block4-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block4-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' }
];

recommend_noneHtml4 = '';
for (var i = 0; i < recommend_none4.length; i++) {
    recommend_noneHtml4 += `
    <li>
    <img src="${recommend_none4[i].urlImg}" alt="">
    <p class="recommend_title_p"><i class="zyIcon"></i> ${recommend_none4[i].title}</p>
    <p class="recommend_border_p">
        <span>${recommend_none4[i].discounts}</span>
    </p>
    <p class="money">
        <span class="place place2"><i>￥</i><em>${recommend_none4[i].money}</em></span>
        <span class="replace replace4"><i>￥</i><em>${recommend_none4[i].money_none}</em></span>
    </p>
</li>
    `
}
$(".recommend_block_ul_html4").html(recommend_noneHtml4)


// 吃鸡装备部分
var recommend_none5 = [
    { urlImg: './img/recommend-block5-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block5-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block5-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block5-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block5-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block5-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block5-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block5-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block5-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block5-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block5-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block5-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block5-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-5.jpg', title: '美的（Midea）自营1.5匹新能效变频智能家用挂机静音冷暖空调1.5P挂壁式智弧升级款KFR-35GW/N8VJC3', discounts: '满99用10', money: '2199.00', money_none: '2768.00' },
    { urlImg: './img/recommend-block5-6.jpg', title: '美的（Midea）空调自营3匹新能效变频 客厅圆柱柜机空调 立式冷暖空调 3P柜机智行二代KFR-72LW/N8MJA3', discounts: '满2件打7.5折', money: '4879.00', money_none: '5999.00' },
    { urlImg: './img/recommend-block5-7.jpg', title: '格力（GREE）大1匹冷暖挂机空调 KFR-26GW/(26592)FNhAa-C3 品悦C三级能效静音家用节能', discounts: '每56元减7.5元', money: '2290.90', money_none: '3708.00' },
    { urlImg: './img/recommend-block5-1.jpg', title: '格力（GREE）1.5匹家用变频冷暖挂机空调 KFR-35GW/(35592)FNhAa-C3 品悦C三级能效静音节能', discounts: '满2件打7.5折', money: '469.00', money_none: '599.00' },
    { urlImg: './img/recommend-block5-2.jpg', title: '美的（Midea）自营3匹新一级能效变频家用客厅圆柱式柜机空调 立式KFR-72LW/BP3DN8Y-YH200(1)', discounts: '赠品', discounts2: '赠品', money: '6099.00', money_none: '6976.90' },
    { urlImg: './img/recommend-block5-3.jpg', title: '格力（GREE）1.5匹变频挂机空调品悦C一级能效冷暖家用 KFR-35GW/(35592)FNhAc-A1(WIFI)', discounts: '限量赠', money: '3239.90', money_none: '5388.00' },
    { urlImg: './img/recommend-block5-4.jpg', title: '美的（Midea）空调自营2匹新能效变频 智能家用立式柜机 冷暖空调 2P圆柱智行二代KFR-51LW/N8MJA3', discounts: '限量赠', money: '3899.90', money_none: '5388.00' }
];

recommend_noneHtml5 = '';
for (var i = 0; i < recommend_none5.length; i++) {
    recommend_noneHtml5 += `
    <li>
    <img src="${recommend_none5[i].urlImg}" alt="">
    <p class="recommend_title_p"><i class="zyIcon"></i> ${recommend_none5[i].title}</p>
    <p class="recommend_border_p">
        <span>${recommend_none5[i].discounts}</span>
    </p>
    <p class="money">
        <span class="place place2"><i>￥</i><em>${recommend_none5[i].money}</em></span>
        <span class="replace replace4"><i>￥</i><em>${recommend_none5[i].money_none}</em></span>
    </p>
</li>
    `
}
$(".recommend_block_ul_html5").html(recommend_noneHtml5)

// 滑过效果

$(".recommend_li_hover").mouseenter(
    function () {
        $(".recommend_li_hover").addClass('recommend_hover_color');
        $(".recommend_li_hover").siblings().removeClass('recommend_hover_color');
        // 滑过内容插入
        $(".recommend_block1").css('display', 'block')
        $(".recommend_block1").siblings().css('display', 'none')
        // 以下取消其他同辈的样式
        // 滑过返回头部
        scrooll()
    }
)

$(".recommend_li_hover0").mouseenter(
    function () {
        $(".label10").css('display', 'none');
        $(".label20").css('display', 'inline-block');
        $(".recommend_li_hover0").addClass('recommend_hover_color');
        // 滑过内容插入
        $(".recommend_block2").css('display', 'block')
        $(".recommend_block2").siblings().css('display', 'none')
        // 以下取消其他同辈的样式
        $(".label21").css('display', 'none')
        $(".label11").css('display', 'inline-block')
        $(".label22").css('display', 'none')
        $(".label12").css('display', 'inline-block')
        $(".label23").css('display', 'none')
        $(".label13").css('display', 'inline-block')
        $(".recommend_li_hover0").siblings().removeClass('recommend_hover_color')
        // 滑过返回头部
        scrooll()
    }
)

$(".recommend_li_hover1").mouseenter(
    function () {
        // 设置自己的样式
        $(".label11").css('display', 'none')
        $(".label21").css('display', 'inline-block')
        $(".recommend_li_hover1").addClass('recommend_hover_color');
        // 以下取消其他同辈的样式
        $(".label20").css('display', 'none')
        $(".label10").css('display', 'inline-block')
        $(".label22").css('display', 'none')
        $(".label12").css('display', 'inline-block')
        $(".label23").css('display', 'none')
        $(".label13").css('display', 'inline-block')
        $(".recommend_li_hover1").siblings().removeClass('recommend_hover_color')
        // 滑过内容插入
        $(".recommend_block3").css('display', 'block')
        $(".recommend_block3").siblings().css('display', 'none')
        // 滑过返回头部
        scrooll()
    }
)

$(".recommend_li_hover2").mouseenter(
    function () {
        // 设置自己的样式
        $(".label12").css('display', 'none')
        $(".label22").css('display', 'inline-block')
        $(".recommend_li_hover2").addClass('recommend_hover_color');
        // 以下取消其他同辈的样式
        $(".label20").css('display', 'none')
        $(".label10").css('display', 'inline-block')
        $(".label21").css('display', 'none')
        $(".label11").css('display', 'inline-block')
        $(".label23").css('display', 'none')
        $(".label13").css('display', 'inline-block')
        $(".recommend_li_hover2").siblings().removeClass('recommend_hover_color')
        // 滑过内容插入
        $(".recommend_block4").css('display', 'block')
        $(".recommend_block4").siblings().css('display', 'none')
        // 滑过返回头部
        scrooll()
    }
)
$(".recommend_li_hover3").mouseenter(
    function () {
        // 设置自己的样式
        $(".label13").css('display', 'none')
        $(".label23").css('display', 'inline-block')
        $(".recommend_li_hover3").addClass('recommend_hover_color');
        // 以下取消其他同辈的样式
        $(".label20").css('display', 'none')
        $(".label10").css('display', 'inline-block')
        $(".label21").css('display', 'none')
        $(".label11").css('display', 'inline-block')
        $(".label22").css('display', 'none')
        $(".label12").css('display', 'inline-block')
        $(".recommend_li_hover3").siblings().removeClass('recommend_hover_color')
        // 滑过内容插入
        $(".recommend_block5").css('display', 'block')
        $(".recommend_block5").siblings().css('display', 'none')
        // 滑过返回头部
        scrooll()
    }
)

// 搜索吸顶菜单设置
$(window).scroll(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop)
    if (scrollTop > 700) {
        $(".search_fixed").css('display', 'block')
    } else {
        $(".search_fixed").css('display', 'none')
    }
    if (scrollTop > 2350) {
        $('.recommend_text_title').addClass('recommend_text_title_fixed')
    } else {
        $('.recommend_text_title').removeClass('recommend_text_title_fixed')
    }
})

$(".sidebar_fixed").hover(function () {
    $(".sidebar").addClass('sidebar-fixed');
},
    function () {
        $(".sidebar").removeClass('sidebar-fixed');
    }
)

function scrooll() {
    var scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = null;
    clearInterval(timer)
    if (scrollTop2 > 2000) {
        timer = setInterval(function () {
            // document.documentElement.scrollTop = 2000
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = (2000 - scrollTop) / 8;
            speed = speed > 2000 ? Math.ceil(speed) : Math.floor(speed);
            document.documentElement.scrollTop = speed + scrollTop;
            if (scrollTop <= 2000) {
                clearInterval(timer)
            }
        }, 20)
    }
}

// 楼层
$(document).ready(function () {
    //首先将#btn隐藏
    $(".floor").hide();
    //当滚动条的位置处于距顶部300像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $(".floor").fadeIn(200);
                console.log($(window).scrollTop())
            }else{
                $(".floor").fadeOut(200);
            }
        });

        //当点击跳转链接后，回到页面顶部位置


        for(let i=0;i<=3;i++){
            $(window).scroll(function(){
                if($(window).scrollTop() >= 600+(300*i)){
                    $(".floor_click"+i).addClass('li-active');
                    $(".floor_click"+i).siblings().removeClass('li-active');
                }
            })
        }
        $(window).scroll(function(){
            if($(window).scrollTop() >= 2100){
                $(".floor_click4").addClass('li-active');
                $(".floor_click4").siblings().removeClass('li-active');
            }
        })
        // 1F
        for(let i=0;i<=3;i++){
            $(".floor_click"+i).click(function () {
                $('body,html').animate({
                    scrollTop: 600+(300*i)
                },
                    500);
                return false;
            });
        }
        $(".floor_click4").click(function () {
            $('body,html').animate({
                scrollTop: 2100
            },
                500);
            return false;
        });
        $(".floor_click5").click(function () {
            $('body,html').animate({
                scrollTop: 0
            },
                500);
            return false;
        });
    });
});





// 购物指南内容插入部分
var guide = [
    { urlImg: './img/guide1.jpg', title: '正品保障', annot: '正品保障、提供发票' },
    { urlImg: './img/guide2.jpg', title: '急速物流', annot: '如约送货、送货入户' },
    { urlImg: './img/guide3.jpg', title: '售后无忧', annot: '30天包退、365天包换' },
    { urlImg: './img/guide4.jpg', title: '帮助中心', annot: '您的购物指南' },
    { urlImg: './img/guide5.png', title: '省心购', annot: '专注好服务' }
]
var guideHtml = '';
for (var i = 0; i < guide.length; i++) {
    guideHtml += `
    <dl>
    <dt><img src="${guide[i].urlImg}"></dt>
    <dd>
        <p><span>${guide[i].title}</span></p>
        <p>${guide[i].annot}</p>
    </dd>
</dl>
    `
}
$(".guide_title_text").html(guideHtml)



// 右固定侧边栏设置

// 登录设置
var login_click = 0;
$(".right_fixed_text_login").click(
    function () {
        if (login_click == 0) {
            login_click = 1;
            $(".right_fixed_text_login_none").stop().animate({
                right: '35px'
            }, 500)
            $(".right_text_login_span").css('display', 'none');
            $(".right_text_login_span_hover").css('display', 'block');
        } else if (login_click == 1) {
            login_click = 0;
            $(".right_fixed_text_login_none").stop().animate({
                right: '-280px'
            }, 500)
            $(".right_text_login_span").css('display', 'block');
            $(".right_text_login_span_hover").css('display', 'none');
        }
    }
)
$(".right_fixed_text_login").hover(
    function () {
        $(".right_text_login_span_remove").removeClass('right_text_login_span');
        $(".right_text_login_span_hover").css('display', 'block');
    },
    function () {
        $(".right_text_login_span_remove").addClass('right_text_login_span');
        $(".right_text_login_span_hover").css('display', 'none');
    }
)

// 购物车点击设置
var shopping = 0;
$(".shopping").click(function () {
    if (shopping == 0) {
        shopping = 1;
        $(".shopping_none").stop().animate({
            right: '35px'
        }, 500)
        $(".right_fixed_img_none").stop().animate({
            right: '315px'
        }, 500)
        $(".shopping").addClass('right_fixed_back')
        $(".tab_icon_2_position").css('display', 'block')
        $(".right_fixed_img2").css('display', 'block')
    } else if (shopping == 1) {
        shopping = 0;
        $(".shopping_none").stop().animate({
            right: '-280px'
        }, 500)

        $(".right_fixed_img_none").stop().animate({
            right: '0'
        }, 500)
        $(".shopping").removeClass('right_fixed_back')
        $(".tab_icon_2_position").css('display', 'none')
        $(".right_fixed_img2").css('display', 'none')
    }
})

// 消息滑过设置
for (let i = 1; i <= 8; i++) {
    $(".news" + i).hover(
        function () {
            $(".tab_icon_news" + i).addClass('tab_icon_news_none' + (i == 1 ? '' : i));
            $(".news_none" + i).show();
            $(".news" + i).addClass('right_fixed_back');
            $(".news_none" + i).addClass('news_none_color');
        },
        function () {
            $(".tab_icon_news" + i).removeClass('tab_icon_news_none' + (i == 1 ? '' : i));
            $(".news_none" + i).hide();
            $(".news" + i).removeClass('right_fixed_back');
            $(".news_none" + i).removeClass('news_none_color');
        }
    )
}

// 返回顶部设置
// news8

$(".news8").click(function () {
    scroollTop()
})
function scroollTop() {
    var scrollTop4 = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = null;
    clearInterval(timer)
    if (scrollTop4 > 0) {
        timer = setInterval(function () {
            // document.documentElement.scrollTop = 2000
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = (0 - scrollTop) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            document.documentElement.scrollTop = speed + scrollTop;
            if (scrollTop <= 0) {
                clearInterval(timer)
            }
        }, 10)
    }
}

// 滑过红包设置

// var packed = `<img src="./img/packed.png" alt="">`
// var open_packed = `<img src="./img/open-packed.png" alt="">`
$(".packed").hover(
    function () {
        $(".packed_none").css('display', 'block')
        $(".none_packed").css('display', 'none')
        $(".open_packed").css('display', 'block')
    },
    function () {
        $(".packed_none").css('display', 'none')
        $(".none_packed").css('display', 'block')
        $(".open_packed").css('display', 'none')
    }
)
