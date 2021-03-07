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
