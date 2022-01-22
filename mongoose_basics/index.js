const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log('connection established');
    })
    .catch(err => {
        console.log('oh no!  Sorry yo!');
        console.log(err);
    });

const movieSchema = new mongoose.Schema(
    {
        title: String,
        year: Number,
        score: Number,
        agencyRating: String
    }
);

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.7, agencyRating: 'R' },
    { title: 'Ironman', year: 2005, score: 9.1, agencyRating: 'PG-13' },
    { title: 'Ironma 2', year: 2007, score: 8.7, agencyRating: 'PG' },
    { title: 'Girl Interrupted', year: 1993, score: 7.8, agencyRating: 'R' },
    { title: 'Jurassic Park', year: 1997, score: 8.3, agencyRating: 'R' },
    { title: 'Dune', year: 1984, score: 8.7, agencyRating: 'R' },
    { title: 'Parks and Rec', year: 2012, score: 3.3, agencyRating: 'F' }
])
.then( data => {
    console.log('it worked');
    console.log(data);
});