var todos = ['item1', 'item2', 'item3'];
function displayToDos(){
    console.log('My Todos: ', todos);
}

function changeToDo(position, newValue){
    todos[position] = newValue;
}

function deleteToDo(position, ){
    todos.splice(position, 1);
}

function addToDos(todo){
    todos.push(todo);
    changeToDo(0,'changed');
    changeToDo(0, 'changed again');
    displayToDos();
}


addToDos('new');

