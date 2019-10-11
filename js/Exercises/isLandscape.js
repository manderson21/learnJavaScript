// Use a function that returns true if an image is landscape and false if it is portrait


console.log('Is the image landscape?', isLandscape(100,200));

function isLandscape(width, height) {
    return (width > height);
}