const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const timerEl = document.getElementById("time");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let time = (question.length = 25);
let timerId;

let questions = [
  {
    question: " Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question: " What function(s) would we use to randomize in Javascript?",
    choice1: "randomly pick a number, type it in and cross your fingers",
    choice2: "math.script(random).value>",
    choice3: "math.random()",
    choice4: "/d20 dice",
    answer: 3,
  },
  {
    question: " where do we put the <head></head> tags?",
    choice1: "before the body tag",
    choice2: "inside the body tag",
    choice3: "after the body tag",
    choice4: "a class in the body tag",
    answer: 1,
  },

  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },

  {
    question: " How would you execute your function?",
    choice1: "<function name>.execute",
    choice2: "<function name>()",
    choice3: "execute.<function name>",
    choice4: "execute function()",
    answer: 2,
  },

  {
    question: " git add . does the following: ",
    choice1: "sums the number of documents together",
    choice2: "outputs the value of the documents",
    choice3: "adds a change in the working directory to the staging area.",
    choice4: "adds current text to git README",
    answer: 3,
  },
];

//constant items
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 6;

//functions
startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();

  //start timer
  timerId = setInterval(clockTick, 1000);

  //show timer

  timerEl.textContent = time;
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //create the local storage retrieval
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign(
      "../StevenCodingQuiz.github.io/complete.html"
    );
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    if (classToApply === "incorrect") {
      time -= 2;

      if (time < 0) {
        time = 0;
      }
      score = score - 3;
    }

    //display new time on page
    timerEl.textContent = time;

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

function stopQuiz() {
  //stop timer
  clearInterval(timerId);

  return window.location.assign("../StevenCodingQuiz.github.io/complete.html");
}

function clockTick() {
  //update time
  time--;
  timerEl.textContent = time;

  //if out of time

  if (time <= 0) {
    stopQuiz();
  }
}

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

//executions
startQuiz();
