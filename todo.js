let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("textInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const addButton = document.querySelector(".addButton");
const deleteButton = document.getElementById("deleteButton");

//console.log(taskInput);

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
  deleteButton.addEventListener("click", deleteAllTasks);
  displayTasks();
});

function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push({
      name: task,
      isDisabled: false,
    });
    save();
    taskInput.value = "";
    displayTasks();
  }
}

function deleteAllTasks() {
  tasks = [];
  save();
  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((element, index) => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `
        <div class="task-container">
            <input type="checkbox" class="task-checkbox" id="input-${index}" ${
      element.isDisabled ? "checked" : ""
    }> 
    <p class="${
      element.isDisabled ? "disabled" : ""
    }" id="task-${index}" onclick="editTask(${index})">
    ${element.name}
     </p>
        </div>
        `;
    paragraph.querySelector(".task-checkbox").addEventListener("change", () => {
      toggleTask(index);
    });
    taskList.appendChild(paragraph);
    taskCount.textContent = tasks.length;
  });
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleTask(index) {
  tasks[index].disabled = !tasks[index].disabled;
  save();
  displayTasks();
}

function editTask(index) {
  const task = document.getElementById(`task-${index}`);
  const existingText = tasks[index].text;
  const inputElement = document.createElement("input");

  inputElement.value = existingText;
  task.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("blur", function () {
    const updatedText = inputElement.value.trim();
    if (updatedText) {
      tasks[index].name = updatedText;
      save();
    }
    displayTasks();
  });
}
