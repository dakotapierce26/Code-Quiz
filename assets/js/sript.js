var index = 0;
var counter = 0;
const answerBtns = document.getElementById('answer-btns');
const nextBtn = document.getElementById('next-btn')

//document.getElementById("start-btn").addEventListener("click", startBtn);

//starts quiz
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
        counter++
        console.log(counter)
    }
}

//document.getElementById("next-btn").addEventListener('click', nextQuestion);

function nextQuestion() {
    nextBtn.classList.remove('hide');
    if (index <= codeQuiz.length-1) {
        document.getElementById("questionPrompt").innerHTML = codeQuiz[index].question;
        document.getElementById("answer1").innerHTML = codeQuiz[index].answer1;
        document.getElementById("answer2").innerHTML = codeQuiz[index].answer2;
        document.getElementById("answer3").innerHTML = codeQuiz[index].answer3;
        document.getElementById("answer4").innerHTML = codeQuiz[index].answer4;
        index++;
    }
    
    if (codeQuiz.length-1 === index) {
        document.getElementById("questionPrompt").innerHTML = 'You got ' + counter + ' answers correct!'
        nextBtn.classList.add('hide');
        answerBtns.classList.add('hide');
    }

    

} 



//Question and answer array
var codeQuiz =[
    {question : "Who am I?",
     answer1 : "Answer 1.1",
     answer2 : "Answer 1.2",
     answer3 : "Answer 1.3",
     answer4 : "Answer 1.4", correct :2},

    {question : "Where am I?",
     answer1 : "Answer 2.1",
     answer2 : "Answer 1.2",
     answer3 : "Answer 1.3",
     answer4 : "Answer 1.4", correct :2},

    {question : "Who are you?",
     answer1 : "Answer 3.1",
     answer2 : "Answer 1.2",
     answer3 : "Answer 1.3",
     answer4 : "Answer 1.4", correct :2},

    {question : "Can I be you?",
     answer1 : "Answer 4.1",
     answer2 : "Answer 1.2",
     answer3 : "Answer 1.3",
     answer4 : "Answer 1.4", correct :2},
];

/*
question:'',
answers:[
    {text:'',correct:},
]
*/



/*
home.classList.add('hide');

var sec = 10
setInterval(function() {
    document.getElementById("time").innerHTML = sec;
    sec--;
    if (sec == 00) {
        sec = time.classList.add('hide');
    }
}, 1000);
*/


