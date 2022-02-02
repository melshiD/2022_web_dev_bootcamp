const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const { render, redirect, get } = require('express/lib/response');
//why did vs code add the above line?
const Product = require('./models/products.js');
const AppError = require('./AppError');
const Farm = require('./models/farm.js');
const { features } = require('process');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log('CONNECTION MADE TO MONGO');
    })
    .catch((err) => {
        console.log('Caught it, a Mongo connection ewwoww!  Something went wrong');
    });

app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const categories = ['fruit', 'veg', 'dairy', 'mushrooms'];
///Farm routers////////////////////////Farm Routes/////////////////FARM

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    console.log('in the farms/new route');
    res.render('farms/new');
});

app.get('/farms/:id/products/new', (req, res) => {
    const { id } = req.params;
    res.render('products/new', { categories, id });
});

app.get('/farms/:id', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('farms/show', { farm });
});

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const newProd = new Product({ name, price, category });
    await newProd.save();
    farm.products.push(product);
    newProd.farm = farm;
    res.redirect('/farms');
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body.farm);
    const result = await farm.save();
    res.redirect('/farms');
});

///Product routers//////////////////Farm Product/////////////////PROD
app.get('/products/new', (req, res) => {
    console.log('LOOKING for the cannot get error');
    res.render('products/new', { categories });
});

function wrapAsync(funcToWrap) {
    return function (req, res, next) {
        funcToWrap(req, res, next).catch(e => next(e));
    }
}

app.get('/products/:id/update', wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const product = await Product.findById(mongoose.Types.ObjectId(id));
    // if (!product) {
    //     next(new AppError(404, 'Product not found'));
    // }
    let category = product.category;
    let name = product.name;
    let price = product.price;
    res.render('products/update', { id, name, category, price, categories });
}));

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    if (!foundProduct) {
        throw new AppError(404, 'Product not found');
    }
    res.render('products/details', { foundProduct });
}));

app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    }
    else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'Products' });
    }
}));

app.post('/products', wrapAsync(async (req, res, next) => {
    console.log(req.body);
    const newProd = new Product(req.body);
    await newProd.save();
    res.redirect('/products');
}));

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product.id}`);
}));

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}));

function handleValidationError(err) {
    console.log('LOOKING for the cannot get error');
    console.dir(err);
    return new AppError(400, `Validation Failed... ${err.message}`);
}

app.use((req, res, next) => {
    console.log('inside the non-error-throwing last-change middleware');
    next(new AppError(404, 'Your route was not found.  Please have your dev team build it'));
});

app.use((err, req, res, next) => {
    console.log('inside of THE SECOND TO LAST');
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationError(err);
    if (err.name === 'CastError') err = handleCastError(err);
    next(err);
});

app.use((err, req, res, next) => {
    console.log('inside of THE LAST');

    const { status = 500, message = "something went wrong" } = err;
    res.status(status).send(message);
    res.redirect('/products');
});

app.listen(3000, () => {
    console.log("app is listening on 3000");
});