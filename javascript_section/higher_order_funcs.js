const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function(el){
    console.log(el);
});

numbers.forEach(e => console.log(e*e));

const movies = [
    {
        title: 'Barnyard Comandos Return',
        score: 99
    },
    {
        title: 'The Hearts Go On',
        score: 69
    },
    {
        title: 'Frankeberry live at Wimbledon',
        score: 100
    },
    {
        title: 'Scratch the Markets',
        score: 88
    }
];

//movies.forEach((e)=>console.log(`${e.title} ranks ${e.score}/100`));

const reviewsArray = movies.map((e)=>`${e.title} ranks ${e.score}/100`);
movies.forEach(e=>console.log(e));

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(e=>e.first);

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const greet = name => {
    console.log(`Hey ${name}!`)
}
greet('Dave');//bootcamp coding interface seems to have been broken for this one

//-----------------Stuck on a filter assignment!
let userNames = ['Jet', 'Petrovichich', 'Sanders', 'Pooch', 'Biffzilla-toad', 'Lean'];
const validUserNames = names =>(
    names.filter((e) => e.length < 10)
);
//this works too
const moreValidUserNames = names => names.filter((e) => e.length < 10);
const allEvens = numbers => numbers.every(e => e%2 === 0);

let arrayNew = [1,2,3,4,5,4,5,6,7,6,4,3,23,456,56655, 44];
const maxNumber = (array) => array.reduce((max, curr) => max>curr?max:curr);