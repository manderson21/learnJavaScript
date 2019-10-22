
// Factory Function
// Camel Notation: oneTwoThreeFour
function createCircle(radius) {
    return {
        pi: 3.14,
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);

// Constructor Function
// Pascal Notation: OneTwoThreeFour
function Circle(radius) {
    this.pi = 3.14
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(1);
console.log(circle);

