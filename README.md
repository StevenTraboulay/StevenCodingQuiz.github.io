# StevenCodingQuiz.github.io
Coding Quiz


Request:
Wants to take a timed quiz on javaScript fundamentals and coding to store high scores to gauge progress


When clicking start 
it starts a timer and presented with the first random question
when you answer the question you'll see if you got it right, or wrong 
you are then presented with another question
when you answer incorrectly you lose time on the clock
when all questions are answered are time reaches 0
the game is over
when the game is over you can save your score and initials


*****
BONUS---
You lose points (hidden) when you answer wrong
you can see the highscore table after you're done. to a max of 10 scores




****
Process:

1) Created the skeletal framework for the Quiz and overall styling options

2) styled the quiz page(s) themselves to align and better reflect the overall theme

3) using javaScript i created fairly simple iterations and functions to call a created array and then pull the information from the array into the functions. 

4) monitoring eventclickers, DOM actions and logical scripting I allowed the questions to randomize and cycle through until the end upon which it hits the final page (still need to determin the amount of questions??)

5) using styles and the eventclick I show the count of questions asked, potential scoring (adjust?) and then using styles and allowing the functions to create new elemtns and child elements I created a completion bar within the top display

6) I then created the completion page where the quiz taker can input their name and save their score, try again or restart right from the begining.

7) Also creating the local storage and retrieval options to allow the score saving.

8) creating a page for highscores as well as associated styling and script

9)  on new highscore page created function to pull local data from Quiz to display on the highscore page.

10) added in timer, the iteration works and has a stop of 25 seconds. the user loses 2 seconds each wrong answer and a hidden score feature where they lose -3 points if they guess wrong.

11) updated questions and cleaned up code, updated the README


****
New techniques:

1) Through stacked overflow and googling i learned we could interchange var and let in some instances as well as var and const (constant) depending on if the variable is global or not

2) using the => in lieu of function can save time and can actually clean up code

3) using ! and then tab in an HTML will call an easy boilerplate to utilize for HTML and build off of

4) learned that .map takes an incomy array and converts incoming items into a new array (self learning not taught in curriculum would recommend)

****
Github link:
 https://steventraboulay.github.io/StevenCodingQuiz.github.io/
 github location:
 https://github.com/StevenTraboulay/StevenCodingQuiz.github.io


***
unable to link in screenshot dual monitors are interfearing 

