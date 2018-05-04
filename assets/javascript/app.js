$(document).ready(function () {
    var correctArray = [];
    var incorrectArray = [];
    var amountCorrect = 0;
    var amountIncorrect = 0;
    var time = 60;
    var answerValue;
    var intervalId;
    var displayIncorrect;
    var displayCorrect;


    // Hide questions 
    $(".questions").hide();
    $("#display").hide();
    $(".scores").hide();
    $("#finish").hide();

    // on click start
    // show div questions
    $("#start").on("click", function () {
        $("#start").hide();
        $(".questions").show();
        $("#finish").show();
        $("#display").show();
        // display initial value of timer
        $("#time-left").html(time);
        countDown()
    });

    // onclick of finish 
    // getAnswers()
    // evaluate the answers. 
    // For each index of answers array, add point to correct if index value is true. 
    // If index value is false, then add to incorrect.
    // empty div
    $("#finish").on("click", function () {
        //$(".questions").none();
        // out of time 
        // getAnswers()
        getAnswers();
        stop();

    });

    // User clicks radio buttons, store answers
    $(".radioBtn").click(function (event) {
        //var hold = $(this).val()
        // console.log(hold)
        // if (hold === "true") {
        //     amountCorrect++;
        // }
        // else if (hold === "false") {
        //     amountIncorrect++;

        //getAnswers();

    })

    // push true to an correct array and false to incorrect array
    // lenght of correct and incorrect array will be the score
    function getAnswers() {
        for (i = 1; i < 5; i++) {
            answerValue = $("input[name=q" + i + "]" + ":checked").val();

            if (answerValue === "true") {
                correctArray.push(answerValue);
                console.log(correctArray)
            }
            else if (answerValue === "false") {
                incorrectArray.push(answerValue);
                console.log(incorrectArray)
            }

        }
    }


    function countDown() {
        intervalId = setInterval(function () {
            if (time === 0) {
                $(".questions").hide();
                stop()
            } else {
                time--;
                $("#time-left").html(time)
            }

        }, 1000);
    }

    function stop() {
        clearInterval(intervalId);
        displayScore();
        $("#start").hide();
        $("#finish").hide();
    }

    function displayScore() {
        $("#display").hide();
        $(".questions").hide();
        $(".scores").show();

        amountCorrect = correctArray.length - 1;
        amountIncorrect = incorrectArray.length - 1;
        displayCorrect = $("<div>").text("Correct: " + amountCorrect + " - Good job!")
        displayIncorrect = $("<div>").text("Incorrect: " + amountIncorrect);
        $(".scores").append(displayCorrect, displayIncorrect);
    }

    function replay() {

    }

})

