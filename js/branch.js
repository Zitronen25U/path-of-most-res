'use strict';
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

function Photos(name, branch, fileExtensions = 'jpg') {
  this.name = name;
  this.src = `img/picturegamephotos/${name}.${fileExtensions}`;
  this.clicks = 0;
  this.branch = branch;
  allPhotos.push(this);
}

// let army = localStorage.getItem('army');
// let marines = localStorage.getItem('marines');
// let navy = localStorage.getItem('navy');
// let airforce = localStorage.getItem('airforce');

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

// Timer reference: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById('countdown').innerHTML = 'HURRY UP!';
  } else {
    document.getElementById('countdown').innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);

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
    document.getElementById('btn').style.display = 'block';
    imageOne.removeEventListener('click', handleClick);
    imageTwo.removeEventListener('click', handleClick);
    imageThree.removeEventListener('click', handleClick);
    imageFour.removeEventListener('click', handleClick);
    localStorage.setItem('army', armyClick);
    localStorage.setItem('marines', marineClick);
    localStorage.setItem('navy', navyClick);
    localStorage.setItem('airforce', airforceClick);
  } else {
    renderedPhotos();
  }
  let finalClickCount = armyClick;

  if (totalClicks >= 5) {
    if (armyClick >= marineClick || armyClick >= airforceClick || armyClick >= navyClick) {
      localStorage.setItem('clickTotal', 'isArmy');
    }
    if (marineClick > finalClickCount) {
      finalClickCount = marineClick;
      localStorage.setItem('clickTotal', 'isMarines');
    }
    if (navyClick > finalClickCount) {
      finalClickCount = navyClick;
      localStorage.setItem('clickTotal', 'isNavy');
    }
    if (airforceClick > finalClickCount) {
      finalClickCount = airforceClick;
      localStorage.setItem('clickTotal', 'isAirforce');
    }
  }

}

// excutable code
renderedPhotos();

// event listener
imageOne.addEventListener('click', handleClick);
imageTwo.addEventListener('click', handleClick);
imageThree.addEventListener('click', handleClick);
imageFour.addEventListener('click', handleClick);

let nextPage = document.getElementById('btn');
nextPage.addEventListener('click', handleNextClick);

function handleNextClick(event){
  document.getElementById('occupation').style.display = 'block';
  document.getElementById('branch').style.display = 'none';
  document.getElementById('countdown').style.display = 'none';
  occupation();
}
