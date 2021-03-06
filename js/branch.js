'use strict';

// global variables
// myContainer = document.getElementById('submit');
let allQuestions = [];
let q1 = document.getElementById('question1');
let q2 = document.getElementById('question2');
let q3 = document.getElementById('question3');
let q4 = document.getElementById('question4');

// constructors
function Question(question1, question2, question3, question4, question5) {
  this.question1 = question1;
  this.question2 = question2;
  this.question3 = question3;
  this.question4 = question4;
  this.question5 = question5;
  allQuestions.push(this);
}

let combatArmsQuestions = new Question('Do you enjoy action?', 'Do you like to work with different weapon systems?', 'Do you like physical fitness?', 'Do you like to be a leader?', 'Do you like the idea of doing different types of activities such as jumping out of planes, backpacking, or other strenuous activities?');

let aviationQuestions = new Question('Do you like the idea of flying in planes or helicopters?', 'Do you like the idea of working on airplanes or helicopters?', 'Do you like the idea of working the operating the weapon systems of a helicopter or airplane?', 'Do you like the idea of being an air traffic controller?', 'Do you like the idea of flying cargo?');

let medicalQuestions = new Question('Do you like the idea of saving lives?', 'Do you like the idea of working in a hospital?', 'Do you like the idea of working with a dentist?', 'Do you like the idea of working as a pharmacist?', 'Do you like the idea of working as a physical therapist?');

let specialForcesQuestions = new Question('Do you consider yourself "elite"?', 'Do you enjoy pushing yourself to your limits?', 'Do you like the idea of working with specialized teams to accomplish tasks that no one else can?', 'Do you like the idea of training foreign entities to defend themselves against the evils of the world?', 'Do you like the idea of testing the newest tactics, technologies, or equipment?');


// function getRandomQuestionOne() {
//   return Math.floor(Math.random() * allQuestions.length);
// }

function handleSubmit(event){
  if ()
}

function renderQuestions() {
  for (let i = 0; i < allQuestions.length; i++) {
    q1.textContent = allQuestions[0].question1;
    q2.textContent = allQuestions[1].question1;
    q3.textContent = allQuestions[2].question1;
    q4.textContent = allQuestions[3].question1;
  }
}

renderQuestions();
