$(document).ready(function() {
   // .text() .html() .val() .attr()
   $('#text_but').click(function(){
     alert("Text: " + $("#test").text());
   });
   $('#html_but').click(function(){
     alert("Text: " + $("#test").html());
   });
   $("#input_button").click(function(){
        alert("Value: " + $("#test_input").val());
    });
    $("#attr_button").click(function(){
        alert($("#w3s").attr("href"));
    });
    //Set Content and Attributes
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
    $("#btn4").click(function(){
        $("#test4").text(function(i, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
        });
    });
    $("#btn5").click(function(){
        $("#test5").html(function(i, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
        });
    });
    $("#link_button").click(function(){
      $("#link").attr({
         "href" : "http://www.google.com",
         "title" : "google"
      });
   });
   //Add Elements
   $("#append_text").click(function(){
        $(".p").append(" <b>Appended text</b>.");
    });
    $("#append_list_item").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
    $("#prepend_text").click(function(){
        $(".p").prepend(" <b>Prepend text</b>.");
    });
    $("#prepend_list_item").click(function(){
        $("ol").prepend("<li>Prepend item</li>");
    });
    $("#insert_before").click(function(){
        $("img").before("<b>Before</b>");
    });
    $("#insert_after").click(function(){
        $("img").after("<i>After</i>");
    });
    //Remove Elements
    $("#remove").click(function(){
      $("#div1").remove();
    });
    $("#empty").click(function(){
     $("#div1").empty();
    });
    $("#remove_element_class").click(function(){
      $("p").remove(".test, .demo");
    });
    //Get and Set CSS Classes
    $("#css_classes").click(function(){
      $("#div2").addClass("important blue");
   });
   $("#delete_css_class").click(function(){
      $("#div2").removeClass("important blue");
   });
   $("#toggle_css_class").click(function(){
      $("#div2").toggleClass("important blue");
   });
   // .css()
   $("#button_css").click(function() {
      $("#change_css").css({
         "background-color" : "rgb(43, 228, 184)",
         "font-size" : "200%"
      });
   });
   // Dimensions
   $("#button_dimensions").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div (margin included): " + $("#div1").outerWidth(true) + "</br>";
        txt += "Outer height of div (margin included): " + $("#div1").outerHeight(true);
        $("#div_dimensions").html(txt);
    });
    $("#more_dimm").click(function(){
        $("#divvv").width(500).height(500);
    });
});
