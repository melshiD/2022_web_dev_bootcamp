const form = document.querySelector('form');
const input = document.getElementById('cat_name');
const catList = document.getElementById('available_cats');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let newCatName = input.value;
    let newCatListElement = document.createElement('li');
    newCatListElement.innerText = newCatName;
    catList.appendChild(newCatListElement);
    input.value = '';
});

