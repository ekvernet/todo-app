# JavaScript Todo App

This project implements a simple ToDo application. It allows users to add tasks, cross them off, and delete them.

## Features and Functionalities

- **Responsive**: The ToDo section adjusts to the size of the screen up to 60%
- **Add**: Tasks can be added one at a time
- **Edit**: The tasks can be crossed off when completed
- **Delete**: The tasks can be deleted to start fresh

## Code Overview

###Initialization

The code make use of the localStorage to save and keep tasks in memory. It sets an empty array if there are not tasks in storage.

###Functions

- `addTask()`: Taskes in the input text, clean the string, add it to the tasks list, saves to localStorage, reinitialize the input variable, and display the updated list of tasks.
- `deleteAllTasks()`: Reinitialize the list of tasks, saves it to localStorage, and display the updated list of tasks.
- `displayTasks()`: Creates a div element that contains a paragraph element for each task that includes a checkbox to cross off the task when needed and the task name. It checks the status of the task and listens to change events to update the status.
- `save()`: Saves the tasks to localStorage.
- `toggleTask(index)`: Allow to check and uncheck a task identified by its index in the array of tasks, saves the change, and display the updated list of tasks.
- `editTask(index)`: Allows to edit a task by its index in the array of tasks, saves the change, and display the updated list of tasks.

## Run

Use VS Code and Live Server Extension to play around with this app.
