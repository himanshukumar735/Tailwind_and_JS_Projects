inputVar = document.getElementById('inputBox');
buttonVar = document.getElementById('addButton');
listContainerVar = document.getElementById('listContainer')

buttonVar.addEventListener("click", registerUserInput)      //addEventListener returns nothing

function registerUserInput(params) {
    if (inputVar.value != "") {
        let data = inputVar.value
        console.log(data);
        list = document.createElement('li')
        list.innerHTML = data

        list.className = "relative pl-8 "


        let spanTag = document.createElement('span')
        spanTag.innerHTML = "\u00d7"
        list.appendChild(spanTag)

        spanTag.className = "absolute right-0 top-0 cursor-pointer mr-4"

        listContainerVar.appendChild(list)

        inputVar.value = "";
    } else {
        alert("Write your task")
    }
}

inputVar.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        registerUserInput();
    }
})

listContainerVar.addEventListener("click", function liRemove(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
    }

})

//Add the local or persistent storage code part here