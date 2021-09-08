
var questionsConainer = document.querySelector("#questions-box");
var BeginGameButton = document.querySelector("#start");
var restartGameButton = document.querySelector('#restart');
var resultsContainer = document.querySelector('#result-box');
var score =0;
var timeLeft=10; 
var removeTime = 0;
var addTime = 10;
var timeClock =document.querySelector('#timer');

// Create a array of objexts that contain all possible questions with awnser Keys.
var quizquestions = [
    {
        question: "Question ONE: What Does HTML stand for?",
        answers: ["A: How To MarkUp Language. ","B: Hypertext MarkUP Language. ", "C: Hold languge. ", "D: There is no meaning. "],
        correctAnswer: "B: Hypertext MarkUP Language. ",
    },
    {
        question: "Question TWO: What is javaScript?",
        answers: ["A: A way of creating dynamically updating content for web pages.", "B: A great and lost secret coffee recipee.", "C: A compiled program language that is similar to c","D: A microsoft word feature "],
        correctAnswer: "A: A way of creating dynamically updating content for web pages.",
    },
    {
        question: "Question THREE: What is the purpose of creating functions?",
        answers: ["A: To make code more difficult.", "B: To make life easier by not repeting long segments of code", "C: To make loops", "D: To run faster"],
        correctAnswer: "B: To make life easier by not repeting long segments of code",
    },
    {
        question: "Question Four: What is the purpose of comments?",
        answers: ["A: To make code more difficult.", "B: To make the program run faster.", "C: To make loops", "D: To make code easier to read."],
        correctAnswer: "D: To make code easier to read.",
    },
    {
        question: "Question FIVE: What does .createElement Do?",
        answers: ["A: Creates faster pages.", "B: Method creates the HTML element specified by tagName.", "C: changes chemestry of page.", "D: This is not a valid method."],
        correctAnswer: "B: Method creates the HTML element specified by tagName.",
    },
    {
        question: "Question SIX: Should you provide a README.MD file in your REPOSITORY?",
        answers: ["A: YES! its helps people understand what your code is doing.", "B: NO! they should be able to just know.", "C: NO", "D: No there is no such thing."],
        correctAnswer: "A: YES! its helps people understand what your code is doing.",
    },
    {
        question: "Question SEVEN: What is the purpose of the commit -m comand?",
        answers: ["A: This is not a valid command.", "B: It is a comment command that show what your commit is about.", "C: It's actuall commit -M not -m", "D: No there is no such thing."],
        correctAnswer: "B: It is a comment command that show what your commit is about.",
    },
    {
        question: "Question EIGHT: What is GIT?",
        answers: ["A: A troll that lives under the bridge.", "B: A grumpy old troll that lives under the bridge.", "C: Linus torvalds maden name.", "D: A free version control system."],
        correctAnswer: "D: A free version control system.",
    },
    {
        question: "Question NINE: What does ls -a do on the cli?",
        answers: ["A: Reveals all the dark secrets of the file system.", "B: Deletes all files that begin with the letter A.", "C: lists file in directory including hidden file and folders.", "D: Works just like ls but does not work."],
        correctAnswer: "C: lists file in directory including hidden file and folders.",
    },
    {
        question: "Question TEN: What does IMMUTABLE mean",
        answers: ["A: Makes answers un readable", "B: Means it cannot be changed", "C: Makes others work more tollerable.", "D: Allows you to chnge values."],
        correctAnswer: "B: Means it cannot be changed",
    },
];


var curentQuestion =0;
// The Begin game function that start the game and validates input.
//restartGameButton.style.display='none';
countdown()
function beginGame () {
// next line clears out text box.    
questionsConainer.innerHTML = "";
resultsContainer.innerHTML = "";

var questions = quizquestions[curentQuestion];
var qTitle = document.createElement("h1");
qTitle.textContent= questions.question;
questionsConainer.appendChild(qTitle);
 // loop to display all questions inarray.
 for (var i = 0; i < questions.answers.length; i++){
    var answersbuttons = document.createElement("button");
    answersbuttons.setAttribute('id','button'+i);
    answersbuttons.setAttribute('class','button-A');
    answersbuttons.textContent = questions.answers[i];
    questionsConainer.appendChild(answersbuttons);
    answersbuttons.textContent = questions.answers[i];
    questionsConainer.appendChild(answersbuttons);
    answersbuttons.addEventListener("click",function(){
        
        
        
        if(questions.correctAnswer=== this.textContent && timeLeft > 1){
            score++;
            BeginGameButton.innerHTML = "NEXT";
            
            resultsContainer.innerHTML = "THAT IS CORRECT! YOU NOW HAVE  "+score +" CORRECT ANSWERS.";
            timeLeft = timeLeft + addTime;
            
            
        } else if(timeLeft <1){
            noTime();
           
            
        } 
        else {
            BeginGameButton.innerHTML = "NEXT";
            resultsContainer.innerHTML = "THAT IS NOT CORRECT!";
            

        }
        
        console.log(timeLeft);
        
        
    })
   
    }
    curentQuestion ++;
   
}

BeginGameButton.addEventListener("click",beginGame);
restartGameButton.addEventListener("click",resetgame);
function noTime(){
    questionsConainer.innerHTML = "";
    BeginGameButton.style.display='none';
    resultsContainer.innerHTML = "YOU RAN OUT OF TIME :( PLEASE TRY AGAIN."; 
}

function resetgame(){
    window.location.reload();
    return;
};
function endGame(){
    questionsConainer.innerHTML = "";
    resultsContainer.innerHTML = "";
    resultsContainer.innerHTML = "You got "+ score +" correct awnsers.";
};

function countdown() {
    
    
    var timeInterval = setInterval(function () {
     
      if (timeLeft > 1) {
        
        timeClock.textContent = timeLeft + ' seconds remaining';
       
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timeClock.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timeClock.textContent = '';
        //endGame()
        //resultsContainer.innerHTML = "YOU RAN OUT OF TIME, PLEASE TRY AGAIN.";
    
        // Use `clearInterval()` to stop the timer

        clearInterval(timeInterval);
        
      }
      return timeLeft;
    }, 1000);
  }