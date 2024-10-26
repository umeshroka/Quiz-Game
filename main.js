/*-------------------------------- Constants --------------------------------*/

const myCategories = [
  {
    category: "Accounting",
    score: 0
  },
  {
    category: "Inventory",
    score: 0
  },
];

const myQuestions = [
  {
    question: "Accounting Question 1?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "c",
    semiCorrectAnswer: "d",
    category: "Accounting",
    explanation: "yz"
  },
  {
    question: "Accounting Question 2?",
    answers: ["e", "f", "g", "h"],
    correctAnswer: "f",
    semiCorrectAnswer: "g",
    category: "Accounting",
    explanation: "yz"

  },
  {
    question: "Accounting Question 3?",
    answers: ["i", "j", "k", "l"],
    correctAnswer: "l",
    semiCorrectAnswer: "i",
    category: "Accounting",
    explanation: "yz"
  },
  {
    question: "Inventory Question 4?",
    answers: ["m", "n", "o", "p"],
    correctAnswer: "o",
    semiCorrectAnswer: "n",
    category: "Inventory",
    explanation: "yz"
  },
  {
    question: "Inventory Question 5?",
    answers: ["q", "r", "s", "t"],
    correctAnswer: "t",
    semiCorrectAnswer: "r",
    category: "Inventory",
    explanation: "yz"

  },
  {
    question: "Inventory Question 6?",
    answers: ["u", "v", "w", "x"],
    correctAnswer: "u",
    semiCorrectAnswer: "x",
    category: "Inventory",
    explanation: "yz"
  }
];


/*-------------------------------- Variables --------------------------------*/
let currentQuestion;
let currentQuestionIndex = 0;
let currentCategory;
let currentCategoryIndex = 0;

let score = 0;

/*------------------------ Cached Element References ------------------------*/

const startButton = document.getElementById('start');

const categoryContainer = document.querySelector('#categoryContainer');
const categories = document.querySelectorAll('.categories');

const questionContainer = document.querySelector('#questionContainer');
const question = document.querySelector('#question');
const answers = document.querySelectorAll('.answers');

const resultContainer = document.querySelector('#resultContainer');
const result = document.querySelector('#results');
const nextQuestionButton = document.querySelector('#nextQuestion');



/*-------------------------------- Functions --------------------------------*/
const init = () => {
  startButton.classList.add("show");
}


const displayCategories = () => {
  for (let i = 0; i < myCategories.length; i++) {
    categories[i].textContent = myCategories[i].category
  };
  startButton.classList.add("hidden");
  categoryContainer.classList.add("show");
}

const displayQuestions = (event) => {
  categoryContainer.classList.remove("show");
  questionContainer.classList.add("show");

  const relevantQuestions = myQuestions.filter((question) => {
    return event.target.textContent === question.category;
  })
  currentQuestion = relevantQuestions[currentQuestionIndex];
  question.textContent = currentQuestion.question;

  for (let i = 0; i < answers.length; i++) {
    answers[i].textContent = currentQuestion.answers[i]
  }
  };

const checkAnswer = (event) => {
  resultContainer.classList.add('show');
  if (event.target.textContent === currentQuestion.correctAnswer) {
    result.textContent = `Correct! Explanation: ${currentQuestion.explanation}`;
    score =+ 2;
  } else if (event.target.textContent === currentQuestion.semiCorrectAnswer) {
    result.textContent = `Wrong! Explanation: ${currentQuestion.explanation}`
    score =+ 1;
  } else {
    result.textContent = `Wrong! Explanation: ${currentQuestion.explanation}`
  }
  currentQuestionIndex++;
  console.log(score);
  console.log(currentQuestionIndex)
}
  



/*----------------------------- Event Listeners -----------------------------*/
init();

startButton.addEventListener('click', displayCategories);

categories.forEach(category => {
  category.addEventListener('click', displayQuestions)
});

answers.forEach(answer => {
  answer.addEventListener('click', checkAnswer)
});

