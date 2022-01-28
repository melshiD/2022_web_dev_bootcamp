const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const { render, redirect } = require('express/lib/response');
//why did vs code add the above line?
const Product = require('./models/products.js');
const AppError = require('./AppError');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log('CONNECTION MADE TO MONGO');
    })
    .catch((err) => {
        console.log('Caught it, a Mongo connection ewwoww!');
    });


app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const categories = ['fruit', 'veg', 'dairy', 'mushrooms'];

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.get('/products/:id/update', async (req, res, next) => {
    try {
        let { id } = req.params;
        const product = await Product.findById(mongoose.Types.ObjectId(id));
        if (!product) {
            return next(new AppError(404, 'Product not found'));
        }
        let category = product.category;
        let name = product.name;
        let price = product.price;
        res.render('products/update', { id, name, category, price, categories });
    } catch (e) {
        next(e);
    }
});

app.get('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const foundProduct = await Product.findById(id);
        if (!foundProduct) {
            throw new AppError(404, 'Product not found');
        }
        res.render('products/details', { foundProduct });
    }catch(e){
        const error = e.toString();
        res.render('database_error', {id, error});
        next(e);
    }
});

app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            res.render('products/index', { products, category });
        }
        else {
            const products = await Product.find({});
            res.render('products/index', { products, category: 'Products' });
        }
    } catch (e) {
        next(e);
    }
});

app.post('/products', async (req, res, next) => {
    try {
        console.log(req.body);
        const newProd = new Product(req.body);
        await newProd.save();
        res.redirect('/products');
    } catch (e) {
        next(e);
    }
});

app.put('/products/:id', async (req, res, next) => {
    try {
        let { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
        res.redirect(`/products/${product.id}`);
    } catch (e) {
        next(e);
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.redirect('/products');
    } catch (id) {
        res.render('database_error');
    }
});

app.use((err, req, res, next) => {
    const { status = 500, message = "something went wrong" } = err;
    res.status(status).send(message);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("app is listening on 3000");
});









