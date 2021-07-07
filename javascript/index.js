const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(minutes, seconds) {
  // ... your code goes here
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  minDecElement.innerHTML=minutes[0];
  minUniElement.innerHTML=minutes[1];
}

function printSeconds(seconds) {
  // ... your code goes here
  secDecElement.innerHTML=seconds[0];
  secUniElement.innerHTML=seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")){

    //Changing Texts of buttons
    btnLeftElement.innerText="STOP"
    btnRightElement.innerText="SPLIT"
    chronometer.start();
    
  }

  else{

    //Changing Texts of buttons
    btnLeftElement.innerText="START"
    btnRightElement.innerText="RESET"
    chronometer.stop();

  }

    //Toggling states of buttons
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("reset")){

    chronometer.reset();
    //to reset display
    printTime("00","00");
    //delete splits
    splitsElement.innerHTML="";
  }

  else{
    //to log splits
    let newSplit =document.createElement('li');
    newSplit.innerText=chronometer.split();
    splitsElement.appendChild(newSplit);

  }
});
