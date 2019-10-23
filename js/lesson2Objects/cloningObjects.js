// This lesson will demonstrate the ability to clone an object

// This is the object to be cloned
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// old way of cloning
const clone1 = {};
for (let key in circle) clone1[key] = circle[key];

console.log(clone1);

// Newer way
const clone2 = Object.assign({}, circle);
// could also do add properties like this:
// const clone2 = Object.assign({
    // color: 'yellow'
// }, circle);

console.log(clone2);


// Newest and most elegant way:
// This uses the spread operator which is 3 dots
const clone3 = { ...circle };

console.log(clone3);
