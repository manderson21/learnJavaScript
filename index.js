// Hour
// If hour is between 6am and 12pm: Good Morning!
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise we'll display: Good Evening!

let currentTime = 19;

if (currentTime >= 6 && currentTime < 12)
    console.log("Good Morning!");
else if (currentTime >= 12 && currentTime < 18)
    console.log("Good Afternoon!");
else 
    console.log("Good Evening!");