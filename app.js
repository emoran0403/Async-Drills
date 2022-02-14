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
