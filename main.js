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
let currentCategoryIndex = 0;
let relevantQuestions = [];


/*------------------------ Cached Element References ------------------------*/

const startButton = document.getElementById('start');

const categoryContainer = document.querySelector('#categoryContainer');
const categories = document.querySelectorAll('.categories');

const questionContainer = document.querySelector('#questionContainer');
const question = document.querySelector('#question');
const answers = document.querySelectorAll('.answers');

const resultContainer = document.querySelector('#resultContainer')
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

const chooseCategory = (event) => {
  categoryContainer.classList.remove("show");
  questionContainer.classList.add("show");

  currentCategoryIndex = event.target.id;

  for (let i = 0; i < myQuestions.length; i++) {
    if (event.target.textContent === myQuestions[i].category) {
      relevantQuestions.push(myQuestions[i])
    }
  }
  displayQuestion()
}

const displayQuestion = () => {
 
  currentQuestion = relevantQuestions[currentQuestionIndex];
  question.textContent = currentQuestion.question;

  for (let i = 0; i < answers.length; i++) {
    answers[i].textContent = currentQuestion.answers[i]
  } 
}


const checkAnswer = (event) => {
  resultContainer.classList.add('show');

  if (event.target.textContent === currentQuestion.correctAnswer) {
    result.textContent = `Correct! Explanation: ${currentQuestion.explanation}`;
    myCategories[currentCategoryIndex].score =+ 2;
  } else if (event.target.textContent === currentQuestion.semiCorrectAnswer) {
    result.textContent = `Wrong! Explanation: ${currentQuestion.explanation}`
    myCategories[currentCategoryIndex].score =+ 1;
  } else {
    result.textContent = `Wrong! Explanation: ${currentQuestion.explanation}`
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < relevantQuestions.length) {
    displayQuestion();
  } else {
    displayCategories();
  }

}
  



/*----------------------------- Event Listeners -----------------------------*/
init();

startButton.addEventListener('click', displayCategories);

categories.forEach(category => {
  category.addEventListener('click', chooseCategory)
});

answers.forEach(answer => {
  answer.addEventListener('click', checkAnswer)
});

nextQuestionButton.addEventListener('click', displayQuestion);