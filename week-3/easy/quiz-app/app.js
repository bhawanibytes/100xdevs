//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]


// script by bhawanibytes
let score = 0
let currentQuiz = 0
let i = 0

loadQuiz();


function loadQuiz() {
    deselectAnswers()
    if (currentQuiz<quizData.length) {
        document.querySelector('.quiz').innerHTML = quizData[currentQuiz].question
        console.log('loop is done');
        document.querySelector('#opt-a').innerHTML = quizData[currentQuiz].a
        document.querySelector('#opt-b').innerHTML = quizData[currentQuiz].b
        document.querySelector('#opt-c').innerHTML = quizData[currentQuiz].c
        document.querySelector('#opt-d').innerHTML = quizData[currentQuiz].d
    } else {
        let result = `You answered ${score} / ${quizData.length} correctly!`
        document.querySelector('.quiz').innerHTML = result;
        document.querySelector('.quiz-app').removeChild(document.querySelector('.options'))
    }
}

function deselectAnswers() {
    document.querySelectorAll('.answer').forEach(element => {
        element.checked = false
    });
    
}

function scoreCounter() {
    document.querySelectorAll('.answer').forEach(element => {
        if (element.checked) {
            if (element.id === quizData[currentQuiz].correct) {
                score++
            }
        }
    });
}

document.querySelector('.button').addEventListener('click', () => {
    i++
    if ( currentQuiz < quizData.length){
        scoreCounter()
        ++currentQuiz
        loadQuiz();
    }
    if(currentQuiz === quizData.length){
        document.querySelector('.button').innerHTML = "Retry"
        currentQuiz++
    }
    if (i > quizData.length) {
        location.reload();
    }
})




// import { quizData } from './data.js';

// const questionEl = document.getElementById("question");
// const a_text = document.getElementById("a_text");
// const b_text = document.getElementById("b_text");
// const c_text = document.getElementById("c_text");
// const d_text = document.getElementById("d_text");
// const submitBtn = document.getElementById("submit");
// const resultEl = document.getElementById("result");
// const scoreEl = document.getElementById("score");
// const totalEl = document.getElementById("total");

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz() {
//     deselectAnswers();
//     const currentQuizData = quizData[currentQuiz];
//     questionEl.innerText = currentQuizData.question;
//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;
// }

// function deselectAnswers() {
//     document.querySelectorAll(".answer").forEach(answerEl => answerEl.checked = false);
// }

// function getSelected() {
//     let answer;
//     document.querySelectorAll(".answer").forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id;
//         }
//     });
//     return answer;
// }

// submitBtn.addEventListener("click", () => {
//     const answer = getSelected();
//     if (answer) {
//         if (answer === quizData[currentQuiz].correct) {
//             score++;
//         }

//         currentQuiz++;

//         if (currentQuiz < quizData.length) {
//             loadQuiz();
//         } else {
//             quizEl.classList.add('hidden');
//             resultEl.classList.remove('hidden');
//             scoreEl.innerText = score;
//             totalEl.innerText = quizData.length;
//         }
//     }
// });
