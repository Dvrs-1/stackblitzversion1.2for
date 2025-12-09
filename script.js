console.log('Hello!');
document.write('hello stackblitz world');

const taskList = document.getElementById('task-list');
const addTask = document.getElementById('add-list-item');

addTask.addEventListener('click', addTaskToList);

function addTaskToList() {
    let taskToAdd = document.createElement('li')
    taskToAdd.innerText = document.getElementById('task-to-add').value
    taskList.appendChild(taskToAdd)

    
};