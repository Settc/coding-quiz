// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

//Initialize stage:

//Display the high score list
    //If no high scores, say "No high scores recorded!"

//Need a timer starting at 60, that will countdown
//Need a list of questions that will post in a random order

//Game stage:
//Timer starts counting down, decrementing every second
//Post question in game field
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
var list = document.getElementById("list")
var question = document.getElementById("question")
var answerOne = document.getElementById("answerOne")
var answerTwo = document.getElementById("answerTwo")
var answerThree = document.getElementById("answerThree")
var answerFour = document.getElementById("answerFour")
var correct = document.getElementById("correct")

var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var score = document.getElementById("score")
var gameOver = document.getElementById("gameOver")

var revealed = document.querySelectorAll(".revealed")
var highScores = 0
timer.innerHTML = 0

var nextQuestion = 0

function setData() {

}

var questionList = [

    {
    question: "A data structure that stores true or false statements is called a ____?",
        answerOne: "string",
        answerTwo: "boolean",
        answerThree: "forEach",
        answerFour: "array",
        correctAnswer: "answerTwo",
},
    {
    question: "Inside which HTML element do we put the Javascript?",
        answerOne: "<javascript>",
        answerTwo: "<scripting>",
        answerThree: "<script>",
        answerFour: "<js>",
        correctAnswer: "answerThree",
},
    {
    question: "Which built-in method returns the character at the specified index?",
        answerOne: "characterAt()",
        answerTwo: "getCharAt()",
        answerThree: "charAt()",
        answerFour: "None of the above",
        correctAnswer: "answerThree",
},
    {
    question: "How to write an IF statement in JavaScript?",
        answerOne: "if i = 5 then",
        answerTwo: "if i = 5",
        answerThree: "if i == 5 then",
        answerFour: "if (i === 5)",
        correctAnswer: "answerFour",
},
    {
    question: "What is the 'exactly equals to' operator?",
        answerOne: "=",
        answerTwo: "==",
        answerThree: "!=",
        answerFour: "none of the above",
        correctAnswer: "answerFour",
},
    {
    question: "What keyword exits a function?",
        answerOne: "return",
        answerTwo: "exit",
        answerThree: "escape",
        answerFour: "none of the above",
        correctAnswer: "answerOne",
},
    {
    question: "JavaScript files have an extension of ___?",
        answerOne: ".java",
        answerTwo: ".js",
        answerThree: ".javascript",
        answerFour: ".xml",
        correctAnswer: "answerTwo",
},
    {
    question: "isNaN() evaluates an argument to determine if given value is...?",
        answerOne: "Not a number",
        answerTwo: "Not a null",
        answerThree: "Not a new object",
        answerFour: "None of the above",
        correctAnswer: "answerOne",
},
    {
    question: "Which of the below is used in JavaScript to insert special characters?",
        answerOne: "&",
        answerTwo: "-",
        answerThree: "\\",
        answerFour: "%",
        correctAnswer: "answerThree",
},
    {
    question: "Code between a set of curly braces is called a ___ of code",
        answerOne: "Section",
        answerTwo: "Division",
        answerThree: "Container",
        answerFour: "Block",
        correctAnswer: "answerFour",
},
]

function randomQuestion() {
    nextQuestion = questionList[Math.floor(Math.random() * questionList.length)];    
    
    question.textContent = nextQuestion.question
    answerOne.textContent = nextQuestion.answerOne
    answerTwo.textContent = nextQuestion.answerTwo
    answerThree.textContent = nextQuestion.answerThree
    answerFour.textContent = nextQuestion.answerFour
    
}

    list.addEventListener("click", function(event) {
          
        var attrId = event.target.getAttribute("id")
        if (attrId === nextQuestion.correctAnswer) {
            score.textContent++; 
        } else  {
            alert("incorrect")
            randomQuestion();
        }

            // randomQuestion();

            question.textContent = ""
            answerOne.textContent = ""
            answerTwo.textContent = ""
            answerThree.textContent = ""
            answerFour.textContent = ""

            randomQuestion();
        
    })
    




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
        return;
    }
    
    
    
}

//and I am presented with a question



randomQuestion()

})

// WHEN I answer a question


// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score




