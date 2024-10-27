# Quiz game

The idea is to create a project price estimator quiz.

The client will take the quiz to test their understanding of the various aspects and problems.

There will be different categories e.g. 1 for inventory, 1 for manufacturing, 1 for accounting etc.

When they choose the category, there will be several questions testing the key concepts.

It will be a multiple choice quiz.

There will be a correct answer that awards full points: 2.

There will be an answer that somewhat tells us that they have limited understanding awarding 1.

Wrong aswers will be 0.

After they answer the questions, it will tally up the points for the category.

Then, a set number of hours will be given for various levels of understanding. 8 hours if full understanding, 16 hours if limited understanding, 24 hours if no understandng etc. 

The cost will be tallied up based on cost/hour and then, a final budget with hours will be displayed to the client. 

# User stories 

1. When I arrive on the landing page, I want to see a Start Quiz button in the middle of the page.

2. When I press the start button, a few buttons to choose your category will show up.

3. After I press the category, the first question will show up with 4 possible multiple choice answers and a submit answer button. 

4. When I click the correct answer and submit, there will be a message saying "Correct!" with an explanation. 

5. When I click the wrong answer and submit, there will be a message saying "Wrong" with the correct answer and explanation. 

6. There will be a next question button that appears after that and it will lead to the next question. 

7. After answering all the questions in the category, there will be message saying you have completed all questions in this category and a choose your next category will show up.

8. Pressing the next category button will lead back to the #2 with the categories completed no longer showing. 

9. Finally, when all categories are finished, there will be message saying you have completed your quiz.

10. A "get budget" button will appear and the final budget will be displayed on the screen.

11. A reset button will be there to reset back to #1. 


# wireframes / html + css

![wireframe](assets/Wireframe.jpg)

# model / state

categories will be an array of object. 
categories = [{category: "Accounting", score: 0}, ...]

questions will be an array of object. 
questions 

# pseudocode

init() - create a function to display start quiz button 

displayCategories() - create a function to create buttons: display all categories.category and append and attach event listener to each one. assign an id to each button start from 0. variable = currentCategoryIndex

selectCategory (event) - assign the id as an index for the category

