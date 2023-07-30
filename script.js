
document.addEventListener("DOMContentLoaded", () => {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", () => {
    const todoText = newTodoInput.value.trim(); // Remove leading/trailing spaces
    if (todoText !== "") {
      const todoItem = document.createElement("li");
      todoItem.textContent = todoText;
      todoList.appendChild(todoItem);
      newTodoInput.value = ""; // Clear the inaput after adding the todo
    }
  });

  newTodoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTodoBtn.click(); // Simulate a click on the "Add todo" button when Enter key is pressed
    }
  });
});