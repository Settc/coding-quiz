//Declare global variables and attach to HTML elements
var list = document.getElementById("list")
var question = document.getElementById("question")
var answers = document.getElementById("answers")
var answerOne = document.getElementById("answerOne")
var answerTwo = document.getElementById("answerTwo")
var answerThree = document.getElementById("answerThree")
var answerFour = document.getElementById("answerFour")
var correct = document.getElementById("correct")
var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var score = document.getElementById("score")
var gameOver = document.getElementById("gameOver")
var intro = document.getElementById("introduction")
var play = document.getElementById("play")
var scoreList = document.getElementById("scoreList")

var highScores = localStorage.getItem("highScore")
var answeredQuestions = 0

//This array lists all the questions that will be randomly drawn and appended onto the html

var questionList = [

    {
    question: "A data structure that stores true or false statements is called a ____?",
        answerOne: "string",
        answerTwo: "boolean",
        answerThree: "forEach",
        answerFour: "array",
        correctAnswer: "answerTwo",
        used: false,
},
    {
    question: "Inside which HTML element do we put the Javascript?",
        answerOne: "<javascript>",
        answerTwo: "<scripting>",
        answerThree: "<script>",
        answerFour: "<js>",
        correctAnswer: "answerThree",
        used: false,
},
    {
    question: "Which built-in method returns the character at the specified index?",
        answerOne: "characterAt()",
        answerTwo: "getCharAt()",
        answerThree: "charAt()",
        answerFour: "None of the above",
        correctAnswer: "answerThree",
        used: false,
},
    {
    question: "How to write an IF statement in JavaScript?",
        answerOne: "if i = 5 then",
        answerTwo: "if i = 5",
        answerThree: "if i == 5 then",
        answerFour: "if (i === 5)",
        correctAnswer: "answerFour",
        used: false,
},
    {
    question: "What is the 'exactly equals to' operator?",
        answerOne: "=",
        answerTwo: "==",
        answerThree: "!=",
        answerFour: "none of the above",
        correctAnswer: "answerFour",
        used: false,
},      
    {
    question: "What keyword exits a function?",
        answerOne: "return",
        answerTwo: "exit",
        answerThree: "escape",
        answerFour: "none of the above",
        correctAnswer: "answerOne",
        used: false,
},
    {
    question: "JavaScript files have an extension of ___?",
        answerOne: ".java",
        answerTwo: ".js",
        answerThree: ".javascript",
        answerFour: ".xml",
        correctAnswer: "answerTwo",
        used: false,
},
    {
    question: "isNaN() evaluates an argument to determine if given value is...?",
        answerOne: "Not a number",
        answerTwo: "Not a null",
        answerThree: "Not a new object",
        answerFour: "None of the above",
        correctAnswer: "answerOne",
        used: false,
},
    {
    question: "Which of the below is used in JavaScript to insert special characters?",
        answerOne: "&",
        answerTwo: "-",
        answerThree: "\\",
        answerFour: "%",
        correctAnswer: "answerThree",
        used: false,
},
    {
    question: "Code between a set of curly braces is called a ___ of code",
        answerOne: "Section",
        answerTwo: "Division",
        answerThree: "Container",
        answerFour: "Block",
        correctAnswer: "answerFour",
        used: false,
},
]

//These are the timer settings, setting the starting time and then going through an if statement in which the user 
//  to either see the high scores or go back to the main menu

timer.innerHTML = 0
var startingTime = .5
var time = startingTime * 60

function updateTimer() {
    
    
    var setTimer = setInterval(function(){

    seconds = time % 60
    timer.innerHTML = `${seconds}`
    time--

    if (time <= 0) {
        clearInterval(setTimer);
        var timeUp = confirm(`Time's up! Your score was ${score.innerHTML}! Would you like to see High Score?` )
        if (timeUp) {


        }   else {
            time = 30
            score = 0
            setVisible()
                     
            
        }
        return;
    }
}, 1000)
}

//This function toggles the visibility of certain elements for the pre-button-clicked and post-button-clicked stages of the game

function setVisible() {
    intro.classList.toggle("is-visible")
    play.classList.toggle("is-visible")
    answers.classList.toggle("is-visible")
    
        
}

//This function chooses a random question with a common Math.random and then appends into the appropriate elements

function randomQuestion() {
    nextQuestion = questionList[Math.floor(Math.random() * questionList.length)];    
    
    // if (nextQuestion.used === true) {
        
        
    // }   

    question.textContent = nextQuestion.question
    answerOne.textContent = nextQuestion.answerOne
    answerTwo.textContent = nextQuestion.answerTwo
    answerThree.textContent = nextQuestion.answerThree
    answerFour.textContent = nextQuestion.answerFour
    nextQuestion.used = true
}
    

//This listens for a click on the questions and determines whether the choice was correct or not
    list.addEventListener("click", function(event) {
          
        var attrId = event.target.getAttribute("id")
        if (attrId === nextQuestion.correctAnswer) {
            score.textContent++
        } else  {
            alert("Incorrect.")
            time -= 5
            randomQuestion()
            
            
            
        }
        
        question.textContent = ""
        answerOne.textContent = ""
        answerTwo.textContent = ""
        answerThree.textContent = ""
        answerFour.textContent = ""
      

        randomQuestion()
    
})
   
//Here, an event listener is declared and appropriate functions are called in order to start the quiz

startButton.addEventListener("click", function()

{   
  
updateTimer()

setVisible()

randomQuestion()

})