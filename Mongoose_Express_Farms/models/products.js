const mongoose = require('mongoose');
const {Schema} = mongoose;


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
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;