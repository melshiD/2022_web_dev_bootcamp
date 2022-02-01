const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipsDemo')
    .then( () => {
        console.log("Mongo Connection Open!");
    })
    .catch( err => {
        console.log('something went wrong');
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Prickly Baemelon', price: 14.99, season: 'Summer'},
//     {name: 'Monster Melon', price: 41.93, season: 'Winter'},
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({name: 'Full Belly Farm', city: 'Cuinda, CA'});
//     const melon = await Product.findOne({name: 'Goddess Melon'});
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({name: 'Full Belly Farm'});
    const watermelon = await Product.findOne({name: 'Monster Melon'});
    farm.products.push(watermelon);
    farm.save();
}

Farm.findOne({name: 'Full Belly Farm'})
.populate('products')

1
.then(farm => console.log(farm));