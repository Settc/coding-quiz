// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers



// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//Initialize stage:

//Display the high score list
    //If no high scores, say "No high scores recorded!"

//Need a timer starting at 60, that will countdown
//Need a list of questions that will post in a random order

//Game stage:
//Timer starts counting down, decrementing every second
//Post question in game field
//Need choices, (ol?)
    //Probably could use a pre defined structure with a header for the question, ordered list for the choices, and just erase and fill in the blanks for each question
//<h2></h2>

    //<ol>
        //<li></li>
        //<li></li>
        //<li></li>
        //<li></li>
    //</ol>

//Perhaps store questions in objects, then convert to array and iterate over them with a for each loop to append each index into the empty <li> elements
    //var questionOne = {
    // Question: What is my favorite candy?,
    //  ChoiceOne:  Reese's,
    //  ChoiceTwo:  Skittles,
    //  ChoiceThree: Baby Ruth,
    //  ChoiceFour: Three Musketeers,
    //}
    
    //Listen for user clicks on any choice in the list
//When the choice is clicked, it moves onto the next question
    //If choice is correct
        //Game will inform user you were correct, then post next question
    //else user is informed of incorrect choice, and the timer will decrement by 5 seconds
//When the timer runs out, the game will end
    //Check for timer expiration, 

//End game steps

//The game will ask you for your initials
//It will persistently store your initials and score, and rank them
//Need two buttons, one to start over, one to clear high scores

var question = document.querySelector(".question");
var answerOne = document.getElementById("answerOne")
var answerTwo = document.getElementById("answerTwo")
var answerThree = document.getElementById("answerThree")
var answerFour = document.getElementById("answerFour")

var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var score = document.getElementById("score")

var revealed = document.querySelectorAll(".revealed")







var highScores = 0

//Need a start button
startButton.addEventListener("click", startGame() {
    
})

// WHEN I click the start button
function startGame() {
    for (var i = 0; i < revealed.length; i++) {
        revealed[i].hidden = true
    }

// THEN a timer starts and I am presented with a question
}
