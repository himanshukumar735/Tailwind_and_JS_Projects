const addBtn = document.getElementById("addButton");
const userInput = document.getElementById("inputBox");
const getUl = document.getElementById("listContainer");

addBtn.addEventListener('click', function () {
    storeInput = userInput.value;
    console.log(storeInput);

    if (userInput.value != "") {
        var liCreation = document.createElement('li');
        liCreation.textContent = storeInput;
        liCreation.className = "flex justify-between items-center bg-white rounded-lg px-4 py-2 mb-2 shadow";
        console.log(liCreation);
        console.log(`The item in the list is, ${liCreation.textContent}`);
        getUl.appendChild(liCreation);
        console.log(getUl);

        liCreation.addEventListener('click', function () {
            liCreation.classList.add("line-through", "text-gray-500");
        })

        var buttonCreation = document.createElement('button');
        buttonCreation.textContent = "x";
        buttonCreation.className = "bg-red-500 text-white rounded-full w-7 h-7 font-bold hover:bg-red-600";
        liCreation.appendChild(buttonCreation);
        console.log(buttonCreation);

        buttonCreation.addEventListener('click', function () {
            getUl.removeChild(liCreation);
            console.log("Delete button is clicked");
        })
    }
    else {
        alert("Enter a task!")
    }

    userInput.value = "";
})

// Local storage
// Syntax- ourStorage = window.localStorage;
