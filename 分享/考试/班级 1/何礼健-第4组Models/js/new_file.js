var str = 0
var str2 = 0
var winWidth = 0
$('.top_cl').click(function() {
	if (str == 0) {
		winWidth = $(window).width()
		$('.top_hidd').css({
			"display": "block",
		})
		if(winWidth <= 767 ){
			$('.lb_box').css({
				"marginTop":'88px'
			})
		}
		
		str = 1;
	} else {
		$('.top_hidd').css({
			"display": "none",
		})
		if(winWidth <= 767 ){
			$('.lb_box').css({
				"marginTop":'0'
			})
		}
		str = 0;
	}

})

$(window).resize(function() {
	winWidth = $(window).width()
	if (winWidth <= 767 && str2 == 1) {
		$('#top_twoHidd').css({
			"display": "block",
		})
		$('#top_oneHidd').css({
			"display": "none",
		})
		$(".box_top").css({
			"height":"280px"
		})
		$('.box_topR #top_twoHidd li div').css({
			'position': 'relative',
			
		})
	} else if (winWidth > 736) {
		$('#top_twoHidd').css({
			"display": "none",
		})
		$(".box_top").css({
			"height":"auto"
		})
		$('#top_oneHidd').css({
			"display": "flex",
		})
	} else if (winWidth < 767) {
		$('#top_oneHidd').css({
			"display": "none",
		})
		$(".box_top").css({
			"height":"auto"
		})
		$('.box_topR #top_twoHidd li div').css({
			'position': 'relative',
			
		})
	}
})

$('.top_736').click(function() {
	if (str2 == 0 && winWidth <= 767) {
		$('#top_twoHidd').css({
			"display": "block",
		})
		$('.box_topR #top_twoHidd li div').css({
			'position': 'relative',
			
		})
		
		$('#top_oneHidd').css({
			"display": "none",
		})
		
		$(".box_top").css({
			"height":"280px"
		})
		str2 = 1;
	} else if (str2 == 1) {
		$('.box_topR #top_twoHidd li div').css({
			'position': 'relative',
			
		})
		$('#top_twoHidd').css({
			"display": "none",
		})
		str2 = 0;
		$(".box_top").css({
			"height":"auto"
		})
	}

})

$('.lb_ding li').click(function(){
	var att = $(this).attr('data-slide-to')
	for(var i = 0 ;i <$('.lb_ding li').length;i++ ){
		$('.lb_ding li div').eq(i).css({
			"background-color":"#FC427B"
		})
	}
	$('.lb_ding li div').eq(att).css({
		"background-color":"#ffffff"
	})
})


$('top_cl').click(function(){
	if(winWidth <= 736){
		$(".htn_s").css({'margtop':'114px'})
	}
})