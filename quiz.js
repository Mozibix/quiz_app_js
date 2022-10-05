const Data = [];

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const question = document.querySelector("h3");
let nextBtn = document.getElementById("btn_next");
let PrevBtn = document.getElementById("btn_prev");

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answers");

let intialQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  unCheckAnswer();
  let nextOption = Data[intialQuiz];
  question.innerText = nextOption.question;
  option1.innerText = nextOption.a;
  option2.innerText = nextOption.b;
  option3.innerText = nextOption.c;
  option4.innerText = nextOption.d;
  nextBtn.addEventListener("click", nextQuestion);
  PrevBtn.addEventListener("click", PreviousQuestion);
}

function nextQuestion() {
  const answer = getValue();
  if (answer) {
    if (answer === Data[intialQuiz].correct) {
      score++;
    }
    intialQuiz++;
    if (intialQuiz < Data.length) {
      loadQuiz();
    } else if (score === Data.length) {
      quiz.innerHTML = `<h1> Congratulations <br/> You ${score}/${Data.length}</h1> `;
    } else {
      quiz.innerHTML = `<h1> You scored ${score}/${Data.length}`;
    }
  }
}

function PreviousQuestion() {
  if (intialQuiz.valueOf() === 0) {
    alert("can't go back anymore");
  } else {
    intialQuiz--;
    loadQuiz();
  }
}

function getValue() {
      let value = undefined;
  answers.forEach((answer) => {
    if (answer.checked) {
      value = answer.id;
    }
  });
  return value;
}

function unCheckAnswer() { }
