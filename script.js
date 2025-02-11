function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    let taskDate = document.getElementById('taskDate').value;
    let priority = document.getElementById('priority').value;
    
    if (taskInput === "") {
        alert("Please enter a task");
        return;
    }
    
    let taskList = document.getElementById('taskList');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    let taskDetails = document.createElement('span');
    taskDetails.innerHTML = `${taskInput} - ${taskDate} - ${priority}`;
    
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskDetails);
    taskList.appendChild(taskDiv);
    
    document.getElementById('taskInput').value = "";
    document.getElementById('taskDate').value = "";
}

function goToSecretPage() {
    let password = prompt("Enter your password:");
    if (password === "1234") {
        window.location.href = "secret.html";
    } else {
        alert("Incorrect password!");
    }
}
