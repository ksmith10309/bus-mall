'use strict';

var images = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var imageObjects = [];

function ImageObject(img) {
  this.name = img.split('/')[1].split('.')[0];
  this.path = img;
  this.totalClicks = 0;
}

for (var i=0; i<images.length; i++) {
  imageObjects.push(new ImageObject(images[i]));
}

var newNumbers = [];

function generateNum() {
  var num = Math.floor((Math.random() * 20));
  return num;
}

function generateNumArray() {
  var oldNumbers = newNumbers;
  newNumbers = [];

  var numOne = generateNum();
  while(numOne === oldNumbers[0] || numOne === oldNumbers[1] || numOne === oldNumbers[2]) {
    numOne = generateNum();
  }
  newNumbers.push(numOne);

  var numTwo = generateNum();
  while(numTwo === numOne || numTwo === oldNumbers[0] || numTwo === oldNumbers[1] || numTwo === oldNumbers[2]) {
    numTwo = generateNum();
  }
  newNumbers.push(numTwo);

  var numThree = generateNum();
  while(numThree === numOne || numThree === numTwo || numThree === oldNumbers[0] || numThree === oldNumbers[1] || numThree === oldNumbers[2]) {
    numThree = generateNum();
  }
  newNumbers.push(numThree);
}

function generateImages() {
  var imageEl1 = document.createElement('img');
  imageEl1.setAttribute('src', imageObjects[newNumbers[0]].path);
  imageEl1.addEventListener('click', function() {
    imageObjects[newNumbers[0]].totalClicks++;
    generateNumArray();
    generateImages();
  });

  var imageEl2 = document.createElement('img');
  imageEl2.setAttribute('src', imageObjects[newNumbers[1]].path);
  imageEl2.addEventListener('click', function() {
    imageObjects[newNumbers[1]].totalClicks++;
    generateNumArray();
    generateImages();
  });

  var imageEl3 = document.createElement('img');
  imageEl3.setAttribute('src', imageObjects[newNumbers[2]].path);
  imageEl3.addEventListener('click', function() {
    imageObjects[newNumbers[2]].totalClicks++;
    generateNumArray();
    generateImages();
  });

  var mainEl = document.getElementById('main-section');
  mainEl.textContent = '';
  mainEl.appendChild(imageEl1);
  mainEl.appendChild(imageEl2);
  mainEl.appendChild(imageEl3);
}

generateNumArray();
generateImages();
