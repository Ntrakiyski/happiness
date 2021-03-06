//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos);


//Functions
function addTodo(event){
	event.preventDefault();

	//Todo Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	//Create li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	const todayDate = document.createElement('h2');
	var date = new Date();
	todayDate.innerHTML = date.toLocaleString("bg-BG");
	todayDate.classList.add('today-date');
	todoDiv.appendChild(todayDate);
	


	//ADD todo to local storage
	saveLocalTodos(todoInput.value);
	//Completed button check mark
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	//Trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML ='<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	//Aappend to list
	todoList.appendChild(todoDiv);
	//Clear todoInput value
	todoInput.value = "";

}

function deleteCheck(e){
	const item = e.target;
	//delete
	if (item.classList[0] === 'trash-btn'){
		const todo = item.parentElement;
	//Animation
		todo.classList.add("fall");
		removeLocalTodos(todo);
		todo.addEventListener('transitionend', function(){
			todo.remove();
		})
	}
	//check
	if (item.classList[0] === 'complete-btn'){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function  saveLocalTodos(todo){
	let todos;
	if(localStorage.getItem('todos') === null){
		todos =[];
	}else{
		todos=JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
	let todos;
	if(localStorage.getItem('todos') === null){
		todos =[];
	}else{
		todos=JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach(function(todo){
		//Todo Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	//Create li
	const newTodo = document.createElement('li');
	newTodo.innerText = todo;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//Completed button check mark
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	//Trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML ='<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	//Aappend to list
	todoList.appendChild(todoDiv);
	})
}

function removeLocalTodos(todo){
	let todos;
	if(localStorage.getItem('todos') === null){
		todos =[];
	}else{
		todos=JSON.parse(localStorage.getItem('todos'));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}

