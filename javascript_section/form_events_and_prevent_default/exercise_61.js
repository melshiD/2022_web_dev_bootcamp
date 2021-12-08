// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addItem();
    clearAfterSubmit();
});

const addItem = () =>{
    let productName = form.elements.product.value;
    let productQty = form.elements.qty.value;
    const parentNode = document.getElementById('list');
    let newItemElement = document.createElement('li');
    newItemElement.innerText = `${productQty} ${productName}`;
    parentNode.appendChild(newItemElement);
}

const clearAfterSubmit = () =>{
    form.elements.product.value = "";
    form.elements.qty.value = "";
}