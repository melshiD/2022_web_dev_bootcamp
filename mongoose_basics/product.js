const { BulkWriteResult } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log('Failed to establish connection with DB');
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        maxlength: 30,
        lowercase: true
    },

    price: {
        type: Number,
        min: [0, 'Price needs to be entered as a positive number']
    },


    onSale: {
        type: Boolean,
        default: false
    },

    color: String,

    categories: [String],

    qty: {
        online: { type: Number, default: 0 },
        inStore: {type: Number, default: 1}
    },
    size: {
        type: String,
        enum: {values: ['s', 'm', 'l', 'OSFA'],
               message: "must be a valid size",
               default: 'OSFA'}
    }

});

const Product = mongoose.model('Product', productSchema);

const newSku = new Product({
    productName: 'Sweet Horn',
    price: 23.21, color: 'red',
    categories: ['family', 'outdoor', 'vacation', 232],
    size: 'OSFA'
});


newSku.save()
    .then(data => {
        console.log('product entry saved')
        // console.log(data);
    })
    .catch((err) => {
        console.log('on no! It didn\'t work');
        console.log(err);
    });

Product.findOneAndUpdate({ name: 'Sweet Horn'}, {price: 21.95}, {new: true, runValidators: true})
    .then( data => {
        console.log("Product Update Successful");
        console.log(data);
    })
    .catch(err => {
        console.log('Update Failed:');
        console.log(err);
    });