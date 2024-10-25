/*-------------------------------- Constants --------------------------------*/

const myCategories = [
  {
    category: "Accounting",
    score: 0
  },
  {
    category: "Purchase",
    score: 0
  },
  {
    category: "Inventory",
    score: 0
  },
  {
    category: "Manufacturing",
    score: 0
  },
  {
    category: "Sales",
    score: 0
  }
];

const myQuestions = [
  {
    question: "Question 1?",
    answers: {1: "a", 2: "b", 3: "c", 4: "d"},
    correctAnswer: "c",
    category: "Accounting",
    explanation: "xyz"
  },
  {
    question: "Question 2?",
    answers: {1: "e", 2: "f", 3: "g", 4: "h"},
    correctAnswer: "f",
    category: "Accounting",
    explanation: "xyz"

  },
  {
    question: "Question 3?",
    answers: {1: "i", 2: "j", 3: "k", 4: "l"},
    correctAnswer: "l",
    category: "Accounting",
    explanation: "xyz"
  }
];


/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

/*-------------------------------- Functions --------------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

