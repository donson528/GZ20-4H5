
var bool = false;
var bool2 = false;

$('.collapsed').click(function () {

    if(!bool){
        $('.navbar').css({height: '320px'}).find('.down').css({display: 'block'})
        $(this).css({color: '#FC427B'})
        bool = true;
    }else{
        $('.navbar').css({height: '100%'}).find('.down').css({display: 'none'})
        $(this).css({color: '#000'})
        bool = false;
    }
    console.log("xxx",bool)
})

$('.down ul li').each(function (element, index) {
    
    $(this).click(function () {
        console.log(element, index)
        
        $(this).addClass('focus').siblings().removeClass('focus');
    })
})
$('.down ul li.downBtn').click(function () {
    if (!bool2) {
        $('.navbar').css({height: '400px'})
        $('.down ul li.downBtn ul').parent().css({height: '130px'}).end().css({display: 'block'})
        bool2 = true;
    }else{
        $('.navbar').css({height: '320px'})
        $('.down ul li.downBtn ul').parent().css({height: '24px'}).end().css({display: 'none'})
        bool2 = false;
    }
    
})


$('.dropdown').on('mousemove', function () {
    $(this).addClass('open')
})
$('.dropdown').on('mouseout', function () {
    $(this).removeClass('open')
})