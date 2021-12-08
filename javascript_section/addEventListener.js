//to be performed on the MDN sites
let listItems = document.querySelectorAll('p');
listItems.forEach(e=>{
    e.addEventListener('click', ()=>e.style.border = '2px solid black');
    e.addEventListener('dblclick', ()=>e.style.borderRadius = '15px');
});     //all of the paragraphs receive a border upon click, 
        //and a radius upon doubleclick