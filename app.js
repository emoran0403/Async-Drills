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

/******************************   Timing Out   ******************************/

// function myFunction(string) {
//   console.log(`The message is: "${string}"`);
// }

// myFunction("message!");

// let myTimeout = setTimeout(() => {
//   let message = "message 2";
//   myFunction(message);
// }, 2000);

// function getWords(string) {
//   console.log(string);
// }

// let mySecondTimeout = setTimeout(() => {
//   let word1 = "word one";
//   getWords(word1);
// }, 0);

// let myThirdTimeout = setTimeout(() => {
//   let word2 = "word two";
//   getWords(word2);
// }, 3000);

// let myFourthTimeout = setTimeout(() => {
//   let word3 = "word three";
//   getWords(word3);
// }, 5000);

// let myFifthTimeout = setTimeout(() => {
//   let word4 = "word four";
//   getWords(word4);
// }, 6000);

/******************************   Callbacks and Recursion   ******************************/

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
  // this function will log a message
  console.log(`Job's Done!`);
}

function countdown(num, callback) {
  // this function will call itself a number of times based on a provided argument
  setTimeout(() => {
    // timeout is used here to show the delay between the callbacks to the function itself
    //*when num is greater than zero, log num then call the function again, providing num-1 as the argument
    if (num > 0) {
      console.log(num);
      countdown(num - 1, callback);
    } else {
      callback();
    }
  }, 1000); // introduces a 1 second delay
}

countdown(5, doneFunction); // call the countdown function starting with num=5 and finally call doneFunction when it is done

/******************************   Promises Promises   ******************************/

/**
 * *Promises Promises
 *
 *? Create a new global variable called lunchTime with a value of true
 *? Create a new function called orderMeSomeFood that returns a new Promise
 *? Hint: If you're unsure of the correct syntax, check out this CodePen
 *? In the resolver function of the Promise, write logic to check if the lunchTime variable is true
 *? If lunchTime is true, create an object with two properties and values (key/value pairs) of your choice:
 *? lunch: "your favorite lunch"
 *? drink: "your favorite beverage"
 * Resolve the Promise with your object
 * If lunchTime is false, create a variable and set it equal to a new Error that has your own message
 * Hint: Check out this page on how to use a new Error
 * Reject the Promise with your new Error
 * Call your orderMeSomeFood function, chain you .then and don't forget your .catch
 * If the promise within the function resolves, it should then log the object it resolved with
 * Swap lunchTime to false, and then the promise should reject with your custom created error and be logged from you .catch
 * Toggle lunchTime and check out the results of your newly created Promise function. *
 */

let lunchTime = true; // this toggle will let us resolve or reject our promise later

let order = {
  // this is the order that will be logged when our promise is resolved
  lunch: "Pizza, hot and ready",
  drink: "Some nice cold water",
};

function orderMeSomeFood(lunchOrder) {
  // this function returns a promise
  return new Promise((resolve, reject) => {
    //we use the timeout to simulate a delay for the promise
    setTimeout(() => {
      if (lunchTime) {
        // when lunchTime is true, the promise will resolve and pass the lunchOrder
        resolve(lunchOrder);
      } else {
        // when lunchTime is false, the promise will reject and pass an error
        let err = new Error("Something went wrong!");
        reject(err);
      }
    }, 3000); // this is out 3000ms (3s) delay
  });
}

orderMeSomeFood(order) // this is where we call the function
  .then((resolvedWith) => {
    // after the promise is fulfilled, it will log whatever it was passed
    console.log(resolvedWith);
  })
  .catch((error) => {
    // after the promise is rejected, it will log the error that was created
    console.log(error);
  });
