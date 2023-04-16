const userInput = document.querySelector("#userInput");
const listContainer = document.querySelector('#listContainer');
const toDoForm = document.querySelector('#toDoForm');


const addNewItem = () => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    listContainer.appendChild(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.appendChild(document.createTextNode("✘"));
    li.appendChild(deleteBtn);

    userInput.value = "";
    saveToDo()

}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('done');
        saveToDo();
    } 
    else if (e.target.className === "deleteBtn") {
        e.target.parentElement.remove()
        saveToDo();

    }
})

toDoForm.addEventListener('click', function(e) {
    e.preventDefault();
    if (userInput.value.length > 0) {
    addNewItem();
    }
   
})

// LOCAL STORAGE
//==============
function saveToDo() {
    localStorage.setItem('toDo', listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('toDo');
}

showTask();






