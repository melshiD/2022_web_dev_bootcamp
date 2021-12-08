//Most of this coding is taking place in the browser, as may be expected
//of DOM manipulation practice.  The WWW has tons of good DOMs.  My
//office has a fantastic DOM... Eyoh!

// The url you need: 'https://devsprouthosting.com/images/chicken.jpg'
let img = document.getElementsByTagName('img')[0];
img.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
img.setAttribute('alt', 'chicken');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let letters = document.getElementsByTagName('span');
for (let i = 0; i < letters.length; i++){
    letters[i].style.color = colors[i];
    
}

// WRITE YOUR CODE IN HERE:
const manyButtons = (numButtons) =>{
    let container = document.getElementById('container');
    for(let i = 0; i < numButtons; i++){
        let nextButton = document.createElement('button');
        nextButton.innerText = 'hello';
        container.appendChild(nextButton);
    }
    return container;
}

let hundredButtons = manyButtons(100);

document.querySelector('#container').appendChild(hundredButtons);