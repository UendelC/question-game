const quizData = [
    {
        question: 'How old is florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c',
    },
    {
        question: 'Whats the most used language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a',
    },
    {
        question: 'Whos the president of Brasil?',
        a: 'Lula',
        b: 'Dória',
        c: 'Ciro Gomes',
        d: 'Bolsonaro',
        correct: 'd',
    },
    {
        question: 'What does html mean?',
        a: 'hypertext markup language',
        b: 'hora trabalhada meu labutador',
        c: 'hour time minute lingers',
        d: 'nda',
        correct: 'a',
    },
    {
        question: 'What year was javascript launched?',
        a: '2020',
        b: '1995',
        c: '1940',
        d: '2002',
        correct: 'b',
    },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
const answersEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let answer = undefined;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answer) => {
        answer.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(score);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>`;
        }
    }
});
