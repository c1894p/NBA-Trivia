# NBA-Trivia
__A trivia game on the National Basketball League__
- There are 10 questions total
- Each time a question is answered correctly 10 points will be added to the score keeper 
- Each time a question is answered incorrectly 5 points will be deducted from the score keeper
- After the last question, click "final score" to show your trivia results
- Click "restart game" to play again.
- No installations neccessary

# Screenshots
![Screen Shot 2021-04-12 at 12 26 00 PM](https://user-images.githubusercontent.com/81186889/114428548-55ab1680-9b8a-11eb-8555-1da54f001db6.png)
![Screen Shot 2021-04-12 at 12 26 15 PM](https://user-images.githubusercontent.com/81186889/114428702-81c69780-9b8a-11eb-9c13-cadee9eab978.png)
![Screen Shot 2021-04-12 at 12 26 32 PM](https://user-images.githubusercontent.com/81186889/114428711-855a1e80-9b8a-11eb-922d-732c323630bc.png)

# Technologies Used
This project is written in HTML, CSS, and vanilla Javascript

# Unsolved problems/Major Hurdles
One major hurdle that I came across was getting the wrong answer audio to play on each incorrect choice. I learned the `play()` function is a one time play so after the first wrong answer is chosen it would not play again for any followng wrong answers or questions. In order to get full funcionality across all wrong answers and for each question, I used the `cloneNode()` function on each audio element. I created a stand alone function with a single parameter to pass in the audio element and to create a clone of the audio node each time the function is called. This allowed the audio node to be cloned and called for each wrong answer chosen until the correct answer is picked and again if the user moved on to another queston.

# User Stories
__MVP Goals__
- As a player, I would like to know if I get the question right so I can move on to the next question
- As a player, I would like to know if I get the question wrong so I can keep trying for the right answer
- As a player, I want the game to be able to identify the correct answer so it can tally the score on a scoreboard
- As a player, I would like to see my final score to see how many questions I got correct
- As a player I would like to be able to restart the game after the game is over
- As a player, I want to be able to be able to learn more about NBA players and have fun!

__Stretch Goals__
- As a player, I want to be able to hear a swish sound every time an answer is correct
- As a player, I want to be able to hear a score buzzer sound every time an answer is incorrect
- As a player, I would like to be able to play NBA trivia against another player
- As a player, I would like to see the high score so I can try and be the player who beat the highest score or get a perfect score
- As a player, I want the game to randomize questions each time the game is reset

# Wireframes
__Home Page__
![Screen Shot 2021-04-12 at 12 31 08 PM](https://user-images.githubusercontent.com/81186889/114429143-06b1b100-9b8b-11eb-9c5d-06c03c3bd924.png)
![Screen Shot 2021-04-12 at 12 31 16 PM](https://user-images.githubusercontent.com/81186889/114429168-0e715580-9b8b-11eb-8a78-cae8c1447299.png)
![Screen Shot 2021-04-12 at 12 31 23 PM](https://user-images.githubusercontent.com/81186889/114429178-103b1900-9b8b-11eb-8e26-4636505e191f.png)
