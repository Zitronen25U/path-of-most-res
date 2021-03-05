'use strict';

// var branches = JSON.parse(localStorage.getItem(''))

let totalQuestionsAsked = 25;

armyCounter = i;
marineCounter = j;
afCounter = k;
navyCounter = l;


var ctx = document.getElementById('myChart').getContext('2d');

function NewQuestion(question, job) {
  this.question = question;
  this.job = job;
  this.clicks = clicks;
}

function questionBuilder() {
  new NewQuestion('Do you enjoy action?', 'combatArms');
  new NewQuestion('Do you like to work with different weapon systems?', 'combatArms');
  new NewQuestion('Do you like physical fitness?', 'combatArms');
  new NewQuestion('Do you like to be a leader?', 'combatArms');
  new NewQuestion('Do you like the idea of doing different types of activities such as jumping out of planes, backpacking, or other strenuous activities?', 'combatArms')
  new NewQuestion('Do you like the idea of flying in planes or helicopters?', 'aviation');
  new NewQuestion('Do you like the idea of working on airplanes or helicopters?', 'aviation');
  new NewQuestion('Do you like the idea of working the operating the weapon systems of a helicopter or airplane?', 'aviation');
  new NewQuestion('Do you like the idea of being an air traffic controller?', 'aviation');
  new NewQuestion('Do you like the idea of flying cargo?', 'aviation');
  new NewQuestion('Do you like the idea of saving lives?', 'medical');
  new NewQuestion('Do you like the idea of working in a hospital?', 'medical');
  new NewQuestion('Do you like the idea of working with a dentist?', 'medical');
  new NewQuestion('Do you like the idea of working as a pharmacist?', 'medical');
  new NewQuestion('Do you like the idea of working as a physical therapist?', 'medical');
  new NewQuestion('Do you consider yourself "elite"?', 'specialForces');
  new NewQuestion('Do you enjoy pushing yourself to your limits?', 'specialForces');
  new NewQuestion('Do you like the idea of working with specialized teams to accomplish tasks that no one else can?', 'specialForces');
  new NewQuestion('Do you like the idea of training foreign entities to defend themselves against the evils of the world?', 'specialForces');

  // will do a clicks ++ question counter
}


function renderChart() {

  var myChart = new Chart(ctx, {
    type: 'pie',
    data: armyLocal,
    marineLocal,
    navyLocal,
    afLocal,
    options: options,
  });

  var options = {
    responsive = true,
    title: {
      position = "top",
      text: "Pie Chart",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    }
  }

  var data1 = {
    labels: [],
    datasets: [
      {
        // label, data, backgroundColor
      }
    ]
  }

  var data2 = {
    labels: [],
    datasets: [
      {
        //same as above
      }
    ]
  }
}
