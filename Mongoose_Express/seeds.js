const mongoose = require('mongoose');
const Product = require('./models/products.js');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then( () => {
        console.log("CONTENT UPLOAD SOCKET OPEN");
    })
    .catch( (err) => {
        console.log("DAB NABBIT!");
        console.log(err);
    });

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// });

// p.save().then( p => {
//     console.log(p);
// })
// .catch( err => {
//     console.log(err);
// });

const seedProducts = [
    {
        name: 'Orange',
        price: 0.57,
        category: 'fruit'
    },
    {
        name: 'Banana',
        price: 1.07,
        category: 'fruit'
    },
    {
        name: 'Broccoli',
        price: 2.99,
        category: 'veg'
    },
    {
        name: 'Spinach',
        price: 4.09,
        category: 'Veg'
    },
    {
        name: 'Whole Milk',
        price: 6.99,
        category: 'dairy'
    },
    {
        name: 'Delicious Cheese',
        price: 11.13,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
    .then(() => console.log(seedProducts))
    .catch(e => console.log(err));