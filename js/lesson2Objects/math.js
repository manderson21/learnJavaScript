// This is a built in object for doing complicated math
// equations in javascript


// random method gives a random number between 0 and 1
console.log(Math.random());

// getting a random number between 2 values
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(1, 20));


// round method rounds a number to the nearest whole number
console.log(Math.round(1.9));

// max method returns the max number in a list
console.log(Math.max(1, 2, 3, 4, 5));