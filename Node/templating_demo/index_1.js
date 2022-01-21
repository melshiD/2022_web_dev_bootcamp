const express = require('express');
const app = express();
const path = require('path');
const { pathToFileURL } = require('url');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));//serves public folder

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit', {...data});
    }
    else{
        res.render('notfound', {subreddit});
    }
    console.log(data);
    
});

app.get('/random', (req, res) => {
    let number = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand: number});
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - get one comment using ID 
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - remove one comment