$(document).ready(function(){
    var speed = 250;
    var interval = 0;
    var frames = [];
    var frameIndex  = 0;

    $("#btnStart").click(function(){
        $('#btnStart').prop('disabled', true);
        $('#btnStop').prop('disabled', false);
        $('#ddAnimation').prop('disabled', true);

        $('#txtDisplay').val('');
        frames = [];

        let txt =ANIMATIONS[$("#ddAnimation").val()];
        frames = txt.split("=====\n");

        runAnimation();
        
    });

    function runAnimation(){
        setSpeed();
        clear();
        interval = setInterval(startAnimation,speed);
    }
    function startAnimation(){
        $('#txtDisplay').val(frames[frameIndex]);
        frameIndex++;
        if(frameIndex >= frames.length) frameIndex = 0;
        
    }
    function setSpeed(){
        if($("#chkSpeed").is(":checked")){
            speed = 50;
        }
        else{
            speed = 250;
        }
    }
    function clear(){
        if(interval){
            clearInterval(interval);
            interval = 0;
        }
    }

    $("#btnStop").click(function(){
        clear();
       $('#btnStart').prop('disabled', false);
       $('#btnStop').prop('disabled', true);
       $('#ddAnimation').prop('disabled', false);
        
    });

    $("#ddSize").change(function(){
        $("#txtDisplay").css('font-size',this.value+'px');
    });

    $('#chkSpeed').change(function() {
        runAnimation();
    });

})