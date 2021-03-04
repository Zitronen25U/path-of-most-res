'use strict';

//Global Variables
let allBranchesPFT = [];

// Constructor Function for Military Physical Fitness Test Requirements
function PTTest (branch, pushups, run, abs, extraEvent) {
  this.branch = branch;
  this.pushups = pushups;
  this.run = run;
  this.abs = abs;
  this.extraEvent = extraEvent;
  allBranchesPFT.push(this);
}

// Created 4 new instances off the constructor function for each branch
// Tested all the new instances and they work properly


let armyPFT = new PTTest(
  "Army",
  "Pushups: (time: 2 minutes, min: 20, max: 77)", 
  "Run: (distance: 2 miles, min: 22:48, max: 13:18)",
  "Situps: (time: 2 minutes, min: 35, max: 82)",
  "n/a"
)

let marinesPFT = new PTTest(
  "Marine Corps",
  "Pushups: (time: 2 minutes, min: 20, max: 84)",
  "Run: (distance: 3 miles, min: 33:00, max: 18:00)",
  "Abdominal Crunches: (time: 2 minutes, min: 40, max: 115)",
  "Pullups: (time: no limit, min: 5, max: 23)"
)

let navyPFT = new PTTest(
  "Navy",
  "Pushups: (time: 2 minutes, min: 20, max: 92)", 
  "Run: (distance: 1.5 miles, min: 12:15, max: 8:15)",
  "Forearm Plank: (time: 2 minutes, min: 1:20, max: 3:40)",
  "Row: (distance: 2km, min: 9:10, max: 7:00)"
)

let airForcePFT = new PTTest(
  "AirForce",
  "Pushups: (time: 1 minute, min: 45, max: 75)", 
  "Run: (distance: 2 miles, min: 11:57, max: 8:08)",
  "Situps: (time: 1 minute, min: 50, max: 80)",
  "Pullups: (time: no limit, min: 0, max: 10)",
)

console.log(allBranchesPFT);


// Create a function to append list items (pt workouts) to the Workout Prep list
// function addPFTStandards () {
//   for (let i = 0; i < allBranchesPFT.length; i++) {
    
//   }
// }

// let li = document.createElement('li');


// console.log(allBranchesPFT.length);
