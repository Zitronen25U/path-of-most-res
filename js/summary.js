"use strict";

//Global Variables
let allBranchesPFT = [];

// Constructor Function for Military Physical Fitness Test Requirements
function PTTest(branch, pushups, run, abs, extraEvent) {
  this.branch = branch;
  this.pushups = pushups;
  this.run = run;
  this.abs = abs;
  this.extraEvent = extraEvent;
  allBranchesPFT.push(this);
}

// Created 4 new instances off the constructor function for each branch
let armyPFT = new PTTest(
  "Army",
  "Pushups: (time: 2 minutes, min: 20, max: 77)",
  "Run: (distance: 2 miles, min: 22:48, max: 13:18)",
  "Situps: (time: 2 minutes, min: 35, max: 82)",
  "n/a"
);

let marinesPFT = new PTTest(
  "Marine Corps",
  "Pushups: (time: 2 minutes, min: 20, max: 84)",
  "Run: (distance: 3 miles, min: 33:00, max: 18:00)",
  "Abdominal Crunches: (time: 2 minutes, min: 40, max: 115)",
  "Pullups: (time: no limit, min: 5, max: 23)"
);

let navyPFT = new PTTest(
  "Navy",
  "Pushups: (time: 2 minutes, min: 20, max: 92)",
  "Run: (distance: 1.5 miles, min: 12:15, max: 8:15)",
  "Forearm Plank: (time: 2 minutes, min: 1:20, max: 3:40)",
  "Row: (distance: 2km, min: 9:10, max: 7:00)"
);

let airForcePFT = new PTTest(
  "AirForce",
  "Pushups: (time: 1 minute, min: 45, max: 75)",
  "Run: (distance: 2 miles, min: 11:57, max: 8:08)",
  "Situps: (time: 1 minute, min: 50, max: 80)",
  "Pullups: (time: no limit, min: 0, max: 10)"
);

// Create a function to append list items (pt workouts) to the Workout Prep list
function addPFTStandards() {
  let ul = document.getElementById("workoutchart");
  for (let i = 0; i < allBranchesPFT.length; i++) {
    if (allBranchesPFT[i].branch === "AirForce") {
      //Change AirForce to userBranch
      for (let j = 0; j < Object.values(allBranchesPFT[i]).length; j++) {
        let li = document.createElement("li");
        li.textContent = Object.values(allBranchesPFT[i])[j];
        ul.appendChild(li);
      }
    }
  }
}

addPFTStandards();


function addOccupationPicture() {
  let p = document.getElementById('occupationphotos')
  //NEED VARIABLE SET TO userOccupation!
  // let img = `<img src="img/occupation/${userOccupation}.jpg">`
  let img = `<img src="img/occupation/logistics.jpg">`
  p.innerHTML = img;
}

addOccupationPicture();

let aviationDescription = "Military aviation comprises military aircraft and other flying machines for the purposes of conducting or enabling aerial warfare, including national airlift (air cargo) capacity to provide logistical supply to forces stationed in a war theater or along a front. Airpower includes the national means of conducting such warfare, including the intersection of transport and warcraft. Military aircraft include bombers, fighters, transports, trainer aircraft, and reconnaissance aircraft."

let combatArmsDescription = "Combat arms (or fighting arms in non-American parlance) is a collective name for troops within national armed forces which participate in direct tactical ground combat. In general they include units that carry or employ a weapon system, such as infantry, cavalry, and artillery units. The use of multiple combat arms in mutually supporting ways is known as combined arms."

let logisticsDescription = "Military logistics is the discipline of planning and carrying out the movement, supply, and maintenance of military forces. In its most comprehensive sense, it is those aspects or military operations that deal with Design, development, acquisition, storage, distribution, maintenance, evacuation, and disposition of material, Transport of personnel, Acquisition or construction, maintenance, operation, and disposition of facilities, Acquisition or furnishing of services, Medical and health service support."

let medicalDescription = "A medical specialty, specifically a branch of occupational medicine attending to the medical risks and needs (both preventive and interventional) of soldiers, sailors and other service members. This disparate arena has historically involved the prevention and treatment of infectious diseases (especially tropical diseases), and, in the 20th Century, the ergonomics and health effects of operating military-specific machines and equipment such as submarines, tanks, helicopters and airplanes."

let specialForcesDescription = "Military activities conducted by specially designated, organized, trained, and equipped forces, manned with selected personnel, using unconventional tactics, techniques, and modes of employment"

let allOccupationDescriptions = [aviationDescription, combatArmsDescription, logisticsDescription, medicalDescription, specialForcesDescription]