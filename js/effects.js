$(document).ready(function(){
  //hide-show click
  $("#delete").click(function(){
    $("#p_hide_show").hide();
  });
  $("#show").click(function(){
    $("#p_hide_show").show();
  });
  $("#delete_slow").click(function(){
    $("#p_hide_show").hide(1000);
  });
  $("#show_fast").click(function(){
    $("#p_hide_show").show(100);
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
  $('#animation_onclick_big').click(function(){
    $('#div_animation').animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
  $('#animation_toggle').click(function(){
    $('#div_animation').animate({
      height: 'toggle'
    });
  });
  $("#animation_continued").click(function(){
    var div = $("#div_animation");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '350px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '150px', opacity: '0.8'}, "slow");
    });
    $("#animation_text_big").click(function(){
        var div = $("#div_animation");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
    //stop()
    $('#flip').click(function(){
      $('#panel').slideDown(5000);
    });
    $('#stop').click(function(){
      $('#panel').stop();
    });
    //callback
    $('#callback').click(function(){
      $('#p_callback').hide("slow", function(){
        alert("The paragraph is now hidden");
      })
    })
    //Chaining (change color)
    $("#chaining").click(function(){
       $("#p_chaining").css("color", "red").slideUp(2000).slideDown(2000);
   });
});
