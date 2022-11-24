let question = "";
let answers = "";
let correctAnwers = "";
/* 
alla oleva koodi otettu netistä
https://simplestepscode.com/javascript-quiz-tutorial/
 */
/* kysymykset ja oikeat vastaukset */
let questions = [
  {/* kysymys 1 */
     question: "Mitä tarkoittaa clock tai watch?",
    answers: {
      a: "katso",
      b: "me",
      c: "kello",
      d: "avaruus"
    },
    correctAnwers: "c"
  },
  {/* kysymys 2 */
    question: "Mikä eläin squirrel on?",
    answers:{
      a: "mustekala",
      b: "orava",
      c: "lintu",
      d: "myyrä"
    },
    correctAnwers: "b"
  },
  {/* kysymys 3 */
    question: "Mikä on oikea lyhenne i am?",
    answers:{
      a: "am",
      b: "i'a",
      c: "i",
      d: "i'm"
    },
    correctAnwers: "d"
  },
  {/* kysymys 4 */
    question: "Mitä tarkoittaa i am?",
    answers:{
      a: "minä olen",
      b: "hän on",
      c: "olemme",
      d: "ollaan"
    },
    correctAnwers: "a"
  },
  {/* kysymys 5 */
    question: "miten kirjoitetaan minun nimeni on?",
    answers:{
      a: "my age is",
      b: "my name is",
      c: "my dogs name is",
      d: "my adress is"
    },
    correctAnwers: "b"
  }

]
let score = 0;