const addBtn = document.getElementById("addButton");
const userInput = document.getElementById("inputBox");
const taskListContainer = document.getElementById("listContainer");

let taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];

for (const item of taskArray) {

    let liCreation = document.createElement("li");
    liCreation.textContent = item.text;
    liCreation.className = "flex justify-between items-center bg-white rounded-lg px-4 py-2 mb-2 shadow";

    taskListContainer.append(liCreation);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "x";
    deleteButton.className = "bg-red-500 text-white rounded-full w-7 h-7 font-bold hover:bg-red-600";

    liCreation.appendChild(deleteButton);

    if (item.completed == true) {
        liCreation.classList.add("line-through", "text-gray-500");
    }

    deleteButton.addEventListener('click', function () {

        const index = taskArray.indexOf(item);

        taskArray.splice(index, 1);

        taskListContainer.removeChild(liCreation);

        localStorage.setItem('taskArray', JSON.stringify(taskArray));

    });

    liCreation.addEventListener('click', function () {

        if (item.completed == false) {
            item.completed = true;
            liCreation.classList.add("line-through", "text-gray-500");
        }
        else {
            item.completed = false;
            liCreation.classList.remove("line-through", "text-gray-500");
        }

        localStorage.setItem('taskArray', JSON.stringify(taskArray));

    });
}

addBtn.addEventListener('click', function () {

    let storeInput = userInput.value;

    if (userInput.value != "") {

        let taskObj = {
            text: storeInput,
            completed: false
        };

        let liCreation = document.createElement('li');
        liCreation.textContent = storeInput;
        liCreation.className = "flex justify-between items-center bg-white rounded-lg px-4 py-2 mb-2 shadow";

        taskListContainer.appendChild(liCreation);

        taskArray.push(taskObj);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = "x";
        deleteButton.className = "bg-red-500 text-white rounded-full w-7 h-7 font-bold hover:bg-red-600";

        liCreation.appendChild(deleteButton);

        localStorage.setItem('taskArray', JSON.stringify(taskArray));

        liCreation.addEventListener('click', function () {

            if (taskObj.completed == false) {
                taskObj.completed = true;
                liCreation.classList.add("line-through", "text-gray-500");
            }
            else {
                taskObj.completed = false;
                liCreation.classList.remove("line-through", "text-gray-500");
            }

            localStorage.setItem('taskArray', JSON.stringify(taskArray));

        });

        deleteButton.addEventListener('click', function () {

            const index = taskArray.indexOf(taskObj);

            taskArray.splice(index, 1);

            taskListContainer.removeChild(liCreation);

            localStorage.setItem('taskArray', JSON.stringify(taskArray));

        });

    }
    else {

        alert("Enter a task!");

    }

    userInput.value = "";

});