var idcount = 0
var todos = []

function addTodo() {
    
    var todoInput = document.getElementById("todoInput")
    
    if (todoInput.value.length < 2) {
        alert("Enter correct todo value")
        return
    }
    
    todos.push({
        id: idcount,
        title: todoInput.value
    })
    render()
}

function render(){
    var todoParent = document.getElementById("todoParent")
    todoParent.innerHTML = ""
    todoInput.value = ""
    for( var i= 0 ; i < todos.length ; i++ ){
        var div = document.createElement("div")
        var p = document.createElement("p")
        var deleteBtn = document.createElement("button")
        var updateBtn = document.createElement("button")
        
        deleteBtn.textContent = "delete"
        updateBtn.textContent = "update"
        p.textContent = todos[i].title
        
        div.setAttribute("id",todos[i].id)
        deleteBtn.setAttribute("onclick",`deletetodo(${todos[i].id})`)
        updateBtn.setAttribute("onclick", `updateTodo(${todos[i].id})`)
        div.appendChild(p)
        p.appendChild(deleteBtn)
        p.appendChild(updateBtn)
        todoParent.appendChild(div)
    }
    idcount++;
    

}

//create a function to delete a todo item
function deletetodo(id) {
    todos = todos.filter(todo => todo.id !== id)    
    render()
    }
//create a fuction to edit a todo item
function updateTodo(id){
    for(var i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            var updateTodovalue = prompt("enter edit value",todos[i].textContent)
          //  console.log(editvalue)
            todos[i].title = updateTodovalue;
            render()
        
        }
    }
}