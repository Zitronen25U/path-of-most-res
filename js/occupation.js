'use strict';

// global variables
let allQuestions = [];
let branchImages = [];
let q1 = document.getElementById('question1');
let q2 = document.getElementById('question2');
let q3 = document.getElementById('question3');
let q4 = document.getElementById('question4');
let combatArmsCounter = 0;
let aviationCounter = 0;
let medicalCounter = 0;
let specialForcesCounter = 0;

function occupation() {
  let combatArmsDescription =
    [{
      branch: 'combatarms',
      description: "Combat arms (or fighting arms in non-American parlance) is a collective name for troops within national armed forces which participate in direct tactical ground combat. In general they include units that carry or employ a weapon system, such as infantry, cavalry, and artillery units. The use of multiple combat arms in mutually supporting ways is known as combined arms.",
      occupation: "Combat Arms"
    }];

  let aviationDescription =
    [{
      branch: 'aviation',
      description: "Military aviation comprises military aircraft and other flying machines for the purposes of conducting or enabling aerial warfare, including national airlift (air cargo) capacity to provide logistical supply to forces stationed in a war theater or along a front. Airpower includes the national means of conducting such warfare, including the intersection of transport and warcraft. Military aircraft include bombers, fighters, transports, trainer aircraft, and reconnaissance aircraft.",
      occupation: 'Aviation'
    }];

  let logisticsDescription =
    [{
      branch: 'logistics',
      description: "Military logistics is the discipline of planning and carrying out the movement, supply, and maintenance of military forces. In its most comprehensive sense, it is those aspects or military operations that deal with Design, development, acquisition, storage, distribution, maintenance, evacuation, and disposition of material, Transport of personnel, Acquisition or construction, maintenance, operation, and disposition of facilities, Acquisition or furnishing of services, Medical and health service support.",
      occupation: "Logistics"
    }];

  let medicalDescription =
    [{
      branch: 'medical',
      description: "A medical specialty, specifically a branch of occupational medicine attending to the medical risks and needs (both preventive and interventional) of soldiers, sailors and other service members. This disparate arena has historically involved the prevention and treatment of infectious diseases (especially tropical diseases), and, in the 20th Century, the ergonomics and health effects of operating military-specific machines and equipment such as submarines, tanks, helicopters and airplanes.",
      occupation: 'Medical'
    }];

  let specialForcesDescription =
    [{
      branch: 'specialforces',
      description: "Military activities conducted by specially designated, organized, trained, and equipped forces, manned with selected personnel, using unconventional tactics, techniques, and modes of employment",
      occupation: 'Special Forces'
    }];

  console.log(specialForcesDescription);

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


  var retrieveResults = localStorage.getItem('branch');
  let parsedResults = JSON.parse(retrieveResults);

  function branchPicture() {
    if (parsedResults === 'army');
    document.getElementById('branchImage');

  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentQuestionIndex <= 5) {
      renderQuestions(`question${currentQuestionIndex}`);
      currentQuestionIndex++;
      event.target.reset();
    } else {
      let branchLocalStorage = localStorage.getItem('clickTotal');
      if (branchLocalStorage === 'isArmy') {
        document.getElementById('branchDisplay').textContent = 'Your Branch Should be the Army!';
        document.getElementById('branchImage').setAttribute('src', 'img/branches/Army.jpg');

      }
      if (branchLocalStorage === 'isMarines') {
        document.getElementById('branchDisplay').textContent = 'Your Branch Should be the Marines!';
        document.getElementById('branchImage').setAttribute('src', 'img/branches/marine.jpg');
      }
      if (branchLocalStorage === 'isNavy') {
        document.getElementById('branchDisplay').textContent = 'Your Branch Should be the Navy!';
        document.getElementById('branchImage').setAttribute('src', 'img/branches/navy.png');
      }

      if (branchLocalStorage === 'isAirforce') {
        document.getElementById('branchDisplay').textContent = 'Your Branch Should be the Airforce!';
        document.getElementById('branchImage').setAttribute('src', 'img/branches/airforce.jpg');
      }

      let largestNumber = combatArmsCounter;
      if (largestNumber > aviationCounter) {
        // console.log('the job is combat arms');
        let JsonString = JSON.stringify(combatArmsDescription);
        localStorage.setItem('userOccupation', JsonString);
      }
      if (largestNumber < aviationCounter) {
        largestNumber = aviationCounter;
        // console.log('the job is aviation');
        let JsonString = JSON.stringify(aviationDescription);
        localStorage.setItem('userOccupation', JsonString);
      }
      if (largestNumber < medicalCounter) {
        largestNumber = medicalCounter;
        // console.log('the job is a medic');
        let JsonString = JSON.stringify(medicalDescription);
        localStorage.setItem('userOccupation', JsonString);
      }
      if (largestNumber < specialForcesCounter) {
        largestNumber = specialForcesCounter;
        // console.log('the job is SF');
        let JsonString = JSON.stringify(specialForcesDescription);
        localStorage.setItem('userOccupation', JsonString);
      }

      document.getElementById('occupation').style.display = 'none';
      document.getElementById('summary').style.display = 'block';
      renderAll();
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
    } else {
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