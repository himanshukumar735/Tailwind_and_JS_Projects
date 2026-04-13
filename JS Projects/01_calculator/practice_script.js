const displayArea = document.getElementById('display')
const buttonList = document.querySelectorAll('button')      // This gives a node list of all the buttons
let displayInput = ""
let isResultOnScreen = false
var operatorArray = ["+", "-", "*", "/"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"]

buttonList.forEach(function calcLogic(btn) {
    btn.addEventListener('click', function handleButtonClick(showButton) {
        pressedKey = showButton.target.innerText
        if (pressedKey === "C") {
            displayInput = ""
            displayArea.value = ""
            console.log("The display area is cleaned")
        }

        else if (pressedKey === "DEL") {
            displayInput = displayInput.slice(0, -1)
            displayArea.value = displayInput
            console.log(displayInput)
        }

        else if (pressedKey === "=") {

            try {
                let output = eval(displayInput)
                if (output === Infinity || output === -Infinity) {
                    alert("You cant divide a number by 0")
                    displayInput = ""
                    displayArea.value = displayInput
                }
                displayArea.value = output
                displayInput = output.toString()
            } catch (error) {
                displayArea.value = "Error"
            }
            isResultOnScreen = true
        }

        else if (isResultOnScreen === true && numberArray.includes(pressedKey)) {
            displayInput = ""
            displayArea.value = displayInput
            displayInput = pressedKey
            isResultOnScreen = false
        }

        else if (pressedKey === "%") {
            displayInput = eval(displayInput)
            displayInput = displayInput / 100
            console.log("%")
            displayInput = displayInput.toString()      //Converted the input to string bcs slice() works on string not on number
            displayArea.value = displayInput
            isResultOnScreen = false;
        }
        else {
            isResultOnScreen = false;   
            if (operatorArray.includes(pressedKey) && operatorArray.includes(displayInput.slice(-1))) {
                displayInput = displayInput.slice(0, -1)
                displayInput = displayInput + pressedKey

            }
            else {
                displayInput = displayInput + pressedKey
            }
        }
        console.log(displayInput)
        displayArea.value = displayInput
    })
})

