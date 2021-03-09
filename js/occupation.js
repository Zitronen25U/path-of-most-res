'use strict';

// global variables

function occupation() {
  let allQuestions = [];
  let q1 = document.getElementById('question1');
  let q2 = document.getElementById('question2');
  let q3 = document.getElementById('question3');
  let q4 = document.getElementById('question4');
  let combatArmsCounter = 0;
  let aviationCounter = 0;
  let medicalCounter = 0;
  let specialForcesCounter = 0;



  let myForm = document.getElementById('quiz');
  let currentQuestionIndex = 2;
  let totalRound = 5;

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

  // Renders

  let branchStringPicture = localStorage.getItem('clickTotal');
  console.log(branchStringPicture);


  function handleSubmit(event) {
    event.preventDefault();
    if (currentQuestionIndex <= totalRound) {
      renderQuestions(`question${currentQuestionIndex}`);
      currentQuestionIndex++;
      event.target.reset();
    } else {
      myForm.removeEventListener('submit', handleSubmit);
    }
  }

  function handleChange(event) {
    let value = event.target.value;
    if (event.target.checked) {
      if (value === 'combatArms') {
        combatArmsCounter++;
      } else if (value === 'aviation') {
        aviationCounter++;
      } else if (value === 'medical') {
        medicalCounter++;
      } else if (value === 'specialforces') {
        specialForcesCounter++;
      }
    }
    else {
      if (value === 'combatArms') {
        combatArmsCounter--;
      } else if (value === 'aviation') {
        aviationCounter--;
      } else if (value === 'medical') {
        medicalCounter--;
      } else if (value === 'specialforces') {
        specialForcesCounter--;
      }
    }
    console.log(combatArmsCounter, aviationCounter, medicalCounter, specialForcesCounter);

    if (currentQuestionIndex > 5) {

      let largestNumber = combatArmsCounter;
      if (largestNumber > aviationCounter) {
        console.log('the job is combat arms');
        localStorage.setItem('userOccupation', 'combatArms');
      }
      if (largestNumber < aviationCounter) {
        largestNumber = aviationCounter;
        console.log('the job is aviation');
        localStorage.setItem('userOccupation', 'aviation');
      }
      if (largestNumber < medicalCounter) {
        largestNumber = medicalCounter;
        console.log('the job is a medic');
        localStorage.setItem('userOccupation', 'medical');
      }
      if (largestNumber < specialForcesCounter) {
        largestNumber = specialForcesCounter;
        console.log('the job is SF');
        localStorage.setItem('userOccupation', 'specialForces');
      }
    }
  }

  function renderQuestions(question) {
    q1.textContent = allQuestions[0][question];
    q2.textContent = allQuestions[1][question];
    q3.textContent = allQuestions[2][question];
    q4.textContent = allQuestions[3][question];
  }

  renderQuestions('question1');

  // add event listener
  myForm.addEventListener('submit', handleSubmit);
  myForm.addEventListener('change', handleChange);
}


