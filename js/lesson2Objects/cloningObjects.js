// This lesson will demonstrate the ability to clone an object

// This is the object to be cloned
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// old way of cloning
// const another = {};
// for (let key in circle) another[key] = circle[key];
// console.log(another);


Object.assign({}, circle);
