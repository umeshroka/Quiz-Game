/*-------------------------------- Constants --------------------------------*/

const myCategories = [
  {
    category: "Accounting",
    score: 0,
    completed: false,
  },
  {
    category: "Inventory",
    score: 0,
    completed: false,
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

// const myScores = [
//   {
//     score: [0,1,2],
//     hours: 24,
//     cost: ratePerHour * 24
//   },
//   {
//     score: [3,4],
//     hours: 16
//   },
//   {
//     score: [5,6],
//     hours: 8
//   }
// ]

const ratePerHour = 125
/*-------------------------------- Variables --------------------------------*/
let currentCategoryIndex;
let CategoryCount = 0;


let currentQuestion;
let currentQuestionIndex = 0;
let relevantQuestions = [];


/*------------------------ Cached Element References ------------------------*/

const start = document.querySelector('#start');

const categoryContainer = document.querySelector('#categoryContainer');
const categories = document.querySelectorAll('.categories');

const questionContainer = document.querySelector('#questionContainer');
const question = document.querySelector('#question');
const answerButtons = document.querySelectorAll('.answers');

const resultContainer = document.querySelector('#resultContainer')
const result = document.querySelector('#results');

const nextQuestionButton = document.querySelector('#nextQuestion');
const nextQuestionContainer = document.querySelector('#nextQuestionContainer');

const nextCategoryButton = document.querySelector('#nextCategory');
const nextCategoryContainer = document.querySelector('#nextCategoryContainer');

const quizEnd = document.querySelector('#quizEnd');

const budget = document.querySelector('#budget');
const budgetTable = document.querySelector('#budgetTable');

const budgetCategories = document.querySelectorAll('.budgetCategory')
const budgetHours = document.querySelectorAll('.budgetHours')
const budgetCost = document.querySelectorAll('.budgetCost')

const totalHours = document.querySelector('#totalHours')
const totalCost = document.querySelector('#totalCost')

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  start.classList.add("show");
}

init();

const displayCategories = () => {

// currently, it displays all categories which is fine for the first time.
// but after they have chosen the category, the next time should only have 1 category.
// means this html should just be a container, and the number of buttons to display is based on conditions
// and create elements and append 

  for (let i = 0; i < myCategories.length; i++) {
    categories[i].textContent = myCategories[i].category
  };
 
  start.classList.remove("show");
  questionContainer.classList.remove("show");
  resultContainer.classList.remove('show');
  nextCategoryContainer.classList.remove('show');
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

  CategoryCount++;

  displayQuestion();
}

const displayQuestion = () => {
  resultContainer.classList.remove('show');
  nextQuestionContainer.classList.remove('show');
 
  currentQuestion = relevantQuestions[currentQuestionIndex];
  question.textContent = currentQuestion.question;

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i]
  } 
}


const checkAnswer = (event) => {
  resultContainer.classList.add('show');

  if (event.target.textContent === currentQuestion.correctAnswer) {
    result.textContent = `Correct! Explanation: ${currentQuestion.explanation}`;
    myCategories[currentCategoryIndex].score += 2;
  } else if (event.target.textContent === currentQuestion.semiCorrectAnswer) {
    result.textContent = `Wrong! Explanation: ${currentQuestion.explanation}`;
    myCategories[currentCategoryIndex].score += 1;
  } else {
    result.textContent = `Wrong! Explanation: ${currentQuestion.explanation}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < relevantQuestions.length) {
    nextQuestionContainer.classList.add('show');
  } else if (CategoryCount < myCategories.length) {
    nextCategoryContainer.classList.add('show');
  } else {
    quizEnd.classList.add("show");
  }
}
  

const displayBudgetTable = () => {
  questionContainer.classList.remove('show');
  resultContainer.classList.remove('show');
  quizEnd.classList.remove('show');
  budgetTable.classList.add("show");

  for (let i = 0; i < budgetCategories.length; i++) {
    budgetCategories[i].textContent = myCategories[i].category
  }

  for (let i = 0; i < budgetHours.length; i++) {
    if (myCategories[i].score < 3 ) {
      budgetHours[i].textContent = 24;
    } else if (myCategories[i].score > 4) {
      budgetHours[i].textContent = 8;
    } else {
      budgetHours[i].textContent = 16;
    }
  }


}

/*----------------------------- Event Listeners -----------------------------*/


start.addEventListener('click', displayCategories);

categories.forEach(category => {
  category.addEventListener('click', chooseCategory)
});

answerButtons.forEach(answer => {
  answer.addEventListener('click', checkAnswer)
});

nextQuestionButton.addEventListener('click', displayQuestion);

nextCategoryButton.addEventListener('click', displayCategories);

budget.addEventListener('click', displayBudgetTable);