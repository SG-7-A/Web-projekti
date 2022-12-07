// Vakio muuttuja kysymyksille
const QUESTIONS = [
  {
    question: "1. Mitä tarkoittaa clock tai watch?",
    answers: {
      a: "Katso",
      b: "Me",
      c: "Kello",
      d: "Avaruus",
    },
    correctAnswer: "c",
  },
  {
    question: "2. Miten kirjoitetaan Orava englanniksi?",
    answers: {
      a: "Octopuss",
      b: "Squirrel",
      c: "Bird",
      d: "beaver",
    },
    correctAnswer: "b",
  },
  {
    question: "3. Mikä on oikea lyhenne i am:lle",
    answers: {
      a: "Am",
      b: "I'a",
      c: "I",
      d: "I'm",
    },
    correctAnswer: "d",
  },
  {
    question: "4. Mikä hedelmä kyseessä?",
    answers: {
      a: "Apple",
      b: "Kiwi",
      c: "Watermelon",
      d: "Orange",
    },
    correctAnswer: "a",
  },
  {
    question: "5. Miten kirjoitetaan minun nimeni on?",
    answers: {
      a: "My age is",
      b: "My name is",
      c: "My dogs name is",
      d: "My address is",
    },
    correctAnswer: "b",
  },
];

// Vakio muuttuja kysymyksen paikalle
const QUESTION_PLACE = document.getElementById("question");
// Vakio muuttujat vastausnapeille
const ANSWER_A = document.getElementById("a");
const ANSWER_B = document.getElementById("b");
const ANSWER_C = document.getElementById("c");
const ANSWER_D = document.getElementById("d");
// Vakio diville missä valintanapit
const ANSWER_BUTTONS = [
  ANSWER_A,
  ANSWER_B,
  ANSWER_C,
  ANSWER_D
]
// Vakio muuttuja submit ja seuraava kysymys
const NEXT_BUTTON = document.getElementById("next-button");
// index muuttuja kysymystaulukkoa varten
let index = 0;
let quizScore = 0;
//

function selectedAnswer(){
  let clickedAnswer = undefined;
  ANSWER_BUTTONS.forEach((element) =>{
    if(element.clicked){
      clickedAnswer = element.id;
    }
  });
  return clickedAnswer;
}
// Poistaa valinnan
function deleteSelected(){
  ANSWER_BUTTONS.forEach((element) => {
    element.checked = false;
  });
}
// Näyttää kysymykset ja vastaukset
function showQuiz(){
  deleteSelected();
  QUESTION_PLACE.innerText = QUESTIONS[index].question;
  ANSWER_A.innerText = QUESTIONS[index].answers.a;
  ANSWER_B.innerText = QUESTIONS[index].answers.b;
  ANSWER_C.innerText = QUESTIONS[index].answers.c;
  ANSWER_D.innerText = QUESTIONS[index].answers.d;
}
// Näyttää seuraavan kysymyksen sekä vastaukset
function nextGuestion(){
  NEXT_BUTTON.addEventListener("click", () => {
    let pressed = selectedAnswer();
    if  (pressed ){
      if( pressed == QUESTIONS[index].correctAnswer){
        quizScore++;
      }
    }
    index++;
    if ( index < QUESTIONS.lenght ){
      nextGuestion();
    } else{
      document.getElementById("results").innerHTML = "Tässä visailun tulos" + quizScore + "/5";
    }
  })
}
function jotain(){

}
showQuiz();
nextGuestion();
