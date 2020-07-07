
// 滚动平滑效果
$('.move-top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});     //页面滚动至顶部

$('.posts-top a').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 

// 锚点跳转
$(function(){
    $("a").click(function () {
      $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top-15 +"px"}, 800);
    return false;
    });
   })
