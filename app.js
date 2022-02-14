/**
 * *Timing Out
 * 
 * 
 *? Create a function that takes a string message as an argument, and logs that message to the console
 *? Now call your function with a message
 * Use setTimeout to call your function again, but with a different message and after 2 seconds
 * Create a new function called getWords that will attempt to do the following using several setTimeout calls:
Log a word instantly
After 3 seconds, log another word
2 seconds after that, log a third word
Finally 1 second after the third word, log a final word
 */

function myFunction(string) {
  console.log(`The message is: "${string}"`);
}

myFunction("message!");

let myTimeout = setTimeout((message) => {
  myFunction(message);
}, 2000);
