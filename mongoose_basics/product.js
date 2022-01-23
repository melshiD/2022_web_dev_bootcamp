// const { BulkWriteResult } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
                //mongo will make the collection 'shopApp' if it doesn't already exist
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

productSchema.methods.greet = function(){
    console.log('hello, hi, howdy');
    console.log(`- from ${this.productName}`);
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale: true, price: 0});
}
 
const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Paleo Peddler'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}



const Product = mongoose.model('Product', productSchema);

const newSku = new Product({
    productName: 'Paleo Peddler',
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

findProduct();
Product.fireSale().then( res => console.log(res));

// Product.findOneAndUpdate({ name: 'Paleo Peddler'}, {price: 21.95}, {new: true, runValidators: true})
//     .then( data => {
//         console.log("Product Update Successful");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Update Failed:');
//         console.log(err);
//     });

