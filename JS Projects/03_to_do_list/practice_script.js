const taskInput = document.getElementById("inputBox");
const addBtn = document.getElementById("addButton")
const liContainer = document.getElementById("listContainer")

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        registerUserClick()
    }
})

addBtn.addEventListener("click", registerUserClick)
function registerUserClick(params) {
    let taskValue = taskInput.value
    // console.log(taskValue)

    if (taskValue === "") {
        alert("pls enter the task")
    }

    else {
        let createLi = document.createElement("li")
        createLi.innerHTML = taskValue
        // console.log("the liValue is", liValue.innerText)
        liContainer.appendChild(createLi)
        createLi.className = "flex justify-between "

        let buttonTag = document.createElement("button")
        buttonTag.innerText = "x"
        createLi.appendChild(buttonTag)
        buttonTag.className = "text-red-500 bg-white rounded-full "

        taskInput.value = ""

        saveData()
        // console.log(savedTask.innerHTML)

    }
}

function saveData(params) {
    localStorage.setItem("savedTask", liContainer.innerHTML)
    localStorage.setItem("savedData", liContainer.innerHTML);
    console.log("Current Storage HTML:", liContainer.innerHTML);
}

liContainer.addEventListener("click", function (e) {
    e.target
    console.log("The target element is", e.target.tagName)
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
        saveData()
        // console.log("The parent element which deleted is", e.target.parentElement)
    }
    else if (e.target.tagName === "LI") {
        console.log(e.target.tagName);
        e.target.classList.toggle("line-through")
        saveData()
    }
})

function showTask() {
    liContainer.innerHTML = localStorage.getItem("savedTask");
}

showTask()