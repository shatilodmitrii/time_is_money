$(document).ready(function(){

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