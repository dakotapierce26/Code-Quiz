var index = 0;

const answerBtns = document.getElementById('answer-btns');

document.getElementById("start-btn").addEventListener("click", startBtn);

function startBtn() {
    var startBtn = document.getElementById('start-btn')
    startBtn.classList.add('hide');
    answerBtns.classList.remove('hide');
    document.getElementById("questionPrompt").innerHTML = codeQuiz[index].question;
    document.getElementById("answer1").innerHTML = codeQuiz[index].answers;
    document.getElementById("answer2").innerHTML = codeQuiz[index].answers;
    document.getElementById("answer3").innerHTML = codeQuiz[index].answers;
    document.getElementById("answer4").innerHTML = codeQuiz[index].answers;
    if (index < codeQuiz.length-1) {
        index++
    }
}




var codeQuiz = [
    {"question" : "Who am I?", "answers" : ["Answer 1.1", "Answer 1.2","Answer 1.3","Answer 1.4"] ,"correct" :1, "was_correct":0},
    {"question" : "Where am I?", "answers" : ["Answer 2.1", "Answer 2.2","Answer 2.3","Answer 2.4"] ,"correct" :2, "was_correct":0},
    {"question" : "Who are you?", "answers" : ["Answer 3.1", "Answer 3.2","Answer 3.3","Answer 3.4"] ,"correct" :2, "was_correct":0},
    {"question" : "Can I be you?", "answers" : ["Answer 4.1", "Answer 4.2","Answer 3.3","Answer 4.4"] ,"correct" :2, "was_correct":0}
];







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


