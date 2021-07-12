const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click" , addTodo );


function addTodo(event){
    // to prevent automatic submitting
    event.preventDefault();

    // creating a div element for todo container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // adding a new todo 
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey';
    newTodo.classList.add('todo-item');

    // adding new todo to the todo div 
    todoDiv.appendChild(newTodo);

    // adding a marked button
    const markedBtn = document.createElement("button");
    markedBtn.innerHTML = '<i class="fas fa-check"></i>';
    markedBtn.classList.add("mark-btn");

    // adding the marked button to todo div 
    todoDiv.appendChild(markedBtn);

    // adding an unmark button
    const unmarkBtn = document.createElement("button");
    unmarkBtn.innerHTML = '<i class="fas fa-trash"></i>';
    unmarkBtn.classList.add("unmark-btn");

    // adding the unmark button to todo div
    todoDiv.appendChild(unmarkBtn);

    // adding the whole todo div to todoList
    todoList.appendChild(todoDiv);
}