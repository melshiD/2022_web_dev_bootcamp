//playing around with the spread syntax
const spreadFactory = (toSpread) => [...toSpread];

let newSpread = spreadFactory('Please Spread Me!');

console.log(newSpread);

const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Kayninis volarius'};

const catDog = {...feline, ...canine};
//since both objects have a 'family' property, the last value
//to be encountered for the property will be the one that
//is ultimately left in the new object.  Order matters in this case.

//REST
function vacation(luggage, activities, ... otherDetails){//ooh, this example uses spread AND rest
    console.log(activities);
    console.log(luggage);
    console.log(...otherDetails);
}

vacation('samsonite', 'Eiffel Tower', 'France', 'Spain', 'Rome', 'trains');

//Destructuring array

const scores = [32324, 452452, 34546, 4, 5, 435, 982, 55];

const [gold, silver] = scores;

const raceResults = ['Dante Zamichieli', 'Anthony Zamichieli', 'Theodore Lewis', 'Lisette Zamichieli', 'David Zamichieli'];
const [first, second, third] = raceResults;
const [fastest, ...everyoneElse] = raceResults;
console.log(first);
console.log(...everyoneElse);

//Destructuring object

const user = {
    email: 'dave.melshman@gmail.com',
    password: 'noneYah',
    firstName: 'Dave',
    lastName: 'Melshman',
    born: 1984,
    dies: 2207,
    city: 'Martian Prime',
    state: 'Melshopolis'
}

const {firstName, lastName, email, notPresent = 'future Use'} = user;

console.log(email, lastName, firstName, notPresent);

const {born:birthyear} = user;  //destructuring object and choosing variable name
                                //that's different from the object's property name
console.log(`Birth year is ${birthyear}`);