const h1 = document.querySelector('h1');
console.log('im working');
const input = document.getElementById('username');

input.addEventListener('input', (e) => {
    e.preventDefault();
    const enteredText = input.value;
    console.log(input.value);
    if(enteredText === ''){
        h1.innerText = "Enter Your Username";
    }
    else{
        h1.innerText = input.value;
    }
})