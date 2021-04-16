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
]


let currentQuestion = 0

loadQuiz()

function loadQuiz() {

    currentQuestion++
}
