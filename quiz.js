let score = 0;
let currentQuestionIndex = 0;

let questions=[
    {
        question: "Was is die Hauptstadt von Österreich?",
        answers: ["Paris","London","Wien","Berlin"],
        correctAnswer:"2"
    },

    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["Berlin", "Hamburg", "München", "Frankfurt"],
        correctAnswer: "0"
    },
    {
        question: "Wie viele Tage hat ein Schaltjahr?",
        answers: ["365", "366", "364", "367"],
        correctAnswer: "1"
    },
    {
        question: "Welche Farbe hat die deutsche Flagge nicht?",
        answers: ["Rot", "Grün", "Schwarz", "Gelb"],
        correctAnswer: "1"
    },
    {
        question: "Wie heißt der längste Fluss in Deutschland?",
        answers: ["Elbe", "Rhein", "Donau", "Main"],
        correctAnswer: "2"
    },
    {
        question: "Wer schrieb 'Faust'?",
        answers: ["Friedrich Schiller", "Johann Wolfgang von Goethe", "Thomas Mann", "Hermann Hesse"],
        correctAnswer: "1"
    },
    {
        question: "Welche Tierart ist kein Säugetier?",
        answers: ["Fledermaus", "Haifisch", "Delfin", "Löwe"],
        correctAnswer: "1"
    },
    {
        question: "Welche ist keine Primzahl?",
        answers: ["2", "11", "15", "7"],
        correctAnswer: "2"
    },
    {
        question: "In welcher Stadt steht der Eiffelturm?",
        answers: ["Paris", "Rom", "Berlin", "Madrid"],
        correctAnswer: "0"
    },
    {
        question: "Was ist das chemische Symbol für Wasser?",
        answers: ["H2O", "O2", "CO2", "H2"],
        correctAnswer: "0"
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: ["12", "14", "16", "18"],
        correctAnswer: "2"
    },
    {
        question: "Welche Sprache spricht man in Brasilien?",
        answers: ["Spanisch", "Portugiesisch", "Französisch", "Italienisch"],
        correctAnswer: "1"
    },
    {
        question: "Wie viele Planeten hat unser Sonnensystem?",
        answers: ["8", "9", "10", "7"],
        correctAnswer: "0"
    },
    {
        question: "Wer malte die Mona Lisa?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        correctAnswer: "1"
    },
    {
        question: "Welches Element hat das chemische Symbol 'O'?",
        answers: ["Wasserstoff", "Kohlenstoff", "Sauerstoff", "Stickstoff"],
        correctAnswer: "2"
    },
    {
        question: "Was ist das größte Land der Welt?",
        answers: ["China", "USA", "Russland", "Kanada"],
        correctAnswer: "2"
    },
    {
        question: "Was ist kein Kontinent?",
        answers: ["Afrika", "Asien", "Australien", "Grönland"],
        correctAnswer: "3"
    },
    {
        question: "Welcher Planet ist der Sonne am nächsten?",
        answers: ["Venus", "Erde", "Mars", "Merkur"],
        correctAnswer: "3"
    },
    {
        question: "Wie viele Seiten hat ein Würfel?",
        answers: ["4", "5", "6", "8"],
        correctAnswer: "2"
    },
    {
        question: "Was ist kein Säugetier?",
        answers: ["Wal", "Adler", "Hund", "Katze"],
        correctAnswer: "1"
    }
];

function displayQuestion(){
    if(currentQuestionIndex>=questions.length){
        document.getElementById('quiz-container').hidden=true;
        document.getElementById('result').hidden=false;
        document.getElementById('score').textContent=score;
        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent= question.question;

    let answersDiv=document.getElementById('answers');
    answersDiv.innerHTML="";
    question.answers.forEach((answer,index) => {
        let answerButton=document.createElement('button');
        answerButton.classList.add("btn","btn-light","me-2");
        answerButton.textContent=answer;
        answerButton.onclick=()=>checkAnswer(index);
        answersDiv.appendChild(answerButton);
    })
}
displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer=questions[currentQuestionIndex].correctAnswer;

    if(userAnswer==correctAnswer){
        score++;
    }
    nextQuestion()
}

function nextQuestion(){
    currentQuestionIndex++;
    displayQuestion()
}