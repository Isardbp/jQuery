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
});
