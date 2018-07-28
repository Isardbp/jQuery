$(document).ready(function(){
  //hide-show click
  $("#delete").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
  $("#delete_slow").click(function(){
    $("p").hide(1000);
  });
  $("#show_fast").click(function(){
    $("p").show(100);
  });
  //Fading
  //fadeIn fadeOut fadeToggle fadeTo
  $("#fadein").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
  $("#fadeout").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });
  $("#fadetoggle").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
  $("#fadeto").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });
  //Effects and animate
  $("#animation_left").click(function(){
    $("#div_animation").animate({left: '250px'});
  });
  $("#animation_left_big_opacity").click(function(){
    $("#div_animation").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
  });
});
