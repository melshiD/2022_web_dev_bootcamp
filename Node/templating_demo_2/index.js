//CRUD implementation example for RESTful routes
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');

const {v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

let comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment: 'lol, that is so funny'
    },
    {
        id:uuid(),
        username: 'Tracy',
        comment: 'Thats what you mom said'
    },
    {
        id:uuid(),
        username: 'Flick',
        comment: 'definitely not where a shovel belongs'
    },
    {
        id:uuid(),
        username: 'Flaz',
        comment: 'pump to the moon!!!!!!'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    //routes from new.ejs
    const {username, comment} = req.body;
    const id = uuid();
    comments.push({id, username, comment});
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const reqComment = comments.find( c => c.id === id);
    res.render('comments/show', {reqComment});
});

app.get('/comments/:id/edit', (req, res) => {
    // slash/edit comes form link on index.ejs
    let {id} = req.params;
    let reqComment = comments.find( c => c.id === id);
    console.log(reqComment);
    res.render('comments/edit', {reqComment});
});

app.delete('/comments/:id', (req, res) => {
    let {id} = req.params;
    comments = comments.filter(comment => comment.id !== id);
    res.redirect('/comments');
});

app.patch('/comments/:id', (req, res) => {
    //routes from edit.ejs
    let {id} = req.params;
    let reqIndex = comments.findIndex( c => c.id === id);
    let replacementText = req.body.edit_text;

    comments[reqIndex].comment = replacementText;
    res.redirect('/comments');
});

app.listen(3000, () => {
    console.log('on port 3000');
});