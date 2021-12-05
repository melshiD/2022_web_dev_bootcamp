// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats);

//Object literal in-browser exercise:
const product = {name: 'Gummy Bears', inStock: true, price: 1.99, flavors: ['grape', 'apple', 'cherry']};

//Object access exercise
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    zipcode: '11206',
    state: 'NY',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

//following along with nested arrays and objects:
const comments = [
    {username: 'Tammy', text: 'lololol', votes: 9},
    {username: 'FishBoi', text: 'Glub Glub', votes: 939721}
];
console.log(comments[1].text);

//for loops
// Print out "Da ba dee da ba daa" 6 times, using a for loop
let lyric = 'Da ba dee da ba daa';
for(let i = 0; i < 6; i++){
    console.log(lyric);
}

//decrementing with for loop:
// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for(let i = 25; i >=0; i -= 5){
    console.log(i);
}

//ietrating over arrays:
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let i = 0; i < people.length; i ++){
    console.log(people[i].toUpperCase());
}

const reTest = () => {
    while( Math.random()*10 > 2){
        console.log("still Running");
    }
};

const secretLoop = () =>{
    const SECRET = "BabyHippo";
    let guess = alert('enter secret code!');
    while(guess !== SECRET){
        guess = prompt('enter secret code!');
    }
};

//fun implementation of break keyword:
const funnyFunc = ()=>{
    let input = prompt("Hey you, say something");
    while(true){
        input = prompt(input);
        if(input === "stop copying me"){
            break;
        }
    }
};

const guessingGame = (maxNum) =>{
    let target = Math.floor((Math.random()*maxNum)) + 1;
    let guess = prompt("Take a guess, part-nor");
    while(parseInt(guess) !== target){
        if (guess == 'quit'){break;}
        if(guess > target){
            guess = prompt("Nope, you guess too high.  Guess again.");
        }
        else{
            guess = prompt("Nope, you guessed too low.  Guess again.")
        }
    }

    let finalThoughts = prompt('You got it!!  How do you feel?');

};

//for of loop
const subReddits = ['cringe', 'books', 'chickens'];
for(let i of subReddits){
    console.log(`visit www.reddit.com/subreddit/${i}`);
}

