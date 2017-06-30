$(document).ready(function(){

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});

$("#owl-example").owlCarousel({
    singleItem: true,
    pagination: true,
    navigation: true,
    navigationText: false
  });


$("#but1").mouseover(function(){$("#top_text1").css("background-color","#44c0c2")});
$("#but1").mouseout(function(){$("#top_text1").css("background-color","#485460")});
$("#but2").mouseover(function(){$("#top_text2").css("background-color","#44c0c2")});
$("#but2").mouseout(function(){$("#top_text2").css("background-color","#485460")});
$("#but3").mouseover(function(){$("#top_text3").css("background-color","#44c0c2")});
$("#but3").mouseout(function(){$("#top_text3").css("background-color","#485460")});
});

$('.btn_menu').click(function(){
  $('.menu ul').slideToggle();
})

$("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });