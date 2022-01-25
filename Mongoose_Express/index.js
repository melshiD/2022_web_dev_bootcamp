const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const { render, redirect } = require('express/lib/response');
//why did vs code add the above line?
const Product = require('./models/products.js');

app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const categories = ['fruit', 'veg', 'dairy', 'mushrooms'];

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
});

app.get('/products/:id/update', async (req, res) => {
    let {id} = req.params;
    const product = await Product.findById(id);
    let category = product.category;
    let name = product.name; 
    let price = product.price;
    console.log('Im a route, yall!');
    res.render('products/update', {id, name, category, price, categories});
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/details', { foundProduct });
    console.log(foundProduct);
});


app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', { products });
});

app.post('/products', async (req, res) => {
    console.log(req.body);
    const newProd = new Product(req.body);
    await newProd.save();
    res.redirect('/products');
});

app.put('/products/:id', async (req, res) => {
    let {id} = req.params;
    console.log(req.body);
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/products/${product.id}`);
});

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("app is listening on 3000");
});






mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('CONNECTION MADE');
    })
    .catch((err) => {
        console.log('Caught it, a Mongo connection ewwoww!');
    });

