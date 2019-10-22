
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// For in -> iterates over enumerables
for (let key in circle)
    console.log(key, circle[key]);

// For of -> iterates over iterables (arrays and maps)
// Therefore this cannot be used with an object.
// However using "Object.keys(objectName)" you can return the
// object as an array so you can iterate over
for (let key of Object.keys(circle))
    console.log(key, circle[key]);

// This returns each key and its value as an array
for (let entry of Object.entries(circle))
    console.log(entry);



// Can use the in operator with an if statement to see if a 
// specific property is in an object
if ('color' in circle) console.log('yes');


