// 当手机号输入框获取焦点时触发的事件
  for(let i=1;i<=2;i++){
    //   console.log(i)
    $(document).ready(function(){
        $(".mobile_focus"+i).focus(
            function(){
                $(".tips_none"+i).css('display','block')
            }
        );
        $(".mobile_focus"+i).focusout(
            function(){
                $(".tips_none"+i).css('display','none')
            }
        );
      });
  }