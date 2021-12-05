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
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

//following along with nested arrays and objects:
const comments = [
    {username: 'Tammy', text: 'lololol', votes: 9},
    {username: 'FishBoi', text: 'Glub Glub', votes: 939721}
];
console.log(comments[1].text);