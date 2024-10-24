# Idea for quiz game

The idea is to create a project price estimator quiz.
The client will take the quiz to test their understanding of the various aspects and problems.
There will be different categories e.g. 1 for inventory, 1 for manufacturing, 1 for accounting etc
When they choose the category, there will be several questions testing the key concepts 
It will be a multiple choice quiz
There will be a correct answer that awards full points: 1
There will be an answer that somewhat tells us that they have limited understanding awarding 0.5
Wrong aswers will be 0. 
After they answer the questions, it will tally up the points for the category. 
Then, a set number of hours will be given for various levels of understanding. 8 hours if full understanding, 16 hours if limited understanding, 24 hours if no understandng etc. 
The cost will be tallied up based on cost/hour and then, a final budget with hours will be displayed to the client. 

# User stories

When I arrive on the landing page, I want to see a Start Quiz button in the middle of the page.
When I press the start button, a few buttons to choose your category will show up.
After I press the category, the first question will show up with 4 possible multiple choice answers and a submit answer button. 
When I click the correct answer and submit, there will be a message saying "Correct!" with an explanation. 
When I click the wrong answer and submit, there will be a message saying "Wrong" with the correct answer and explanation. 
There will be a next question button that appears after that and it will lead to the next question. 

After answering all the questions in the category, there will be message saying you have completed all questions in this category and a choose your next category will show up.
Pressing the next category button will lead back to the #2 with the categories completed no longer showing. 

Finally, when all categories are finished, there will be message saying you have completed your quiz.
A "get budget" button will appear and the final budget will be displayed on the screen.
A reset button will be there to reset back to #1. 


# wireframes / html + css


# model / state

Categories = []
Questions = [{
    question: 'Question 1',
    answers: {
        a: 'answer1',
        b: 'answer2',
        c: 'answer3',
        d: 'answer4',
    }
    correctanswer: a,
    category: categories[1],

}


# pseudocode


