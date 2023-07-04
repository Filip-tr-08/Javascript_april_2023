let todoButton = document.getElementById("todoButton");

todoButton.addEventListener("click", () => {
  fetchRandomTodo();
});

function fetchRandomTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      let users = json;
      let toDo = users[Math.floor(Math.random() * users.length + 1)];
      console.log(toDo.id);
      console.log(toDo.title);
      toDo.completed ? console.log("Completed") : console.log("Not completed");
    })
    .catch((error) => console.log(error.message))
    .finally(() => console.log(":)" + new Date().toString()));
}
