const quiz = [
    {
        question: "Who is Prime Minister of Canada? ",
        optionA: "Vladimir Putin",
        optionB: "Manmohan Singh",
        optionC: "Justin Trudeau",
        optionD: "Li Keqiang",
        correct: "optionC"
    },
    {
        question: "Who is President of China? ",
        optionA: "Hu Jintao",
        optionB: "Xi Jinping",
        optionC: "Narendra Modi",
        optionD: "Jack Ma",
        correct: "optionB"
    },
    {
        question: "In which direction does the sun rise? ",
        optionA: "East",
        optionB: "North",
        optionC: "West",
        optionD: "South",
        correct: "optionA"
    },
    {
        question: "How many vowels are there in English Alphabets? ",
        optionA: "2",
        optionB: "5",
        optionC: "3",
        optionD: "8",
        correct: "optionB"
    },
    {
        question: "How many consonants are there in English Alphabets? ",
        optionA: "39",
        optionB: "18",
        optionC: "11",
        optionD: "21",
        correct: "optionD"
    },
    {
        question: "How many days are in a year? ",
        optionA: "415",
        optionB: "200",
        optionC: "308",
        optionD: "365",
        correct: "365"
    },
    {
        question: "What is 7 * (63 / 7) % 3 ?",
        optionA: "21",
        optionB: "73",
        optionC: "16",
        optionD: "50",
        correct: "21"
    },

]


const quizz = document.getElementById("quiz");
const selectedAns = document.querySelectorAll(".answer")
const presentQues = document.getElementById("targetQues");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitButton = document.getElementById("submit-btn");

let currQues = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectOptions();

    // let's modify the ques text according to the current ques
    const currQuesInQuiz = quiz[currQues];
    presentQues.innerText = currQuesInQuiz.question;

    // Let's modify the options according to the current ques
    aText.innerText = currQuesInQuiz.optionA;
    bText.innerText = currQuesInQuiz.optionB;
    cText.innerText = currQuesInQuiz.optionC;
    dText.innerText = currQuesInQuiz.optionD;
}

function selected(){
    let answer = undefined;
    selectedAns.forEach((ans) => {
        if(ans.checked){
            answer =  selectedAns.id;
        }
    });
    return answer;
}

function deselectOptions() {
    selectedAns.forEach((ans) => {
        ans.checked = false;
    });
}

submitButton.addEventListener('click' , () => {
    const finalAns = selected();

    if(finalAns){

        if (finalAns === quiz[currQues].correct) {
            score++;
        }
        currQues++;
        if(currQues < quiz.length){
            loadQuiz();
        }else{
            quizz.innerHTML = `
                <h2>You answered correctly at ${score}/${quiz.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }

});