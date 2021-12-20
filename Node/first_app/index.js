const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request');
//     res.send('<h1>Here is my webpage</h1>')
// })

app.get('/', (req, res) => {
    res.send('<h1>Here is my webpage</h1>')
})

app.get('/r/:subcategory', (req, res) => {
    const {subcategory} = req.params;
    res.send(`so you're into ${subcategory}`);
});

app.get('/r/:subcategory/:postId', (req, res) => {
    const {subcategory, postId} = req.params;
    res.send(`so you're into ${subcategory} and ${postId}`);
});

app.get('/cats', (req, res) => {
    res.send('MEOW!')
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})