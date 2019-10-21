


// Mutlpiles of 3: 3, 6, and 9
// Multiples of 5: 5, 10
let limit = 21;

sum(limit);

function sum(limit) {
    let sumOfThrees = 0;
    let sumOfFives = 0;

    // Creates a list of multiples of 3 up to the limit
    for (let i = 3; i <= limit; i += 3) sumOfThrees += i;
    // Creates a list of multiples of 5 up to the limit
    for (let i = 5; i <= limit; i += 5) sumOfFives += i;

    console.log(sumOfThrees);
    console.log(sumOfFives);
}