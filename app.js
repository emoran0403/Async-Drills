/**
 * *Timing Out
 *
 *
 *? Create a function that takes a string message as an argument, and logs that message to the console
 *? Now call your function with a message
 *? Use setTimeout to call your function again, but with a different message and after 2 seconds
 *? Create a new function called getWords that will attempt to do the following using several setTimeout calls:
 *? Log a word instantly
 *? After 3 seconds, log another word
 *? 2 seconds after that, log a third word
 *? Finally 1 second after the third word, log a final word
 */

function myFunction(string) {
  console.log(`The message is: "${string}"`);
}

myFunction("message!");

let myTimeout = setTimeout(() => {
  let message = "message 2";
  myFunction(message);
}, 2000);

/******************************   Timeouts   ******************************/

function getWords(string) {
  console.log(string);
}

let mySecondTimeout = setTimeout(() => {
  let word1 = "word one";
  getWords(word1);
}, 0);

let myThirdTimeout = setTimeout(() => {
  let word2 = "word two";
  getWords(word2);
}, 3000);

let myFourthTimeout = setTimeout(() => {
  let word3 = "word three";
  getWords(word3);
}, 5000);

let myFifthTimeout = setTimeout(() => {
  let word4 = "word four";
  getWords(word4);
}, 6000);

/**
 * *Callbacks and Recursion
 *
 *? Create a function called done that logs Job's done! to the console
 *
 *? Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
 *? The goal of this function will be to log a "countdown" from the number passed in as an argument, delayed by 1 second each time, and when it gets to 1, it should execute the callback argument
 *? Hint: You'll need one setTimeout for this to work, an if/else statement, and NO for loop for this to work
 *? Super Hint: You'll need to call countdown within itself, a concept called recursion
 *? Mega Hint: There's a YouTube vid showing the concept off
 *? Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function and see if it works
 *
 */

function doneFunction() {
  console.log(`Job's Done!`);
}

function countdown(num, callback) {
  setTimeout(() => {
    if (num > 0) {
      console.log(num);
      countdown(num - 1, callback);
    } else {
      callback();
    }
  }, 1000);
}

countdown(5, doneFunction);
