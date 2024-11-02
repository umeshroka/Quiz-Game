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
    completed: false
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

const ratePerHour = 125
/*-------------------------------- Variables --------------------------------*/
let currentCategoryIndex;
let CategoryCount = 0;


let currentQuestion;
let currentQuestionIndex = 0;
let relevantQuestions = [];


/*------------------------ Cached Element References ------------------------*/

const startButton = document.querySelector('#start');

const categoryContainer = document.querySelector('#categoryContainer');

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

const budgetButton = document.querySelector('#budget');

const budgetTable = document.querySelector('#budgetTable');

const budgetTableBody = document.querySelector('#budgetTableBody');

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  startButton.classList.add("show");
}

init();

const displayCategories = () => {

  startButton.classList.remove("show");
  questionContainer.classList.remove("show");
  resultContainer.classList.remove('show');
  nextCategoryContainer.classList.remove('show');
  categoryContainer.classList.add("show");

  categoryContainer.innerHTML = '<h3>Select a Category</h3>';

  for (let i = 0; i < myCategories.length; i++) {

    if (!myCategories[i].completed) {

      const categories = document.createElement("button");
      categories.textContent = myCategories[i].category;
      categories.id = i;
      categoryContainer.appendChild(categories);
      categories.addEventListener('click', chooseCategory)

    }
  };
 
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
    myCategories[currentCategoryIndex].completed = true;
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

  budgetTableBody.innerHTML = "";

  let totalHours = 0;
  let totalCost = 0;

  for (let i = 0; i < myCategories.length; i++) {
    const row = document.createElement('tr');

    const categoryCell = document.createElement('td');
    categoryCell.textContent = myCategories[i].category;
    row.appendChild(categoryCell);

    const relevantQuestionsInCategory = myQuestions.filter(q => q.category === myCategories[i].category);
    const questionCount = relevantQuestionsInCategory.length;
    
    let hours;
    if (myCategories[i].score/questionCount < 1) {
      hours = 24; 
    } else if (myCategories[i].score/questionCount > 1.5) {
      hours = 8; 
    } else {
      hours = 16;
    }

    const hoursCell = document.createElement('td');
    hoursCell.textContent = hours;
    row.appendChild(hoursCell);

    const cost = hours * ratePerHour;
    totalHours += hours;
    totalCost += cost;

    const costCell = document.createElement('td');
    costCell.textContent = `$${cost}`; 
    row.appendChild(costCell);

    budgetTableBody.appendChild(row);
  }

  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.textContent = 'Total';
  totalCell.colSpan = 1;
  totalRow.appendChild(totalCell);

  const totalHoursCell = document.createElement('td');
  totalHoursCell.textContent = totalHours;
  totalRow.appendChild(totalHoursCell);

  const totalCostCell = document.createElement('td');
  totalCostCell.textContent = `$${totalCost}`; // Format total cost as currency
  totalRow.appendChild(totalCostCell);

  budgetTableBody.appendChild(totalRow);

  }

/*----------------------------- Event Listeners -----------------------------*/


startButton.addEventListener('click', displayCategories);

answerButtons.forEach(answer => {
  answer.addEventListener('click', checkAnswer)
});

nextQuestionButton.addEventListener('click', displayQuestion);

nextCategoryButton.addEventListener('click', displayCategories);

budgetButton.addEventListener('click', displayBudgetTable);