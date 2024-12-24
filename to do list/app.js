// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render the tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    
    li.innerHTML = `
      <span>${task}</span>
      <button class="edit" onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    
    taskList.appendChild(li);
  });
}

// Add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
  }
}

// Edit task
function editTask(index) {
  const newTaskText = prompt("Edit your task:", tasks[index]);
  if (newTaskText) {
    tasks[index] = newTaskText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Event listener for adding task
addTaskButton.addEventListener('click', addTask);

// Initial render
renderTasks();
