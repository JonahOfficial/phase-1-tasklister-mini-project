document.addEventListener("DOMContentLoaded", () => {
  // Select the form element
const form = document.getElementById('create-task-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input value entered by the user
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    // Call a function to create a new task element with the provided description
    createTask(taskDescription);

    // Clear the input field after task creation
    taskInput.value = '';
});

// Function to create a new task element and append it to the DOM
function createTask(description) {
    // Create a new <li> element
    const taskItem = document.createElement('li');

    // Set the inner text of the <li> element to the task description
    taskItem.innerText = description;

    // Append the new <li> element to an existing list in the DOM
    const taskList = document.getElementById('tasks');
    taskList.appendChild(taskItem);
}

});
