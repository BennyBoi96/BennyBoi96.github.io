

function compute_score() {
    // Get all the question elements
    var question_elements = $("ul.question");

    // Initialize the score
    var score = 0;

    // Loop through each question
    question_elements.each(function(index, element){
        
        // Check if the correct answer was selected
        var correct_answer = $(element).find("input[data-correct-answer]").first();
        if(correct_answer.is(":checked")) {
            score += 1;
        }
    });

    // Display the score
    alert("Your score is " + score + " / " + question_elements.length);
}

