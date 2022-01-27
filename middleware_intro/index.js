const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));
app.use((req, res, next) => {
    console.log(req.method.toUpperCase());
    const newTime = new Date().getTime();
    const newDate = new Date(newTime);
    req.arrivalTime = newTime.toString();
    req.arrivalDate = newDate.toString();
    next();
});


// app.use((req, res, next) => {
//     console.log('My first middleware');
//     next();
// })

app.get('/', (req, res) => {
    res.send(req.arrivalDate);
});

app.listen(3000, () => {
    console.log('listening on 3000');
});
