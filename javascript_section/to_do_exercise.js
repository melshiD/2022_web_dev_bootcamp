//simple command-line-based to-do list app
// const mainPrompt = prompt('what would you like to do? add: list: delete: quit:').toLocaleLowerCase();
const toDoList = ['hang ten', 'be cool', 'unwind', 'take a deep breath', 'get money', 'sulk', 'slay'];

const toDoManager = () => {
    let mainPrompt = prompt('what would you like to do? add: list: delete: quit:');
    while (mainPrompt !== 'quit') {
        if (mainPrompt === 'add') {
            let newItem = prompt('Please enter new to-do item:').toLocaleLowerCase();
            toDoList.push(newItem);
            console.log(`added: "${newItem}" to your list`);
        }
        if (mainPrompt === 'list') {
            console.log('*********************');
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i}: ${toDoList[i]}`);
            }
            console.log('*********************');
        }
        if (mainPrompt === 'delete') {
            let deleteIndex = parseInt(prompt('Enter index of item to delete'));
            if(!Number.isNaN(deleteIndex)){
                console.log(`Deleting "${toDoList.splice(deleteIndex, 1)}" from list.`);
            }
            else{
                console.log('please enter a valid index next time');
            }
        }
        mainPrompt = prompt('what would you like to do? add: list: delete: quit:');
    }
    console.log('thank you for choosing us as your to-do list management provider.  Have a nice day');
}