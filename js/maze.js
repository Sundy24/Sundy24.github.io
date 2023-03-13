$(document).ready(function() {
    var isStarted = false;
    $("#boundary1").mouseover(function() {
        if (isStarted) {
            $(this).addClass("youlose");
        }
    });

    $(".boundary").mouseover(function() {
        if (isStarted) {
            $(this).addClass("youlose");
        }
    });
    $("#maze").mouseleave(function() {
        if (isStarted) {
        $(".boundary").addClass("youlose");
        $("#status").text("You lose!");
        $("#status").css("color", "red");
        }
        
    });

    function gameStart(){
        //if(isStarted)  gameStop();
        isStarted = true;
        $(".boundary").removeClass("youlose");
        $(".boundary").on("mouseover");
        $("#boundary1").on("mouseover");
        $("#maze").on("mouseleave");
    }
    function gameStop(){
        isStarted = false;
        //$(".boundary").off("mouseover");
        //$("#boundary1").off("mouseover");
        //$("#maze").off("mouseleave");
    }

    $("#start").click(function() {   
        gameStart();
        $("#status").text("Playing...");
        $("#status").css("color", "gold");
    });

    $("#end").click(function() {
        if (isStarted && !$(".boundary").hasClass('youlose')) {
            $("#status").text("You win! :]");
            $("#status").css("color", "green");
        } else {
            if (isStarted) {
                $("#status").text("Sorry, you lost. :[");
                $("#status").css("color", "red");
            }
        }
        gameStop();
    });

    
});