let input = document.getElementById("input-field");
let addBtn = document.querySelector(".submit-button");
let radioInputs = document.querySelectorAll('input[type="radio"]');
let bottom = document.querySelector(".bottom");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



document.addEventListener("DOMContentLoaded", () => {
    loadTask()
    setupEventListeners();
});



function loadTask(){
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
        tasks = JSON.parse(savedTasks)
    }
    filterTasks()
}

function setupEventListeners(){
    addBtn.addEventListener("click", ()=>{addTask()});
    
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    radioInputs.forEach(radio => {
        radio.addEventListener("change", filterTasks);
      });


    bottom.addEventListener("click" , handleTaskAction)
      
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskText = input.value.trim();
    console.log(taskText)
    // Basic validation 
    if (!taskText ) {
        alert("Please enter a task.");
        return;
    }
    
    const newTask = {
        id:Date.now(),
        text: taskText,
        completed: false,
    }
    
    tasks.push(newTask);
    saveTasks();
    filterTasks()
    input.value = ""
    
}

function filterTasks(){
    let filteredTasks = []
    const selectedFilter = document.querySelector('input[type="radio"]:checked').id;

    console.log(selectedFilter)

    switch(selectedFilter) {
        case "value-1":
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case "value-2":
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case "value-3":
            filteredTasks = [...tasks]
            break;
    }
    renderTasks(filteredTasks)

}

function renderTasks(tasksToRender) {

    if (tasksToRender.length === 0) {
        bottom.innerHtml = `<div class="empty-state"> No Tasks found</div>`
        return;
    }

    bottom.innerHTML = ""


    tasksToRender.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = `card ${task.completed ? "completed" : ""}`;

        taskElement.dataset.id = task.id;

        taskElement.innerHTML = `
        <label class="container-checkbox">
            <span class="checkmark"></span>
        </label>
        <span class="task-text"> ${task.text} </span>
        <div class="action-buttons">
            <button class="edit-button" id="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        </div>    
        `;
        bottom.appendChild(taskElement);
    })

}


function handleTaskAction(event) {

    const taskElement = event.target.closest(".card");
    if (!taskElement) return; // If the click is not on a task element, do nothing

    const taskId = parseInt(taskElement.dataset.id);

    if (event.target.classList.contains("delete-button")) {
        deleteTask(taskId);
        return;
    }

    if (event.target.classList.contains("edit-button")) {
        editTask(taskId , taskElement);
        return;
    }

}


function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    console.log(tasks)
    saveTasks();
    filterTasks()
}

function editTask(taskId , taskElement) {
    const task = tasks.find(task => task.id === taskId);
    if(!task) return; 

    const editable = taskElement.querySelector(".task-text");
    let btn = taskElement.querySelector(".edit-button")

    if (btn.classList.contains("save-button")) {
        task.text = editable.innerText.trim();
        editable.contentEditable = false;
        btn.classList.remove("save-button");
        btn.innerText = "Edit";
        saveTasks();
        filterTasks();
    }
    else {
        btn.innerText = "Save";
        btn.classList.add("save-button");
        editable.innerText = task.text;
        editable.contentEditable = true;
        editable.focus();
        editBtn.innerText = "Save";
        editBtn.classList.add("save-button");
    }
}