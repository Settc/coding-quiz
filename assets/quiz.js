const playBtn = document.getElementById("playBtn")
const scoresBtn = document.getElementById("scoresBtn")
const questionField = document.getElementById("question-field")
const answerOne = document.getElementById("answerOne")
const answerTwo = document.getElementById("answerTwo")
const answerThree = document.getElementById("answerThree")
const answerFour = document.getElementById("answerFour")
const timeField = document.getElementById("time")
const scoreField = document.getElementById("score")
const answers = document.querySelectorAll("li")
const scoreDisplay = document.getElementById("scoreDisplay")
const showScore = document.getElementById("showScore")
const showInitials = document.getElementById("showInitials")
const closeScore = document.getElementById("closeScore")

let pointer
let questionsCount = 0
let score = 0
let timer = 0
let initials = ""



let questionList = [

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


initGame = () => {
    
    timer = 60

    for (const answer of answers) {
        answer.classList.remove("dn")
    }

    questionField.classList.remove("dn")

    postQuestion()

    scoreField.textContent = score
    timeField.textContent = timer

    const setTimer = setInterval(() => {
        timeField.textContent = timer -= 1

        if(timer === 0) {
            clearInterval(setTimer)
            endGame()
        }
    }, 1000);

    
}


endGame = () => {

    alert("Game over")
    
    hideQuestion()  

    localStorage.setItem("score", score)
    localStorage.setItem("initials", prompt("Enter your initials: "))
    initials = localStorage.getItem("initials")


    reload()

}

reload = () => {

    location.reload()

}


playBtn.addEventListener("click", (event) => {
    
    initGame()
    scoreDisplay.classList.add("dn")
    
})


scoresBtn.addEventListener("click", (event) => {
    
    showScore.textContent = localStorage.getItem("initials")
    showInitials.textContent = localStorage.getItem("score")
    scoreDisplay.classList.remove("dn")
    
})

closeScore.addEventListener("click", (event) => {
    scoreDisplay.classList.add("dn")
})


answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
        
        

        const attrID = event.target.getAttribute("id")

        if (attrID == questionList[pointer].correctAnswer) {
            alert("Correct")
            scoreField.textContent = score += 1
        }   else {
            alert("Incorrect")
        }

        questionList[pointer].used = true
        questionsCount += 1

        postQuestion()
    })
})


questionPointer = () => {

    pointer = Math.floor(Math.random() * questionList.length)

}

postQuestion = () => {

    
    if (questionsCount === 10) {
        
        endGame()
        return
    }
    
    questionPointer()
    
    
    if (questionList[pointer].used) {
        postQuestion()
    }
    
    

    questionField.textContent = questionList[pointer].question
    answerOne.textContent = questionList[pointer].answerOne
    answerTwo.textContent = questionList[pointer].answerTwo
    answerThree.textContent = questionList[pointer].answerThree
    answerFour.textContent = questionList[pointer].answerFour

    
}

hideQuestion = () => {
    
    for (const answer of answers) {
        answer.classList.add("dn")
    }

    questionField.classList.add("dn")
    
}
    

