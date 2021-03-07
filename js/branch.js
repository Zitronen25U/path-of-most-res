
"use strict";

// global variables
// myContainer = document.getElementById('submit');
let allQuestions = [];
let q1 = document.getElementById("question1");
let q2 = document.getElementById("question2");
let q3 = document.getElementById("question3");
let q4 = document.getElementById("question4");

// constructors
function Question(question1, question2, question3, question4, question5) {
  this.question1 = question1;
  this.question2 = question2;
  this.question3 = question3;
  this.question4 = question4;
  this.question5 = question5;
  allQuestions.push(this);
}

let combatArmsQuestions = new Question(
  "Do you enjoy action?",
  "Do you like to work with different weapon systems?",
  "Do you like physical fitness?",
  "Do you like to be a leader?",
  "Do you like the idea of doing different types of activities such as jumping out of planes, backpacking, or other strenuous activities?"
);

let aviationQuestions = new Question(
  "Do you like the idea of flying in planes or helicopters?",
  "Do you like the idea of working on airplanes or helicopters?",
  "Do you like the idea of working the operating the weapon systems of a helicopter or airplane?",
  "Do you like the idea of being an air traffic controller?",
  "Do you like the idea of flying cargo?"
);

let medicalQuestions = new Question(
  "Do you like the idea of saving lives?",
  "Do you like the idea of working in a hospital?",
  "Do you like the idea of working with a dentist?",
  "Do you like the idea of working as a pharmacist?",
  "Do you like the idea of working as a physical therapist?"
);

let specialForcesQuestions = new Question(
  'Do you consider yourself "elite"?',
  "Do you enjoy pushing yourself to your limits?",
  "Do you like the idea of working with specialized teams to accomplish tasks that no one else can?",
  "Do you like the idea of training foreign entities to defend themselves against the evils of the world?",
  "Do you like the idea of testing the newest tactics, technologies, or equipment?"
);


function renderQuestions() {
  for (let i = 0; i < allQuestions.length; i++) {
    q1.textContent = allQuestions[0].question1;
    q2.textContent = allQuestions[1].question1;
    q3.textContent = allQuestions[2].question1;
    q4.textContent = allQuestions[3].question1;
  }
}

renderQuestions();

console.log(allQuestions)

let totalClicks = 0;
let clicksAllowed = 5;
let marineClick = 0;
let armyClick = 0;
let navyClick = 0;
let airforceClick = 0;
let allPhotos = [];
let imageOne = document.getElementById('imgOne');
let imageTwo = document.getElementById('imgTwo');
let imageThree = document.getElementById('imgThree');
let imageFour = document.getElementById('imgFour');
let myContainer = document.getElementById('branch');

function Photos(name, branch, fileExtensions = 'jpg') {
  this.name = name;
  this.src = `img/picturegamephotos/${name}.${fileExtensions}`;
  this.clicks = 0;
  this.branch = branch;
  allPhotos.push(this);
}


let army = localStorage.getItem('army');
let marines = localStorage.getItem('marines');
let navy = localStorage.getItem('navy');
let airforce = localStorage.getItem('airforce');

// if (retrievedPhotos) {
//   let parsedProducts = JSON.parse(retrievedPhotos);
//   allPhotos = parsedProducts;
// } else {
new Photos('moppingarmy', 'army');
new Photos('crayolapopsiclesmarinecorps', 'marine corps');
new Photos('chairairforce', 'airforce');
new Photos('subnavy', 'navy');
new Photos('airplaneairforce', 'airforce');
new Photos('boatworkernavy', 'navy');
new Photos('flakjacketmarinecorps', 'marine corps');
new Photos('cookarmy', 'army');
new Photos('boatnavy', 'navy');
new Photos('copairforce', 'airforce');
new Photos('swimmingMarineCorps', 'marine corps');
new Photos('helicopterarmy', 'army');
new Photos('boatyardnavy', 'navy');
new Photos('dininghallairforce', 'airforce');
new Photos('hikingmarinecorps', 'marine corps');
new Photos('hrarmy', 'army');
new Photos('mechanicmarinecorps', 'marine corps');
new Photos('refuelingairplaneairforce', 'airforce');
new Photos('scubadivernavy', 'navy');
new Photos('truckdriverArmy', 'army');
// }

function renderedPhotos() {
  let firstProIndex = allPhotos.pop();
  let secondProIndex = allPhotos.pop();
  let threeProIndex = allPhotos.pop();
  let fourProIndex = allPhotos.pop();

  imageOne.src = firstProIndex.src;
  imageOne.title = firstProIndex.name;
  imageOne.branch = firstProIndex.branch;

  imageTwo.src = secondProIndex.src;
  imageTwo.title = secondProIndex.name;
  imageTwo.branch = secondProIndex.branch;

  imageThree.src = threeProIndex.src;
  imageThree.title = threeProIndex.name;
  imageThree.branch = threeProIndex.branch;

  imageFour.src = fourProIndex.src;
  imageFour.title = fourProIndex.name;
  imageFour.branch = fourProIndex.branch;
}


function handleClick(event) {
  console.log(totalClicks, clicksAllowed);
  totalClicks++;
  console.log(event.target.branch);
  let clicked = event.target;

  if (clicked.branch === 'army') {
    armyClick++;
  } else if (clicked.branch === 'marine corps') {
    marineClick++;
  } else if (clicked.branch === 'navy') {
    navyClick++;
  } else if (clicked.branch === 'airforce') {
    airforceClick++;
  }
  if (totalClicks === clicksAllowed) {
    console.log('click no more');
    myContainer.removeEventListener('click', handleClick);
    localStorage.setItem('army', armyClick);
    localStorage.setItem('marines', marineClick);
    localStorage.setItem('navy', navyClick);
    localStorage.setItem('airforce', airforceClick);
    localStorage.setItem('clickTotal', totalClicks);
  }
  if (event.target.title === myContainer) {
    alert('Click on the best image');
  }
  renderedPhotos();
}


myContainer.addEventListener('click', handleClick);
renderedPhotos();


