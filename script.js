
function addTask() {
    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");
    const taskList = document.getElementById("taskList");

    const title = taskTitle.value;
    const description = taskDescription.value;

    if (title === "") {
        alert("Please enter a task title.");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = title + " - " + description;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.onclick = function () {
        taskText.classList.toggle("completed");

        if (taskText.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskTitle.value = "";
    taskDescription.value = "";
}
/* For Task 25 Demonstrate Git Revert */


