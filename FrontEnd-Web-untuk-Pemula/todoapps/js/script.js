document.addEventListener("DOMContentLoaded", function () {
  const todos = [];
  const RENDER_EVENT = "render-todo";

  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault(); //simpan data
    addToDo();
  });

  function addToDo() {
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    const generateID = generateId();
    const todoObject = generateToDoObject(
      generateID,
      textTodo,
      timestamp,
      false
    );
    todos.push(todoObject);

    //me-render data yang telah disimpan pada array todos
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function generateId() {
    return +new Date();
  }

  function generateToDoObject(id, task, timestamp, isCompleted) {
    return { id, task, timestamp, isCompleted };
  }

  document.addEventListener(RENDER_EVENT, function () {
    console.log(todos);
  });
});
