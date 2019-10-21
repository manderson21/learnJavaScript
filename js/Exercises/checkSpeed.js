let currentSpeed = 75;
let points = checkSpeed(currentSpeed);

function checkSpeed(speed) {
    const speedLimit = 70;
    const speedPerPoint = 5;
    const difference = speed - speedLimit;
    //speed gives the points you get based on your current speed
    const points = Math.floor(difference / speedPerPoint);

    if (points <= 0) return 'ok';
    else if (points > 0 && points < 12) return points; 
    else return "licence suspended";
}


console.log(points);