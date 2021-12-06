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

movies.forEach((e)=>console.log(`${e.title} ranks ${e.score}/100`));