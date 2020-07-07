
$(".dropdown").hover(function(){
    $(".dropdown").css("background-color","#f8f8f8");
    $(".dropdown-menu").css("display","block")
    $(".nav").css("maginRight","-150px")


},function(){
    $(".dropdown").css("background-color","#f8f8f8");
    $(".dropdown-menu").css("display","none")
    $(".nav").css("maginRight","-15px")


});
