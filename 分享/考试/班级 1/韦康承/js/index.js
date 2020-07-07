$(document).ready(function () {

    $('.v-dropdown').hover(function () {
        $(this).addClass('open');
        $(this).find('.Dpdown').css('backgroundColor','#ffffff')
    },function () { 
        $(this).removeClass('open');
     })
    
    $('.v-dropdown .dropdown-toggle').click(function () {
        // console.log($(this))
        $(this).css('backgroundColor','#ffffff')
    })
    
    // top
    $('.copy img').click(function (){
        $('html,body').animate({
            scrollTop:0
        },2000)
    })

    $('#abouts').click(function () {  
        var H1 = $('.about').offset().top
        $('html,body').animate({
            scrollTop:H1
        },'slow')
    })

    $('#gallery').click(function () {  
        var H2 = $('.show').offset().top
        $('html,body').animate({
            scrollTop:H2
        },'slow')
    })

    $('#contact').click(function () {  
        var H3 = $('.contact').offset().top
        $('html,body').animate({
            scrollTop:H3
        },'slow')
    })
    

    $('.ccc').each(function (index,element) {
        var H4 = $('.contact').offset().top
        $(this).click(function () {  
            $('html,body').animate({
                scrollTop:H4
            },'slow')
        })
    })


    // mask
    $('.mask').css({
        height:$(document).height()
    })

    $('.show img').each(function (index,element) {
        $(this).click(function () {
             var imgSrc = $(this).attr('src')
             var left = ($(window).width() -$('.mask-img').width())/2;
             var top = ($(window).height() - $('.mask-img').height())/2;
             var scrollTop = $(document).scrollTop(); 

             $('.mask-img').css({
                'top' : top + scrollTop + 50,
                'left':left
            })

            $('.mask-img img').attr({
                src:imgSrc
            })

             $('.mask-img').css({
        'top' : top + scrollTop + 50,
        'left':left
    })

            $('.mask').css('display','block')
            $('.mask-img').css('display','block')
        })
    })

  

    $('.mask-img span').click(function () {
        $('.mask-img').hide()
        $('.mask').hide()
    })

    console.log($('.ccc'))
});

