const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then( () => {
        console.log('connection established');
    })
    .catch( err => {
        console.log('oh no!  Sorry yo!');
        console.log(err);
    });
