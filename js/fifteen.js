(function() {
    "use strict"

    $(document).ready(function() {
        var closeToBlank; //array where position of near blank will save

        //initializing square with background image piece
        $("#puzzlearea div").each(function(i) {
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            // set basic style and background
            $(this).addClass("puzzlepiece");
            $(this).css("left", x + "px");
            $(this).css("top", y + "px");
            $(this).css("backgroundImage", "url('images/background.jpg')");
            $(this).css("backgroundPosition", -x + 'px ' + (-y) + 'px');
        });

        //adding hover color for each puzzle
        $(".puzzlepiece").hover(function() {
                var blank = findBlank();
                setPuzzlesCloseToBlank(blank);
                if (isNearBlank($(this)))
                    $(this).addClass("squareHoverActive");
            },
            function() {
                var blank = findBlank();
                setPuzzlesCloseToBlank(blank);
                if (isNearBlank($(this)))
                    $(this).removeClass("squareHoverActive");
            });

        //clicking on puzzle
        $(".puzzlepiece").click(function() {
            //getting blank square
            var blank = findBlank();
            setPuzzlesCloseToBlank(blank);
            //only swapped if near square is blank
            if (isNearBlank($(this))) {
                //moved clicked puzzle to blank position
                $(this).css("left", blank.left + "px");
                $(this).css("top", blank.top + "px");
            }
        });

        //finding blank square
        function findBlank() {
            //set all default locations for all squares and blank square
            var defaultSquares = [
                { left: 0, top: 0 },
                { left: 100, top: 0 },
                { left: 200, top: 0 },
                { left: 300, top: 0 },
                { left: 0, top: 100 },
                { left: 100, top: 100 },
                { left: 200, top: 100 },
                { left: 300, top: 100 },
                { left: 0, top: 200 },
                { left: 100, top: 200 },
                { left: 200, top: 200 },
                { left: 300, top: 200 },
                { left: 0, top: 300 },
                { left: 100, top: 300 },
                { left: 200, top: 300 },
                { left: 300, top: 300 }
            ];

            //create temp array to filter puzzlepiece 
            var tempArr = defaultSquares.slice();

            //remove puzzlepiece piece by piece
            $('.puzzlepiece').each(function(i, v) {
                var position = { left: $(this).css("left"), top: $(this).css("top") };
                tempArr.splice((tempArr.findIndex(v => (v.left == parseInt($(this).css("left"))) && (v.top == parseInt($(this).css("top"))))), 1);
            });

            //last left one will be empty square
            return tempArr[0];
        }

        function isNearBlank(element) {
            var found = false;
            closeToBlank.forEach(function(val) {
                if (val.left == parseInt(element.css("left")) && val.top == parseInt(element.css("top")))
                    found = true;
            });
            return found;
        }

        function setPuzzlesCloseToBlank(blank) {
            closeToBlank = [];
            let closePositionTemp = [
                { left: blank.left - 100, top: blank.top },
                { left: blank.left + 100, top: blank.top },
                { left: blank.left, top: blank.top - 100 },
                { left: blank.left, top: blank.top + 100 }
            ]

            closePositionTemp.forEach(function(v, i) {
                if (v.left >= 0 && v.left <= 300 && v.top >= 0 && v.top <= 300)
                    closeToBlank.push(v);
            });
        }
        //clicking on shuffle button to shuffle puzzles
        $("#shufflebutton").click(function() {
            for (let i = 0; i < 100; i++) {
                let blank = findBlank();

                setPuzzlesCloseToBlank(blank);

                let randomPosition = closeToBlank[Math.floor(Math.random() * closeToBlank.length)];
                $("#puzzlearea").children().each(function() {
                    if (randomPosition.left == parseInt($(this).css("left")) && randomPosition.top == parseInt($(this).css("top"))) {
                        $(this).css("left", blank.left + "px");
                        $(this).css("top", blank.top + "px");
                    }
                });
            }
        });
    });
})();