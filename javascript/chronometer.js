class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId = null;
  }

  start() {
    this.intervalId=setInterval(()=>{
      
      this.currentTime+=0.01;
      let minutesTwoDigit=this.computeTwoDigitNumber(this.getMinutes());
      let secondsTwoDigit=this.computeTwoDigitNumber(this.getSeconds());
      let milliSecondsTwoDigit=this.computeTwoDigitNumber(this.getMilliSeconds());
      printTime(minutesTwoDigit,secondsTwoDigit,milliSecondsTwoDigit);
    },10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  getMilliSeconds() {
    let milliSecondsToTwoDecimals= Math.floor((this.currentTime%1*100));
    return milliSecondsToTwoDecimals;
  }

  computeTwoDigitNumber(value) {
    return (value<10) ? "0"+value: String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;

  }

  split() {
    let minutes= this.computeTwoDigitNumber(this.getMinutes());
    let seconds= this.computeTwoDigitNumber(this.getSeconds());
    let milliSeconds= this.computeTwoDigitNumber(this.getMilliSeconds());

    return minutes+":"+seconds+":"+milliSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}