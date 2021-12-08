// const container = document.querySelector('#container');
// const newImg = document.createElement('img');
// newImg.src = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/100.png';
// container.appendChild(newImg);
const container = document.querySelector('#container');


for(let i = 1; i < 150; i++){
    let newImg = document.createElement('img');
    newImg.setAttribute('src', `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png`);
    container.appendChild(newImg);
}

// https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon