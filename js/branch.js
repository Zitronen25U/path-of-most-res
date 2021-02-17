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


// let army = localStorage.getItem('army');
// let marines = localStorage.getItem('marines');
// let navy = localStorage.getItem('navy');
// let airforce = localStorage.getItem('airforce');

// if (retrievedPhotos) {
//   let parsedProducts = JSON.parse(retrievedPhotos);
//   allPhotos = parsedProducts;
// } else {
new Photos('mopping', 'army');
new Photos('crayolapopsicles', 'marine corps');
new Photos('chair', 'airforce');
new Photos('sub', 'navy');
new Photos('airplane', 'airforce');
new Photos('boatworker', 'navy');
new Photos('flakjacket', 'marine corps');
new Photos('cook', 'army');
new Photos('boat', 'navy');
new Photos('cop', 'airforce');
new Photos('swimming', 'marine corps');
new Photos('helicopter', 'army');
new Photos('boatyard', 'navy');
new Photos('dininghall', 'airforce');
new Photos('hiking', 'marine corps');
new Photos('hr', 'army');
new Photos('mechanic', 'marine corps');
new Photos('refuelingairplane', 'airforce');
new Photos('scubadiver', 'navy');
new Photos('truckdriver', 'army');
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
