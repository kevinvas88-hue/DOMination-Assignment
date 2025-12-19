const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  startContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const scoreText = document.getElementById("score");

const quizData = [
  {
    question: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "Which part of JavaScript is the hardest to learn?",
    options: ["Variables()", "Arrays()", "Functions()", "All of the Above()"],
    answer: 3,
  },
  {
    question: "What about this assignment is the hardest?",
    options: [
      "lack of guidance()",
      "practice worksheets didn't help()",
      "missing Javascript workshop()",
      "All the above()",
    ],
    answer: 3,
  },
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentIndex];
  questionContainer.textContent = currentQuestion.question;
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionButton);
  });
}

loadQuestion();

function selectOption(selectedIndex, button) {
  const currentQuestion = quizData[currentIndex];
  const buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach((btn) => (btn.disable = true));

  if (selectedIndex === currentQuestion.answer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
    buttons[currentQuestion.answer].classList.add("correct");
  }

  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < quizData.lenth) {
  } else {
    showScore();
  }
});

function showScore() {
  quizContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
}

document.getElementById("restart-button").addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  scoreContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
