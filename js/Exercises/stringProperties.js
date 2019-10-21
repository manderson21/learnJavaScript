
const movie = {
    title: 'I Am Legend',
    releaseYear: 2019,
    rating: 4.5,
    director: 'Will Smith'
};



showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof(obj[key]) === 'string') 
            console.log(key + ':', obj[key]);
}