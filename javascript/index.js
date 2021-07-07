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

function printTime(minutes, seconds, milliSeconds) {
  // ... your code goes here
  printMinutes(minutes);
  printSeconds(seconds);
  printMilliseconds(milliSeconds);
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

function printMilliseconds(milliSeconds) {
  // ... your code goes here
  console.log(milliSeconds);
  milDecElement.innerHTML=milliSeconds[0];
  milUniElement.innerHTML=milliSeconds[1];
}


function printSplit() {
  
  let newSplit =document.createElement('li');
  newSplit.innerText=chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
    chronometer.reset();
    //to reset display
    printTime("00","00","00");
    //delete splits  
    splitsElement.innerHTML="";
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText="STOP";
}

function setSplitBtn() {
  btnRightElement.innerText="SPLIT";
}

function setStartBtn() {
  btnLeftElement.innerText="START";
}

function setResetBtn() {
  btnRightElement.innerText="RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")){
    //Changing Texts of buttons
    setStopBtn();
    setSplitBtn();
    chronometer.start();
  }

  else{
    //Changing Texts of buttons
    setStartBtn();
    setResetBtn();
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
    clearSplits();
  }

  else{
    printSplit();  
  }
});
