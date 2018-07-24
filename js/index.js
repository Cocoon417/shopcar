$(function(){

    $('.shop').fullpage({

        sectionsColor:["#f9dd67","#84a2d4","#ef674d","#ffeedd","#cf4759","#85d9ed","#8ac060","#84d9ed"],
        navigation:true,
        afterLoad:function(a,index){

            // 把之前的动画清掉
            $(".section>div img, .section>div div").attr("style", "").stop();

            // 给动画添加类
            $('.section').removeClass('animation').eq(index-1).addClass('animation');

            // 第二屏动画
            if(index == 2){
                $('.section2 .search').animate({ marginLeft:-111 },1000,"easeOutBack",function(){
                    $('.section2 .search').hide();
                    $('.section2 .searching').show().delay(500).animate({ marginLeft:130,bottom:450,width:148 })
                    $('.section2 .sofas').delay(500).animate({ height:218 },1000);
                })
            }

            // 第四屏动画
            if(index == 4){
                $('.section4 .carbox').animate({ marginLeft : 800 },2000,"easeInElastic",function(){
                    $('.section4 .computer').delay(200).fadeIn();
                    $('.section4 .buywords').delay(200).fadeOut();
                    $('.section4 .pricewords').delay(200).fadeIn();
                })
            }

            // 第六屏动画
            if(index == 6){
                $('.section6 .sofabox').animate({ bottom:100 },1000,function(){
                    $('.section6 .street').animate({ left:-1200 },2000,function(){
                        $('.section6 .man').animate({ height:120 },800,function(){
                            $('.section6 .man').animate({ left:300 },800,function(){
                                $('.section6 .door').show();

                                setTimeout(function(){
                                    $('.section6 .girl').show();
                                },300);
                                
                            })
                        })
                    })
                })
            }

            var h = $(window).height();
            // 第八屏动画
            if(index == 8){
                $('.section8').mousemove(function(event){

                    var x = event.pageX;
                    var left = x - 70;

                    var y = event.pageY;
                    var bottom = h - y - 440 > 0? 0:h - y -440;
                    $('.section8 .hand').css({ left:left,bottom:bottom });

                })
            }

        }

    })

})