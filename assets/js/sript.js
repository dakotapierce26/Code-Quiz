
// Var/Const
var index = 0;
var counter = 0;
var submitScore = document.getElementById("continue");
const answerBtns = document.getElementById('answer-btns');
const endButton = document.getElementById('end-btn')
const quizEndScreen = document.getElementById('save-score')
const countdown = document.getElementById('time')
const timeLeft = document.getElementById('timeLeft')

// Start Quiz Event Listener
document.getElementById("start-btn").addEventListener("click", startTimer, startBtn)


// Timer
function startTimer() {
  timeLeft.classList.remove('hide')
    setInterval(startTimer, 1000);
    var time =20
    function startTimer() {
      time--
      document.getElementById("time").innerText = time
      if (time == 012) {
        countdown.classList.add('text-warning')
      }
      if (time == 05) {
        countdown.classList.remove('text-warning')
        countdown.classList.add('text-danger')
      }
      if (time == 00){
        time++
        endScreen()
      }
    }
}

// Starts Quiz
function startBtn() {
    var startBtn = document.getElementById('start-btn');
    var intro = document.getElementById('intro');
    intro.classList.add('hide');
    startBtn.classList.add('hide');
    answerBtns.classList.remove('hide');
    nextQuestion();
}   

function buttonClicked(number) { 
    if (codeQuiz[index].correct === number) {
        counter++;
    }
    nextQuestion()
}

// Next Question
function nextQuestion() {
    if (index < codeQuiz.length) {
        document.getElementById("questionPrompt").innerHTML = codeQuiz[index].question;
        document.getElementById("answer1").innerHTML = codeQuiz[index].answer1;
        document.getElementById("answer2").innerHTML = codeQuiz[index].answer2;
        document.getElementById("answer3").innerHTML = codeQuiz[index].answer3;
        document.getElementById("answer4").innerHTML = codeQuiz[index].answer4;
        index++;
    }
    if (codeQuiz.length === index) {
        document.getElementById("questionPrompt").innerHTML = 'You got ' + counter + ' out of 5!'
        //nextBtn.classList.add('hide');
        answerBtns.classList.add('hide');
        quizEndScreen.classList.remove('hide');
        timeLeft.classList.add('hide');
    }
} 

function endScreen() {
    quizEndScreen.classList.remove('hide')
    answerBtns.classList.add('hide')
    timeLeft.classList.add('hide')
    document.getElementById("questionPrompt").innerHTML = 'You got ' + counter + ' out of 5!'
  }
  let Score = [];
    const addName = (ev)=>{
        ev.preventDefault();
        let name = {
            Name: document.getElementById('InputInitials').value,
            Score: counter,
        }
        Score.push(name);
        document.forms[0].reset();
        localStorage.setItem('HighScores', JSON.stringify(Score) );
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addName);
    });
  



//Question and answer array
var codeQuiz =[
    {question : "A very useful tool for used during development and debugging for printing content to the debugger is:?",
    answer1 : "Javascript",
    answer2 : "console log",
    answer3 : "terminal / bash",
    answer4 : "for loops", 
    correct : 3,"was_correct":0},

    {question : "Commonly used data types DO NOT include?",
     answer1 : "strings",
     answer2 : "numbers",
     answer3 : "booleans",
     answer4 : "alerts", 
     correct : 2,"was_correct":0},

    {question : "The condition in an if / else statement is enclosed within ____.",
     answer1 : "parentheses",
     answer2 : "square brackets",
     answer3 : "curly brackets",
     answer4 : "quotes", 
     correct : 4,"was_correct":0},

    {question : "String values must be enclosed within ____ when being assigned to variables.",
     answer1 : "parenthesis",
     answer2 : "commas",
     answer3 : "quotes",
     answer4 : "curly brackets", 
     correct : 1,"was_correct":0},

    {question : "getElementById tracks what from HTML?",
     answer1 : "Id",
     answer2 : "Class",
     answer3 : "Type",
     answer4 : "src", 
     correct : 3,"was_correct":0},

     {question : "VOID",
     answer1 : "VOID",
     answer2 : "VOID",
     answer3 : "VOID",
     answer4 : "VOID", 
     correct : 1,"VOID":0},
];

