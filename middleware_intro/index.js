const app = (require('express'))();
const path = require('path');
const morgan = require('morgan');
const req = require('express/lib/request');
const { download } = require('express/lib/response');
const AppError = require('./AppError');
const res = require('express/lib/response');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('common'));
//adds date and time data to request object
app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path);
    const newTime = new Date().getTime();
    const newDate = new Date(newTime);
    req.arrivalTime = newTime.toString();
    req.arrivalDate = newDate.toString();
    next();
});

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === 'chicken'){
        next();
    }
    throw new AppError(401, 'password required');
};

app.get('/error', (req, res) => {
    chicken.fly();
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send(req.arrivalDate);
});

app.get('/dogs', (req, res) => {
    res.send(`your beloved pup will arrive on ${req.arrivalDate}`);
});

app.get('/admin', (req, res) => {
    throw new AppError(403, "you are not an admin");
});

app.use((req, res) => res.send('NOT FOUND'));

app.use((err, req, res, next) => {
    const {status = 500, message = "something went wrong"} = err;
    res.status(status).send(message);
});
app.use((err, req, res, next) => {
    const {status = 500} = err;
    res.status(status).send('First Error Handler');
});

app.listen(3000, () => {
    console.log('listening on 3000');
});
