
var taskInput = document.getElementById("new-task") // Nova tarefa
var addButton = document.getElementsByTagName("button")[0]  // Primeiro botão
var incompleteTaskHolder = document.getElementById("incomplete-tasks")  // tarefas incompletas
var completedTasksHolder = document.getElementById("completed-tasks")   // tarefas completas

var createNewTaskElement = function(taskString) {   // Novo item da lista de tarefas
    var listItem = document.createElement("li")     // Cria um item na lista
    var checkBox = document.createElement("input")  // Aqui e um input na check-box
    var label = document.createElement("label")
    var editInput = document.createElement("input") // um input pra texto
    var editButton = document.createElement("button") // botão pra editar
    var deleteButton = document.createElement("button") // botão de delete

    checkBox.type = "checkbox"
    editInput.type = "text"
    editButton.innerText = "Edit"
    editButton.className = "edit"
    deleteButton.innerText = "Delete"
    deleteButton.className = "delete"
    label.innerText = taskString

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    return listItem
}
var addTask = function() {
    var listItemName = task.editInput.Value || "New Item"
    var listItem = createNewTaskElement(listItemName)
    incompleteTaskHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskCompleted)
    taskInput.value = ""
}

var editTask = function() {
    var listItem = this.parentNode
    var editInput =listItem.querySelector("input[type=text")
    var label = listItem.querySelector("label")
    var button = listItem.getElementsByTagName("button")[0]

    var containClass = listItem.classList.contains("editMode")

    if(containClass) {
        label.innerText = edit.editInput.value
        button.innerText = "Edit"
    } else {
        editInput.value = label.innerText
        button.innerText = "Save"
    }
    
    listItem.classList.toggle("editMode")
}

var deleteTask = function() {
    var listItem = this.parentNode
    var ul = list.item.parentNode
    ul.removeChild(listItem)
}

var taskCompleted = function() {
    var listItem = this.parentNode
    completedTasksHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskIncomplete)
}

var taskIncomplete = function() {
    var listItem = this.parentNode
    incompleteTaskHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskCompleted)
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    var checkBox = taskListItem.querySelector("input[type=checkbox]")
    var editButton = taskListItem.querySelector("button.edit")
    var deleteButton = taskListItem.querySelector("button.delete")

}

var ajaxrequest = function() {
    console.log("AJAX request")
}

addButton.addEventListener("click", addTask)

addButton.addEventListener("click", ajaxrequest)

for(var i=0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted)
}

for(var i=0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
}