const app = (require('express'))();
const path = require('path');
const morgan = require('morgan');

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

app.use((req, res, next) => {
    console.log(req.query);
    const {password} = req.query;
    if(password === 'chicken'){
        next();
    }
    res.send('sorry, you need a password');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/secret', (req, res) => {
    res.send(req.arrivalDate);
});

app.get('/dogs', (req, res) => {
    res.send(`your beloved pup will arrive on ${req.arrivalDate}`);
});

app.use((req, res) => res.send('NOT FOUND'));

app.listen(3000, () => {
    console.log('listening on 3000');
});
