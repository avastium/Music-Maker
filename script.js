const boxes = document.getElementsByClassName('box');
const getSoundName = (str) => str.substring(0, str.length - 2);
const updateIntervalValue = (n) => document.getElementById('intervalValue').innerHTML = n;
const hideArrows = () => {
  for (let i = 0; i < 10; i++) {
    document.getElementById(`arrow${i}`).style.display = 'none';
  }
}

let sounds = new Array();
for (let i = 0; i < 10; i++) sounds.push(new Audio('sounds/kick.wav'));
for (let i = 0; i < 10; i++) sounds.push(new Audio('sounds/clap.wav'));
for (let i = 0; i < 10; i++) sounds.push(new Audio('sounds/hat.wav'));
for (let i = 0; i < 10; i++) sounds.push(new Audio('sounds/snare.wav'));

let intervalID;

function clearArea() {
  let boxesAmount = 40;
  for (let i = 0; i < boxesAmount; i++) {
    switch (getSoundName(boxes[i].id)) {
      case 'kick': {
        if (boxes[i].classList.contains('orange')) boxes[i].classList.remove('orange');
        break;
      }
      case 'clap': {
        if (boxes[i].classList.contains('yellowgreen')) boxes[i].classList.remove('yellowgreen');
        break;
      }
      case 'hat': {
        if (boxes[i].classList.contains('skyblue')) boxes[i].classList.remove('skyblue');
        break;
      }
      case 'snare': {
        if (boxes[i].classList.contains('magenta')) boxes[i].classList.remove('magenta');
        break;
      }
    }
  }
}

function startPlay() {
  stopPlay();
  let i = 0;
  intervalID = setInterval(() => {
    hideArrows();
    document.getElementById(`arrow${i}`).style.display = 'block';
    if (boxes[i].classList.contains('orange')) sounds[i].play();
    if (boxes[i+10].classList.contains('yellowgreen')) sounds[i + 10].play();
    if (boxes[i+20].classList.contains('skyblue')) sounds[i + 20].play();
    if (boxes[i+30].classList.contains('magenta')) sounds[i + 30].play();
    if (i == 9) i = 0;
    else i++;
  }, document.getElementById('intervalTime').value);
}

function stopPlay() {
  hideArrows();
  for (let i = 0; i < sounds.length; i++) {
    sounds[i].pause();
  }
  clearInterval(intervalID);
}

function switchColor(id) {
  let box = document.getElementById(id);
  switch (getSoundName(id)) {
    case 'kick': {
      if (box.classList.contains('orange')) return box.classList.remove('orange');
      else return box.classList.add('orange');
    }
    case 'clap': {
      if (box.classList.contains('yellowgreen')) return box.classList.remove('yellowgreen');
      else return box.classList.add('yellowgreen');
    }
    case 'hat': {
      if (box.classList.contains('skyblue')) return box.classList.remove('skyblue');
      else return box.classList.add('skyblue');
    }
    case 'snare': {
      if (box.classList.contains('magenta')) return box.classList.remove('magenta');
      else return box.classList.add('magenta');
    }
  }
}