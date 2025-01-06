class ToDo {
  constructor() {
    this.todoList = document.getElementById("list");
    this.todoInput = document.getElementById("input");
    this.addButton = document.getElementById("task");

    this.addButton.addEventListener("click", () => this.addTask());
  }

  addTask() {
    const taskText = this.todoInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () =>
      this.toggleComplete(listItem)
    );
    completeButton.style.backgroundColor = "green";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => this.deleteTask(listItem));
    deleteButton.style.backgroundColor = "red";

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    this.todoList.appendChild(listItem);

    this.todoInput.value = "";
  }

  toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
  }

  deleteTask(taskItem) {
    this.todoList.removeChild(taskItem);
  }
}

let todoApp = new ToDo();
