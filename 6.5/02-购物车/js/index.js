$(function () {
    //全选框设置，全选的状态控制子项的选中状态
    $('.checkall').change(function () {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop("checked"));
        getsum();
        if($(this).prop('checked')){
            $('.cart-item ').addClass("check-cart-item");
        }
        else {
            $('.cart-item ').removeClass("check-cart-item");
        }

    });
    //拿到子项的选中状态，判断是否全部选中，
    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        }
        else {
            $('.checkall').prop('checked', false);
        }
        getsum();
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item")
        }
        else {
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }
    });
    //


    //当点击减号，完成加号的数学计算，substring（1）切割第一个字符串将后面的支付窜在返回给自己，toFixed（2）保留2位小数
    $('.decrement').click(function () {
        var n = $(this).siblings(".itxt").val();
        var  price = $(this).parents('.p-num').siblings('.p-price').html().substring(1);
        if (n === '1') {
            return;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (price * n).toFixed(2));
        getsum()
    });
    //当点击加号，完成加号的数学计算，substring（1）切割第一个字符串将后面的支付窜在返回给自己，toFixed（2）保留2位小数

         $('.increment').click(function () {
             var n = $(this).siblings(".itxt").val();
             var  price = $(this).parents('.p-num').siblings('.p-price').html().substring(1);
            n++;
            $(this).siblings(".itxt").val(n);
            $(this).parents('.p-num').siblings('.p-sum').html("￥" + (price * n).toFixed(2));
             getsum()
        });
    //当数量输入框发生改变，小计也跟着改变
    $('.itxt').change(function () {
        var  n = $(this).val();
        var  price = $(this).parents('.p-num').siblings('.p-price').html().substring(1);
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (price * n).toFixed(2));
        getsum()
    });

    //计算商品总数和总价的函数
    function getsum() {
        var count=0;
        var sum=0;
        $('.j-checkbox:checked').each(function () {
        count+=parseInt($(this).parent(".p-checkbox").siblings('.p-num').find('.itxt').val());
        sum+=parseFloat($(this).parent(".p-checkbox").siblings('.p-sum').text().substring(1));
        });
        $('.amount-sum em').text(count);
        $('.price-sum em').text("￥"+sum.toFixed(2));
    }

    //删除按钮，只删除自己的父级元素
        $('.p-action a').click(function () {
            $(this).parents('.cart-item').remove();
            getsum();
        });
        //全部删除按钮，把整个商品元素全部删除
        $('.clear-all').click(function () {
            $('.cart-item').remove();
            getsum();
        });
        //选中按钮删除
        $('.remove-batch').click(function () {
            $('.j-checkbox:checked').parents('.cart-item').remove() ;
            getsum();
        });

        //总结算按钮
        $(".btn-area").click(function () {
            // $.each(function (){
            //
            // }
            // );
           var sum=$('.price-sum em').text().substring(1);
            var text = prompt("您需要支付"+sum+"￥");
            if(text=666){
                alert("支付成功！")
            }
            else {
                alert("支付失败，余额不足")
            }
        });
    getsum();

    });