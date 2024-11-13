// 1. Demonstrate the use of await to pause code execution until a promise is fulfilled
async function pauseWithAwait() {
    const promise = new Promise((resolve) => setTimeout(() => resolve("Promise Resolved!"), 2000));
    const result = await promise;
    console.log(result); // Output: Promise Resolved!
    console.log("This message appears after the promise is resolved.");
}
pauseWithAwait();


// 2. Use Promise.all() to execute two Promises concurrently and log both results
function promiseOne() {
    return new Promise((resolve) => setTimeout(() => resolve("Result from promiseOne"), 3000));
}
function promiseTwo() {
    return new Promise((resolve) => setTimeout(() => resolve("Result from promiseTwo"), 2000));
}

Promise.all([promiseOne(), promiseTwo()]).then((results) => {
    console.log(results); // Output: ["Result from promiseOne", "Result from promiseTwo"]
});


// 3. Implement error handling with .catch() in a Promise chain
function getNumber() {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Success!");
        } else {
            reject("Error: Number was too low.");
        }
    });
}

getNumber()
    .then((message) => console.log(message))
    .catch((error) => console.log(error)); // Output: "Error: Number was too low." if failed


// 4. Demonstrate an example of callback hell by nesting multiple callbacks
function nestedCallbacks(callback) {
    setTimeout(() => {
        console.log("Level 1");
        setTimeout(() => {
            console.log("Level 2");
            setTimeout(() => {
                console.log("Level 3");
                callback();
            }, 1000);
        }, 1000);
    }, 1000);
}

nestedCallbacks(() => console.log("Reached the final callback."));


// 5. Write a function using setTimeout that prints “Hello” after 2 seconds
function printHello() {
    setTimeout(() => {
        console.log("Hello"); // Output: Hello
    }, 2000);
}
printHello();


// 6. Chain 2 promises to perform two dependent asynchronous operations
function firstOperation() {
    return new Promise((resolve) => setTimeout(() => resolve("First operation complete"), 1000));
}

function secondOperation(resultFromFirst) {
    return new Promise((resolve) => setTimeout(() => resolve(`${resultFromFirst}, Second operation complete`), 1000));
}

firstOperation()
    .then((result) => secondOperation(result))
    .then((finalResult) => console.log(finalResult)); // Output: "First operation complete, Second operation complete"


// 7. Implement a callback function to multiply two numbers and print the result
function multiply(num1, num2, callback) {
    const product = num1 * num2;
    callback(product);
}

function displayResult(result) {
    console.log("Result:", result); // Output: Result: (product of two numbers)
}

multiply(5, 4, displayResult);


// 8. Write an async function that throws an error and handle it with try...catch
async function throwErrorFunction() {
    throw new Error("Something went wrong!");
}

async function handleError() {
    try {
        await throwErrorFunction();
    } catch (error) {
        console.log("Caught an error:", error.message); // Output: Caught an error: Something went wrong!
    }
}
handleError();


// 9. Implement a basic timer with setInterval that stops after 5 seconds
function startTimer() {
    let elapsedTime = 0;
    const timer = setInterval(() => {
        elapsedTime += 1;
        console.log(`Timer: ${elapsedTime} second(s)`);
        if (elapsedTime >= 5) clearInterval(timer);
    }, 1000);
}
startTimer();


// 10. Show how to handle an error in a Promise-based function with .catch()
function errorProneFunction() {
    return new Promise((_, reject) => reject("This is an intentional error."));
}

errorProneFunction()
    .catch((error) => console.log("Error handled:", error)); // Output: Error handled: This is an intentional error.
