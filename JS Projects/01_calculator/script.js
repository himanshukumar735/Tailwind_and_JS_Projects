const displayArea = document.getElementById('display');
const buttonArea = document.querySelectorAll('.btn');     // This gives a node list
let currentInput = "";

buttonArea.forEach(function (button) {                      // Applying for each loop on the buttons
    button.addEventListener('click', function (e) {         // Using the event listener to listen or catch which number or button is clicked
        console.log(e.target.innerHTML);                    // This is for developer
        if (e.target.innerHTML === 'C') {
            displayArea.value = "";
            currentInput = "";
        }
        else if (e.target.innerHTML === '=') {
            let result = eval(currentInput)
            currentInput = result
            displayArea.value = currentInput
            currentInput = result.toString()
        }

        else if (e.target.innerHTML === '?') {
            alert("This is my first project made using js")
        }

        else {
            currentInput = currentInput + e.target.innerHTML;
            displayArea.value = currentInput;
        }
    });
});
