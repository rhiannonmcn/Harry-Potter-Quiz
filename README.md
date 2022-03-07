# **Harry Potter Book Quiz - Project Portfolio 2 - Javascript**

Harry Potter Book Quiz is an interactive online quiz for users who would like to test their book knowledge of the Harry Potter universe in a fun, and challenging way, with a means to choose the quiz difficulty and caluclate the score and compare it to previous highscores.

You can view the live site here - <a href="https://rhiannonmcn.github.io/Harry-Potter-Quiz/" target="_blank"> Harry Potter Book Quiz </a>

# Contents

* [Objective](<#objective>) 
* [User Experience](<#user-experience-ux>)
    * [Site Aims](<#site-aims>)
    * [User Stories](<#user-stories>)
    * [Design Wireframes](<#design-wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)
    *   [Colour Scheme](<#colour-scheme>)
    *   [Typography](<#typography>)
* [Features](<#features>)
* [Future Features](<#future-features>)
* [Technologies Used](<#technologies-used>)
* [Testing](<#testing>)
    * [Code Validation](<#code-validation>)
    * [Lighthouse Testing](<#lighthouse-testing>)
    * [Responsive Testing](<#responsive-testing>)
    * [Accessibility Testing](<#accessibility-testing>)
    * [Manual Testing](<#manual-testing>)
    * [Bugs Fixed](<#bugs-fixed>)
* [Deployment](<#deployment>)
* [Credits](<#credits>)
* [Acknowledgements](<#acknowledgements>)

# Objective

[Back to top](<#contents>)

# User Experience (UX)

## Site Aims

* To provide the user with an interactive quiz to test their knowledge on the subject of the Harry Potter Books.
* To create a quiz that encourages the user to start again to improve their score.
* To provide a quiz that is fully responsive so the user can play across multiple platforms.
* To provide an interactive experience that is easy to navigate and understand.
* To provide an experience that is enjoyable but still challenging to the user so that they will do the quiz again.

## User Stories

The **user** is any person who has read the Harry Potter book series (1-7) and would like to test their Harry Potter book knowledge.

| ID | ROLE | ACTION | GOAL |
|-----------------|:-------------|:---------------:|:---------------:|
| 1 | USER | As a user, I want to be able play the Harry Potter Quiz| So I can test my knowledge|
| 2 | USER | As a user, I want to be able to navigate around the interface easily | so it doesn't take me out of the experience|
| 3 | USER | As a user, I want to be able to play the quiz across all devices | So I can play the quiz while on the go or in different locations |
| 4 | USER | As a user, I want the option of a more difficult quiz | So I can challenge myself  |
| 5 | USER | As a user, I want to be able to start the game when I am ready | So I can prepare myself |
| 6 | USER | As a user, I want to be track my score | So I can improve on it |
| 7 | USER | As a user, I want to see the right answer highlighted if I answer wrong | So I can see where I went wrong |
| 8 | USER | As a user, I want to be able to start a new game when the current one ends | So I can see if I can beat my score|
| 9 | USER | As a user, when I play the quiz I want the questions to be randomly ordered | So the game can be as challenging as possible |

## Design Wireframes

<details> <summary> Low fidelity desktop wireframes</summary>

![Difficulty screen](docs/wireframes/desktop-wireframe-difficulty.png)

![Start screen](docs/wireframes/desktop-wireframe-start.png)

![Questions screen](docs/wireframes/dekstop-wireframe-questions.png)

![Finish quiz screen](docs/wireframes/desktop-wireframe-finish.png)

</details>

<details> <summary> Low fidelity tablet wireframes</summary>

![Difficulty screen](docs/wireframes/tablet-wireframe-difficulty.png)

![Start screen](docs/wireframes/tablet-wireframe-start.png)

![Questions screen](docs/wireframes/tablet-wireframe-questions.png)

![Finish quiz screen](docs/wireframes/tablet-wireframe-finish.png)

</details>

<details> <summary> Low fidelity phone wireframes</summary>

![Difficulty screen](docs/wireframes/phone-wireframe-difficulty.png)

![Start screen](docs/wireframes/phone-wireframe-start.png)

![Questions screen](docs/wireframes/phone-wireframe-questions.png)

![Finish quiz screen](docs/wireframes/phone-wireframe-finish.png)

</details>


## Site Structure

Harry Potter Online Quiz consists of a one page site with 5 different 'screens' and an optional 6th and 7th screen, that the user navigates through to engage with the quiz. The Home screen offers three navigation paths, one to enter the quiz, another to see the highscores and the last is the rules page. Each screen has an information bar with information and controls on it; the home page button is to the immediate left and the sound icon toggles the sound on and off is right beside it. When the user progresses to the actual quiz, the bar is filled with a timer, counting down how long the user has to answer the questions and a score which tallies the user's score as they progress through the quiz. Upon finishing the quiz you the user is immediately taken to the results screen that gives the option to navigate to the optional 6th screen which is the highscores screen which can also be accessed from the home screen or to go to the home page.

## Design Choices

### Colour Scheme

The final colour scheme chosen was a rich dark red colour, with a warm, cream colour for the text and a mid grey colour as an accent. This colour scheme directly links back with the theme of the project: Harry Potter. Red is often associated with Harry Potter, the main character, because of his association with the Gryffindor house, who's colour is red or scarlet. The grey and cream colours are a nod to the main setting of the books, which is a castle, and the magical community's main ways of communication which tends to be a bit old fashioned in it's use of parchment and quills. 

![Site colour scheme](docs/readme-images/color-palete.png)

### Typography

The fonts chosen were Cinzel for the main heading text and Prata for the subsequent heading and body text. Sans-serif is the fallback font. 

Both fonts are a serif font and tie nicely with the theme of the quiz. There is a slight vintage feel to both fonts, with the use of letter spacing to give it a clean feel.

[Back to top](<#contents>)

# Features

The Harry Potter Online Book Quiz is created to produce an immersive experience for the user through the use of both design and site structure. It moves away from a typical website structure with the a menubar and is structured and designed more like a game.

It is intuitively designed so the user can navigate it with ease, with visible and recognisable Home and Sound button icons, and visual ques and sound effects reflecting the topic.

## Navigation

* The site navigation is done through the info bar at the top of the quiz area and this does not change in style throughout the user's navigation of the quiz.
* The user can navigate to the home screen from whereever they are in the quiz through the home button. 
* This is an icon of a castle, a nod to the theme itself while still being recognisable as a 'home' button. 
* The sound button is automatically muted on website loading and like the home button it's position doesn't move but sound can be activated or muted by the user as they wish.
* Upon activation, there is themed background music and sound effects on the button clicks.
* On the quiz run through two more bits of information are added to the right of these: the timer countdown and the user's score.
* The navbar is responsive and does not change order throughout screen size changes.

[Back to top](<#contents>)

## Home Screen

* The Home Screen is the screen thats visible first when the site website loads. It is designed to be immediately recognisable to the user and to allow the user to immediately get playing the quiz.
* In the middle of the website, the user will the quiz application centered, sitting upon a very recognisable Harry Potter themed background.
* There is also the title and logo sitting on top of the quiz application, again giving the user the information on what the application is.
* The user is presented with three buttons; a Quiz button, a Highscores button and a Rules button and from here the user has all the information needed to play the quiz.

## Quiz Difficulty Screen

* Navigation to this screen is through pressing the Quiz button on the home screen.
* The quiz has three difficulty levels to choose from and are so named after different Harry Potter exam related material from the books.
* Each difficulty has its' own question pool to choose from, which 10 questions are randomly choosen from.
* Depending on which quiz difficulty is chosen, also determines other features that are implemented.
* Choosing Troll (easy level) will give the user a time of 20 secounds to answer a question and will reward the user 2 points for a correct answer with no penalty for a wrong answer. 
* Choosing O.W.L. (medium level) will give the user a time of 15 secounds to answer the question, will reward the user 5 points for a correct answer but will penalise the user 3 points for every wrong answer or if the timer runs out.
* Choosing N.E.W.T. (hard level) will give the user a time of 10 secounds to answer the question, will reward the user 2 points plus the addition of whatever time is left on the timer for a correct answer. The quicker the user answers the more points they score. But will penalise the user 5 points for every wrong answer or if the timer runs out.

## Quiz Start Screen

* The quiz start screen is simply a phrase "Are you ready?" and a start button which will run the quiz.
* This is to give the user a chance to prepare to take the quiz, to take a mental breath before diving in.

## Quiz Questions Screen - Core of the Application

* This is the heart of the game. The user will be asked to answer 10 questions no matter which difficulty is chosen, which was determined in a previous screen.
* The pool of questions is randomly chosen from a list of questions grouped by question difficulty in the questions.js file.
* Each question is a multiple choice question with four possible answers.
* Each of the answer boxes are also randomly displayed, to challenge the user and prevent memorisation of the answers if the quiz is played a second time.
* Once a question is on the screen, unanswered, the next button functionality is disabled so as to prevent the user from skipping questions and the timer starts.
* Once the timer reaches 5 seconds it will turn a gold colour and if the audio is playing countdown the 5 secounds with an audible sound effect.
* If the user answers a question correctly, a 'correct' sound will be played and the correct answer will highlight in green. The timer will pause and the user will receive points determined by the quiz difficulty chosen. 
* If the user answers a question incorrectly, an 'incorrect' sound will play. The user's answer will highlight in red and the correct answer will highlight in green. The user will not score any points and depending on the difficulty chosen, may be deducted points.
* If the user fails to answer the question within the allotted time, the 'incorrect sound will play', the right answer will highlight in green and the incorrect answers will highlight in red. The user also may be deducted points depending on the quiz difficulty chosen.
* Once a user answers the question or the timer runs out, the answer button functionality is disabled so as to prevent re-answering and the next button functionality is enabled again.

## Results Section

* When the user has looped through ten questions, they will then be automatically brought to the result's screen, which will display the user's score and how many questions out of 10 they got correct.
* There is an input field, a Save score button and a Home Button.
* The input field cannot be submitted empty and upon clicking the save button the user will be notified that they must enter a username to save their score. 
* They also have the option to skip this step and navigate straight to the home screen by clicking the home button.
* Once the user enters a username and clicks save, they are then brought to the high scores screen.

## High Scores Screen

* The High Scores screen can be navigated in two ways. Firstly through the homepage, and the highscores button. And secondly by playing the quiz and saving your score.
* The high scores are stored using local storage and are sorted in descending order and cut off at the first 5 high scores, with the username entered displayed alongside the score.
* The incentive of this feature is to encourage users to beat their previous scores, try the quiz again, play different difficulties and try and beat the timer.
* From the high scores screen, the user can navigate back to the home screen via the home button.

## Rule Screen

* The rules page is navigated to via the home screen.
* This page has very little interactivity, with just a home button bringing you back to the home page.
* This page is to give the user further understanding of the different question difficulties and their unique features.

## Timer

* The timer adds another dynamic layer to the quiz.
* The time given is dependent on the level difficulty chosen (20s, 15s and 10s).
* On the hard difficulty, the time left on the time countdown is added to the users score if they get an answer right, bringing in the users speed into the quiz.
* Once the timer reaches 5 seconds it visibly turns a gold colour, and if the user's sound is on, it starts a 'ticking countdown effect' until 0, warning the user that their time is nearly up.

## Sound

* Sound is muted by default but the user has the option to toggle it on via the sound button on the info bar.
* It gives the user additional feedback as they navigate the quiz.
* Background music really draws the user into the experience.
* There are sound effects for the button clicks, as well as for the correct and wrong answers.
* The timer also countdowns at 5 secounds with a sound effect.
* The user has the ability to toggle the sound on and off as many times as they wish as they navigate the quiz.

## Score

* The score is visibly seen in the top right corner of the info bar of the quiz application.
* It provides an incentive to the user to keep playing the quiz and challenging themselves by trying to beat their last score.
* By providing different scores for different levels of difficulty, as well as implementing unpredictable elements such as adding the time left to the score and deducting points for wrong answers keeps scoring inconsistent in terms of the total score, encouraging users to challenge themselves. 

## Current Question Display

* This feature provides the user with a clear indication of what question number they are on out of the 10.

[Back to top](<#contents>)

# Future Features

## Different Sections

* Including questions targeted at certain books only. Having question pools and sections dedicated only to Book 1, and another question pool dedicated to Book 2 etc. 

## A Harder Difficulty/End Game Content

* Have a level that creates a question index from the entire question pool, but if the user get's one question wrong, their score is saved at that point and they have to start from the beginning again, but the question pool has been randomly shuffled so they wont start with the first question. They wont be limited to just 10 questions but will have the chance to go through all the questions if they can get them all correct. This type of functionality offers long term usability, as with dedicated question pools and question numbers answered, the score can only go so high as the 10 questions right can give you. 

## Global Highscores

* Instead of saving the high scores locally, saving the scores on a global level will raise the level of engagement with the quiz application, as users could compete against other people qhile accessing the application from different devices.

[Back to top](<#contents>)

# Technologies Used

* HTML5 - Delivers the structure and content for the site.
* CSS3 - Provides the styling for the site
* Javascript -Provides functionality to the site
* [Adobe XD](https://www.adobe.com/ie/products/xd.html) - Used to create wireframes for the website
* [Adobe Lightroom](https://www.adobe.com/ie/products/photoshop-lightroom.html) - Used to optimise and resize images for screen.
* [Tiny PNG](https://tinypng.com/) - Used to further compress optimised images.
* Google Chrome DevTools - Used to debug and test responsiveness of the site
* Gitpod - Used to develop the website.
* GitBash - Terminal used to push changes to the GitHub repository.
* Github - Used to host and deploy the website.

[Back to top](<#contents>)

# Testing

## Code Validation

The Harry Potter Book Quiz has been tested via W3C HTML validate and W3C CSS validator. There were a few minor errors that came up for the HTML pages which were immediately corrected and documented down below in (<#bugs-fixed>)

## Lighthouse Testing

## Accessibility Testing

## Responsive Testing

## Manual Testing

## Bugs Fixed
https://stackoverflow.com/questions/63421963/on-click-get-button-values-from-array-javascript

[Back to top](<#contents>)

# Deployment

The website was deployed to GitHub pages via the following methods:

1. Navigate to the Settings tab in the GitHub repository for the project.
2. On the left hand side, scroll down to the pages tab.
3. Under the Source tab, choose the branch called Main and in the dropdown beside it select the folder called Root.
4. Click save.
5. The page automatically displays the deployed link at the top once save is clicked.
6. It can take up to 5 minutes to deploy.

[Back to top](<#contents>)

# Credits

* [Hogwarts Crest image](https://commons.wikimedia.org/wiki/File:Hogwarts-Crest.png)
*[3D CSS effect in h1](https://codepen.io/ryandsouza13/pen/yEBJQV)
https://www.sitepoint.com/simple-javascript-quiz/
https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
https://www.youtube.com/watch?v=riDzcEQbX6k&t=1419s&ab_channel=WebDevSimplified
https://stackoverflow.com/questions/54753424/how-to-keep-score-for-questions-answered-correct-and-deduct-points-for-questions
https://www.youtube.com/watch?v=jfOv18lCMmw&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=9&ab_channel=JamesQQuick
https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
https://www.youtube.com/watch?v=eHn8eF0nwD0&ab_channel=KenezNonwar
https://stackoverflow.com/questions/37115491/how-to-set-volume-of-audio-object
https://stackoverflow.com/questions/13610638/loop-audio-with-javascript
https://www.zapsplat.com/
https://stackoverflow.com/questions/14718561/how-to-check-if-a-number-is-between-two-values

[Back to top](<#contents>)

# Acknowledgements

[Back to top](<#contents>)
