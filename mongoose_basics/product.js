const { BulkWriteResult } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then( () => {
        console.log("connection open");
    })
    .catch(err => {
        console.log('Failed to establish connection with DB');
        console.log(err);
    });

    const productSchema = new mongoose.Schema({
        productName: {type:String,
                      required: true
        },
        price: {type: Number}

    });

    const Product = mongoose.model('Product', productSchema);

    const newSku = new Product({productName: 'mountain bike', price: 50111});
    newSku.save()
        .then(data => {
            console.log(data);
        })
        .catch( (err) => {
            console.log('on no! It didn\'t work');
            console.log(err);
        });