var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your Name? ")
console.log("Hello "+userName+", Welcome to my football quiz.")
console.log("Try to answer the following questions to test your football Knowledge.")
console.log()
console.log("Write the option you think is right.")
console.log()

score=0

function quiz(question,optiona,optionb,optionc,answer){
  console.log(question)
  console.log("a:"+optiona)
  console.log("b:"+optionb)
  console.log("c:"+optionc)
  console.log()
  var userAnswer = readlineSync.question()
  
  if (userAnswer === answer){
    score=score+1
    console.log("Option "+userAnswer + " is correct answer!!")
    console.log("+1 to your score")}
  else {
    console.log("Option "+userAnswer+ " is the wrong answer!")
    console.log("correct answer is option "+ answer+".")
  }  

console.log()
  
}

var question1 = {
  question: "Which country has won the maximum number of world cups?",
  optiona:"Germany",
  optionb:"Brazil",
  optionc:"Italy",
  answer:"b" 
}
var question2 = {
  question: "Which football player has the maximum numbers of Ballon d'or?",
  optiona:"Messi",
  optionb:"Ronaldo",
  optionc:"Platini",
  answer:"a" 
}
var question3 = {
  question: "Which player has scored the maximum goals for club and country?",
  optiona:"Ronaldo",
  optionb:"Pele",
  optionc:"Messi",
  answer:"a" 
}
var question4 = {
  question: "Which country has won the maximum number of Champions League?",
  optiona:"Real Madrid",
  optionb:"Liverpool",
  optionc:"AC Milan",
  answer:"a" 
}
var question5 = {
  question: "Which country has played the maximum number of world cup finals?",
  optiona:"Brazil",
  optionb:"Italy",
  optionc:"Germany",
  answer:"c" 
}
questionBank=[question1,question2,question3,question4,question5]

for (var i=0; i<5; i=i+1){
  quiz(questionBank[i].question,questionBank[i].optiona,questionBank[i].optionb,questionBank[i].optionc,questionBank[i].answer)
}

console.log( "Your final score is "+score+ " out of 5")
