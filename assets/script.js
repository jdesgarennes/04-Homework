
var questionsConainer = document.querySelector("#questionsBox");
var BeginGameButton = document.querySelector("start");


// Creste a array of objexts that contain all possible questions with awnser Keys.
var quizquestions = [
    {
        question: "Question ONE: What Does HTML stand for,",
        answers: ["A: How To MarkUp Language","B: Hypertext MarkUP Language", "C: Hold languge", "D: There is not meaning"],
        correctAnswer: "A: How To MarkUp Language",
    },
    {
        question: "Question TWO: What is javaScript",
        answers: ["A: A way of creating dynamically updating content for web pages.", "B: A great and lost secret coffee recipee.", "C: A compiled program language that is similar to c","D: A microsoft word feature "],
        correctAnswer: "A: A way of creating dynamically updating content for web pages.",
    },
    {
        question: "Question THREE: What is the purpose of creating functions?",
        answers: ["A: To make code more difficult.", "B: To make life easier by not repeting long segments of code", "C: To make loops", "D: To run faster"],
        correctAnswer: "B: To make life easier by not repeting long segments of code",
    },
];



console.log(quizquestions[1].question);



var curentQuestion =0;

function beginGame () {
var questions = quizquestions[curentQuestion];
var qTitle = document.createElement("h1");
qTitle.textContent= questions.question;
questionsConainer.appendChild(qTitle
 


}




document.addEventListener("click",beginGame);