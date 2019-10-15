
const marks = [100];
const average = calculateAverage(marks);
// Average is 70

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 -99: A

console.log('Average:', average);
console.log('Grade:', calculateGrade(average));

function calculateGrade(average) {
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) sum += value;

    return sum / array.length;
}