const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/products.js');
const { render, redirect } = require('express/lib/response');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/products/new', (req, res) => {
    res.render('products/new');
});

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', {products});
});

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/details', {foundProduct});
    console.log(foundProduct);
    });

app.post('/products', async (req, res) => {
    console.log(req.body);
    const newProd = new Product(req.body);
    await newProd.save();
    res.redirect('/products');
});


WHEN YOU SIT BACK DOWN WORK ON THE UPDATING ROUTE







app.listen(3000, () => {
    console.log("app is listening on 3000");
});






mongoose.connect('mongodb://localhost:27017/farmStand')
    .then( () => {
        console.log('CONNECTION MADE');
    })
    .catch( (err) => {
        console.log('Caught it, a Mongo connection ewwoww!');
    });

