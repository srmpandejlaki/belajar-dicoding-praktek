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
    saveData();
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

  //function membuat todo
  function makeTodo(todoObject) {
    const textTitle = document.createElement("h2");
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement("div");
    container.classList.add("item", "shadow");
    container.append(textContainer);
    container.setAttribute("id", `todo-${todoObject.id}`);

    // button completed todo
    if (todoObject.isCompleted) {
      // undo button
      const undoButton = document.createElement("button");
      undoButton.classList.add("undo-button");

      undoButton.addEventListener("click", function () {
        undoTaskFromCompleted(todoObject.id);
      });

      // trash button
      const trashButton = document.createElement("button");
      trashButton.classList.add("trash-button");

      trashButton.addEventListener("click", function () {
        removeTaskFromCompleted(todoObject.id);
      });

      container.append(undoButton, trashButton);
    } else {
      // memindahkan task dari "yang harus dilakukan" -> "yang sudah dilakukan"
      const checkButton = document.createElement("button");
      checkButton.classList.add("check-button");

      checkButton.addEventListener("click", function () {
        addTaskCompleted(todoObject.id);
      });

      container.append(checkButton);

      // function task completed
      function addTaskCompleted(todoId) {
        const todoTarget = findTodo(todoId);

        if (todoTarget == null) return;

        todoTarget.isCompleted = true;
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveData();
      }
    }

    // function menemukan Todo
    function findTodo(todoId) {
      for (const todoItem of todos) {
        if (todoItem.id === todoId) {
          return todoItem;
        }
      }
      return null;
    }

    // function hapus todo dari list selesai
    function removeTaskFromCompleted(todoId) {
      const todoTarget = findTodoIndex(todoId);

      if (todoTarget === -1) return;

      todos.splice(todoTarget, 1); // splice berfungsi = menghapus todo
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }

    // function undo todo dari list selesai
    function undoTaskFromCompleted(todoId) {
      const todoTarget = findTodo(todoId);

      if (todoTarget == null) return;

      todoTarget.isCompleted = false;
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }

    // implementasi findTodoIndex()
    function findTodoIndex(todoId) {
      for (const index in todos) {
        if (todos[index].id === todoId) {
          return index;
        }
      }
      return -1; // jika todoId tidak ditemukan di dalam array todos
    }

    return container;
  }

  document.addEventListener(RENDER_EVENT, function () {
    // console.log(todos); - sudah menampilkan langsung pada tampilan, sehingga sudah tidak dibutuhkan lagi
    const uncompletedTODOList = document.getElementById("todos");
    uncompletedTODOList.innerHTML = ""; //membersihkan container todo sebelum diperbarui

    // menampung kontainer dari todo yang sudah selesai
    const completedTODOList = document.getElementById("completed-todos");
    completedTODOList.innerHTML = ""; // menghapus elemen yang sudah ditampilkan

    for (const todoItem of todos) {
      const todoElement = makeTodo(todoItem);
      if (!todoItem.isCompleted) {
        uncompletedTODOList.append(todoElement); // fungsi append = tambah elemen DOM baru
      } else {
        completedTODOList.append(todoElement);
      }
    }
  });

  // function simpan data ke local storage
  function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(todos);
      localStorage.setItem(STORAGE_KEY, parsed);
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }

  //
  const SAVED_EVENT = "saved-todo";
  const STORAGE_KEY = "TODO_APPS";

  function isStorageExist() /* boolean */ {
    if (typeof Storage === undefined) {
      alert("Browser kamu tidak mendukung local storage");
      return false;
    }
    return true;
  }

  document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
  });

  //
  function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
      for (const todo of data) {
        todos.push(todo);
      }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
