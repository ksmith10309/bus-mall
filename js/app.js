'use strict';

var images = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var imageObjects = [];

function ImageObject(img) {
  this.name = img.split('/')[1].split('.')[0];
  this.path = img;
  this.totalClicks = 0;
  this.timesDisplayed = 0;
}

for (var i=0; i<images.length; i++) {
  imageObjects.push(new ImageObject(images[i]));
}

var newNumbers = [];

function generateRandomNum() {
  var num = Math.floor((Math.random() * 20));
  return num;
}

function generateNumArray() {
  var oldNumbers = newNumbers;
  newNumbers = [];

  var numOne = generateRandomNum();
  while(numOne === oldNumbers[0] || numOne === oldNumbers[1] || numOne === oldNumbers[2]) {
    numOne = generateRandomNum();
  }
  newNumbers.push(numOne);

  var numTwo = generateRandomNum();
  while(numTwo === numOne || numTwo === oldNumbers[0] || numTwo === oldNumbers[1] || numTwo === oldNumbers[2]) {
    numTwo = generateRandomNum();
  }
  newNumbers.push(numTwo);

  var numThree = generateRandomNum();
  while(numThree === numOne || numThree === numTwo || numThree === oldNumbers[0] || numThree === oldNumbers[1] || numThree === oldNumbers[2]) {
    numThree = generateRandomNum();
  }
  newNumbers.push(numThree);
}

var clickCounter = 0;

function generateImages() {
  var mainEl = document.getElementById('main-container');
  mainEl.textContent = '';

  imageObjects[newNumbers[0]].timesDisplayed++;
  var imageEl1 = document.createElement('img');
  imageEl1.setAttribute('src', imageObjects[newNumbers[0]].path);
  imageEl1.addEventListener('click', function() {
    imageObjects[newNumbers[0]].totalClicks++;
    clickCounter++;

    if (clickCounter === 25) {
      displayList();
    } else {
      generateNumArray();
      generateImages();
    }
  });

  imageObjects[newNumbers[1]].timesDisplayed++;
  var imageEl2 = document.createElement('img');
  imageEl2.setAttribute('src', imageObjects[newNumbers[1]].path);
  imageEl2.addEventListener('click', function() {
    imageObjects[newNumbers[1]].totalClicks++;
    clickCounter++;

    if (clickCounter === 25) {
      displayList();
    } else {
      generateNumArray();
      generateImages();
    }
  });

  imageObjects[newNumbers[2]].timesDisplayed++;
  var imageEl3 = document.createElement('img');
  imageEl3.setAttribute('src', imageObjects[newNumbers[2]].path);
  imageEl3.addEventListener('click', function() {
    imageObjects[newNumbers[2]].totalClicks++;
    clickCounter++;

    if (clickCounter === 25) {
      displayList();
    } else {
      generateNumArray();
      generateImages();
    }
  });

  var divEl1 = document.createElement('div');
  divEl1.setAttribute('class', 'img-container');
  divEl1.appendChild(imageEl1);

  var divEl2 = document.createElement('div');
  divEl2.setAttribute('class', 'img-container');
  divEl2.appendChild(imageEl2);

  var divEl3 = document.createElement('div');
  divEl3.setAttribute('class', 'img-container');
  divEl3.appendChild(imageEl3);

  mainEl.appendChild(divEl1);
  mainEl.appendChild(divEl2);
  mainEl.appendChild(divEl3);
}

generateNumArray();
generateImages();

function displayList() {
  var headingEl = document.getElementById('heading');
  headingEl.textContent = 'These are your selections:';

  var mainEl = document.getElementById('main-container');
  mainEl.textContent = '';

  var ulEl = document.createElement('ul');
  for (var i = 0; i < imageObjects.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = imageObjects[i].totalClicks + ' votes for the ' + imageObjects[i].name;
    ulEl.appendChild(liEl);
  }

  mainEl.appendChild(ulEl);
}