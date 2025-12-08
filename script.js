console.log('Hello!');
document.write('hello stackblitz world')

const addTask = document.getElementById('add-list-item');

addTask.addEventListener('click', addTaskToList)

function addTaskToList() {
    document.write('the button was clicked')
}