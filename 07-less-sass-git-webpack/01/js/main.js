$(".bar")
	.stop()
	.animate({
		width: $("div.menu>.navbar>ul>li").eq(0).find("a").width(),
		left:
			$("div.menu>.navbar>ul>li").eq(0).position().left +
			(80 - $("div.menu>.navbar>ul>li").eq(0).find("a").width()) / 2,
	});

$("div.menu>.navbar>ul>li").hover(function () {
	// over
	// console.log($(this).position());
	$(".bar")
		.stop()
		.animate({
			width: $(this).find("a").width(),
			left: $(this).position().left + (80 - $(this).find("a").width()) / 2,
		});
});

$(".search-modal .modal-dialog .modal-content").css({
	height: window.screen.availHeight * 0.5,
	top: window.screen.availHeight * 0.2,
});


$('.carousel').carousel({
    interval: 10000
})

$('.banner .indicators li').click(function (e) { 
    e.preventDefault();
    // console.log($(this).attr('data-slide-to'));
    // console.log($(this).data('slide-to'));
    
    $('.carousel').carousel(Number($(this).attr('data-slide-to')))
    $(this).addClass('active').siblings().removeClass('active')
});

$('.home').click(function () {
	$('.nav').removeClass('hidden-xs');
	$('.mask').show();
})
$('.mask').click(function () {
	$('.nav').addClass('hidden-xs');
	$('.mask').hide();
})