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

var question = document.getElementById("question");
var answerOne = document.getElementById("answerOne")
var answerTwo = document.getElementById("answerTwo")
var answerThree = document.getElementById("answerThree")
var answerFour = document.getElementById("answerFour")

var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var score = document.getElementById("score")
var gameOver = document.getElementById("gameOver")

var revealed = document.querySelectorAll(".revealed")
var highScores = 0
timer.innerHTML = 0;

var questionList = [
    {
    question: "A data structure that stores true or false statements is called a ____?",
        answerOne: "string",
        answerTwo: "boolean",
        answerThree: "forEach",
        answerFour: "array",
        correctAnswer: answerTwo,
},
    {
    question: "Inside which HTML element do we put the Javascript?",
        answerOne: "<javascript>",
        answerTwo: "<scripting>",
        answerThree: "<script>",
        answerFour: "<js>",
        correctAnswer: answerThree,
},
    {
    question: "Which built-in method returns the character at the specified index?",
        answerOne: "characterAt()",
        answerTwo: "getCharAt()",
        answerThree: "charAt()",
        answerFour: "None of the above",
        correctAnswer: answerThree,
},
    {
    question: "How to write an IF statement in JavaScript?",
        answerOne: "if i = 5 then",
        answerTwo: "if i = 5",
        answerThree: "if i == 5 then",
        answerFour: "if (i === 5)",
        correctAnswer: answerFour,
},
    {
    question: "What is the 'exactly equals to' operator?",
        answerOne: "=",
        answerTwo: "==",
        answerThree: "!=",
        answerFour: "none of the above",
        correctAnswer: answerFour,
},
    {
    question: "What keyword exits a function?",
        answerOne: "return",
        answerTwo: "exit",
        answerThree: "escape",
        answerFour: "none of the above",
        correctAnswer: answerOne,
},
    {
    question: "JavaScript files have an extension of ___?",
        answerOne: ".java",
        answerTwo: ".js",
        answerThree: ".javascript",
        answerFour: ".xml",
        correctAnswer: answerTwo,
},
    {
    question: "isNaN() evaluates an argument to determine if given value is...?",
        answerOne: "Not a number",
        answerTwo: "Not a null",
        answerThree: "Not a new object",
        answerFour: "None of the above",
        correctAnswer: answerOne,
},
    {
    question: "Which of the below is used in JavaScript to insert special characters?",
        answerOne: "&",
        answerTwo: "-",
        answerThree: "\\",
        answerFour: "%",
        correctAnswer: answerThree,
},
    {
    question: "Code between a set of curly braces is called a ___ of code",
        answerOne: "Section",
        answerTwo: "Division",
        answerThree: "Container",
        answerFour: "Block",
        correctAnswer: answerFour,
},
]


// WHEN I click the start button
startButton.addEventListener("click", function()


// THEN a timer starts 

    
{   
    

    for (var i = 0; i < revealed.length; i++) {
        revealed[i].setAttribute("style", "display:none")
    }

    var setTimer = setInterval(updateTimer, 1000);
    var startingTime = 1
    var time = startingTime * 60;

function updateTimer() {
    
    var seconds = time % 60;
    timer.innerHTML = `${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(setTimer);
        gameOver.innerText = "GAME OVER"
    }
    
    
    
}

question.textContent = questionList[i].question;
    answerOne.textContent = questionList[i].answerOne
    answerTwo.textContent = questionList[i].answerTwo
    answerThree.textContent = questionList[i].answerThree
    answerFour.textContent = questionList[i].answerFour
    
//and I am presented with a question
})


/*
<div class="col">
                <h2>Question goes here</h2>
            </div>
<ol class="question">
                    <li id="answerOne"></li>
                    <li id="answerTwo"></li>
                    <li id="answerThree"></li>
                    <li id="answerFour"></li>
                </ol>
*/




var randomInt = function(value) {
    var questionAmount = Math.floor(Math.random() * value)
    return questionAmount;
}

// for (var i = 0; i < questionList.length; i ++) 

function random(choices)
{
   
    
    
}