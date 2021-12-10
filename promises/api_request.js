// const myReq = new XMLHttpRequest();

// myReq.onload = function(){
//     console.log('all done with requerst');
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// myReq.onerror = function(){
//     console.log('error!');
//     console.log(this);
// }

// myReq.open('GET', 'https://api.cryptonator.com/api/full/eth-usd');
// myReq.send();


// //-----------------------
// //Fetch api exposure
// const ethToUsd = () => fetch('https://api.cryptonator.com/api/full/eth-usd')
//                         .then(res => {
//                             console.log('Waiting to parse response...', res)
//                             return res.json()
//                         })
//                         .then(data => {
//                             console.log('data parsed: ', data)
//                         }
//                         .catch(e => {
//                             console.log('error', e)
//                         })


// const fetchCrytopPrice = async (url) => {
//     try{
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data.ticker.price);
//     }
//     catch(e){
//         console.log('something when wrong: ', e);
//     }
// }

// const newInfo = axios.get('https://api.cryptonator.com/api/full/eth-btc')
//     .then(res => {
//         console.log(res.data.ticker);
//     })
//     .catch(err => {
//         console.log('there was an error: ', err)
//     })

// console.log(newInfo);

const fetchNewPrice = async () => {
    try{
        const response = await axios.get('https://api.cryptonator.com/api/full/eth-btc')
        console.log(response.data.ticker)
    }
    catch(error){
        console.log(error)
    }
}
let jokeCollection = []; //collects all jokes invoked by getDadJoke()

const getDadJoke = async () => {
    const config = {headers: {accept: 'application/json'}}; 
    //dad joke api requires specific header for JSON
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
    jokeCollection.push(res.data.joke);
    addToDom(res.data.joke);
}

const manyJokes = async (numJokes) => {
    for(let i = 0; i < numJokes; i++){
        getDadJoke();
    }
}

function addToDom(jokeToAdd){
    let listParent = document.querySelector('.jokes');
    // let newDiv = document.createElement('div');
    // newDiv.classList.add('new-joke');
    let newJoke = document.createElement('li');
    newJoke.append(jokeToAdd);
    newJoke.classList.add('joke');
    // newDiv.appendChild(newJoke);
    listParent.appendChild(newJoke);
}

const jokeButton = document.getElementById('click_for_jokes');
jokeButton.addEventListener('click', () =>{
    manyJokes(10);
})