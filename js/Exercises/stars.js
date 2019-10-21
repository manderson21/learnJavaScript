
showStars(10);



function showStars(rows) {
    let stars = [];

    for (let row = 0; row < rows; row++) {
        stars.push('*');
        console.log(stars.join(''));
    }
}