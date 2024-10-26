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
    answers: {1: "a", 2: "b", 3: "c", 4: "d"},
    correctAnswer: "c",
    category: "Accounting",
    explanation: "xyz"
  },
  {
    question: "Accounting Question 2?",
    answers: {1: "e", 2: "f", 3: "g", 4: "h"},
    correctAnswer: "f",
    category: "Accounting",
    explanation: "xyz"

  },
  {
    question: "Accounting Question 3?",
    answers: {1: "i", 2: "j", 3: "k", 4: "l"},
    correctAnswer: "l",
    category: "Accounting",
    explanation: "xyz"
  },
  {
    question: "Inventory Question 4?",
    answers: {1: "a", 2: "b", 3: "c", 4: "d"},
    correctAnswer: "c",
    category: "Inventory",
    explanation: "xyz"
  },
  {
    question: "Inventory Question 5?",
    answers: {1: "e", 2: "f", 3: "g", 4: "h"},
    correctAnswer: "f",
    category: "Inventory",
    explanation: "xyz"

  },
  {
    question: "Inventory Question 6?",
    answers: {1: "i", 2: "j", 3: "k", 4: "l"},
    correctAnswer: "l",
    category: "Inventory",
    explanation: "xyz"
  }
];


/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

const start = document.getElementById('start');

const categoryContainer = document.querySelector('#categoryContainer');
const categories = document.querySelectorAll('.categories');

const questionContainer = document.querySelector('#questionContainer');
const question = document.querySelector('#question')

const resultsContainer = document.getElementById('results');
const submitAnswerButton = document.getElementById('submit');

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  start.classList.add("show");
}


const displayCategories = () => {
  for (let i = 0; i < myCategories.length; i++) {
    categories[i].textContent = myCategories[i].category
  };
  start.classList.add("hidden");
  categoryContainer.classList.add("show");
}

const displayFirstQuestion = (event) => {
  categoryContainer.classList.remove("show");

  if (event.target.textContent === myQuestions[0].category) {
    question.textContent = myQuestions[0].question
    
  }
  console.log(question)

  questionContainer.classList.add("show");

}

/*----------------------------- Event Listeners -----------------------------*/
init();

start.addEventListener('click', displayCategories);

categories.forEach(category => {
  category.addEventListener('click', displayFirstQuestion)
});