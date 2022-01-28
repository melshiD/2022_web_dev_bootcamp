const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be left blank']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'veg', 'dairy', 'mushrooms'],
        lowercase: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;