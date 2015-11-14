// function movething() {
//     document.getElementById("movable").style.animation = "mynewmove .5s 1";
// }
$(document).ready(function(){
    // $('#fixed').click(function() {
    //     $('#fixed').css({
    //         'position':'fixed',
    //         'top':'10px',
    //         'margin-left':'auto',
    //         'margin-right':'auto',
    //         'left':'0',
    //         'right':'0',
    //         'background':'white',
    //         'z-index':'5'
    //     });
    // });
    var count = 1;
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#p7").hide();
    $("#p8").hide();
    $("#rightarrow").click(function(){
        if(count == 1)
        {
            $("#p1").fadeOut();
            $("#p2").fadeIn();
            count++;
        }
        else if (count == 2)
        {
            $("#p2").fadeOut();
            $("#p3").fadeIn();
            count++;
        }
        else if (count == 3)
        {
            $("#p3").fadeOut();
            $("#p4").fadeIn();
            count++;
        }
        else if (count == 4)
        {
            $("#p4").fadeOut();
            $("#p5").fadeIn();
            count++;
        }
        else if (count == 5)
        {
            $("#p5").fadeOut();
            $("#p6").fadeIn();
            count++;
        }
        else if (count == 6)
        {
            $("#p6").fadeOut();
            $("#p7").fadeIn();
            count++;
        }
        else if (count == 7)
        {
            $("#p7").fadeOut();
            $("#p8").fadeIn();
            count++;
        }
        else if (count == 8)
        {
            $("#p8").fadeOut();
            $("#p1").fadeIn();
            count = 1;
        }
    });
    $("#leftarrow").click(function(){
        if(count == 1)
        {
            $("#p1").fadeOut();
            $("#p8").fadeIn();
            count = 8;
        }
        else if (count == 2)
        {
            $("#p2").fadeOut();
            $("#p1").fadeIn();
            count--;
        }
        else if (count == 3)
        {
            $("#p3").fadeOut();
            $("#p2").fadeIn();
            count--;
        }
        else if (count == 4)
        {
            $("#p4").fadeOut();
            $("#p3").fadeIn();
            count--;
        }
        else if (count == 5)
        {
            $("#p5").fadeOut();
            $("#p4").fadeIn();
            count--;
        }
        else if (count == 6)
        {
            $("#p6").fadeOut();
            $("#p5").fadeIn();
            count--;
        }
        else if (count == 7)
        {
            $("#p7").fadeOut();
            $("#p6").fadeIn();
            count--;
        }
        else if (count == 8)
        {
            $("#p8").fadeOut();
            $("#p7").fadeIn();
            count--;
        }

    });



	$("#div1").hide();
	$("#div2").hide();
    $("#div3").hide();
    $("#div4").hide();
    $("#div5").hide();
    $("#div11").hide();
    $("#div12").hide();
    $("#div13").hide();
    $("#div21").hide();
    $("#parent").hide();
    $("#parent2").hide();
    $("#toTop11").click(function(){
        $("#div11").hide();
    });
    $("#toTop12").click(function(){
        $("#div12").hide();
    });
    $("#toTop13").click(function(){
        $("#div13").hide();
    });
    $("#toTop21").click(function(){
        $("#div21").hide();
    });
    $("#Button1").click(function(){
        $("#parent1").show();
        $("#div1").show();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div11").hide();
        $("#div12").hide();
        $("#div13").hide();
        $("#div14").hide();
        $("#div21").hide();
    });
    $("#Button2").click(function(){
        $("#parent1").show();
        $("#div2").show();
    	$("#div1").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div11").hide();
        $("#div12").hide();
        $("#div13").hide();
        $("#div14").hide();
        $("#div21").hide();
    });
    $("#Button4").click(function(){
        $("#parent1").show();
        $("#div4").show();
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div5").hide();
        $("#div11").hide();
        $("#div12").hide();
        $("#div13").hide();
        $("#div14").hide();
        $("#div21").hide();
    });
    $("#Button5").click(function(){
        $("#parent1").show();
        $("#div5").show();
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div11").hide();
        $("#div12").hide();
        $("#div13").hide();
        $("#div14").hide();
        $("#div21").hide();
    });
    $("#Button11").click(function(){
        $("#parent2").show();
        $("#div11").show();
        $("#div12").hide();
        $("#div13").hide();
        $("#div14").hide();
    });
    $("#Button12").click(function(){
        $("#parent2").show();
        $("#div12").show();
        $("#div11").hide();
        $("#div13").hide();
        $("#div14").hide();
    });
    $("#Button13").click(function(){
        $("#parent2").show();
        $("#div13").show();
        $("#div11").hide();
        $("#div12").hide();
        $("#div14").hide();
    });
    $("#Button14").click(function(){
        $("#parent2").show();
        $("#div14").show();
        $("#div11").hide();
        $("#div12").hide();
        $("#div13").hide();
    });
    $("#Button21").click(function(){
        $("#parent2").show();
        $("#div21").show();
    });
});
