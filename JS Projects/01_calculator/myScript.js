// alert("It works")
const allButtons = document.querySelectorAll(".btn")        // This gives a node list in the browser
const displayArea = document.getElementById("display")
const buttonsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"]
const numbersOnly = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let calcDone = false

// button.forEach(item => console.log(item));
// allButtons.forEach(item => console.log(item.innerText));

// allButtons.forEach(item => item.addEventListener('click',function(){
//     console.log(item.innerText)
//     displayArea.value = item.innerText
// }))


// wrong code written by me FinalizationRegistryallButtons.forEach(item => item.addEventListener('click', () => {
//     // console.log(item.innerText);

//     let calcDone = false
//     const clickedButton = item.innerText;
//     console.log(`The clicked button is ${clickedButton}`)

//     let displayValue = displayArea.value
//     displayArea.value = displayValue.concat(clickedButton)
//     console.log(`Item displayed in the display is ${displayValue}`)

//     let concatValue = displayValue.concat(clickedButton)
//     console.log(`The concated value is, ${concatValue}`)
//     console.log(`the type of concated value  in the display area is ${typeof concatValue}`)

//     if (clickedButton === "=") {
//         displayArea.value = eval(displayValue)
//         let calcDone = true
//         concatValue = ""
//         displayArea = ""
//     }

// }))

allButtons.forEach(item => item.addEventListener('click', () => {
    const clickedButton = item.innerText;

    // 1. CLEAR SCREEN LOGIC
    if (calcDone === true) {
        displayArea.value = "";
        calcDone = false;
        console.log("--- Previous calculation cleared! Starting fresh. ---");
    }
    let displayValue = displayArea.value;

    // 2. MATH OR CONCATENATION LOGIC
    if (clickedButton === "=") {
        displayArea.value = eval(displayValue);
        calcDone = true;
    }

    if (clickedButton === "DEL") {
        console.log("Delete key is clicked")
        displayArea.value.slice(0, -1)
        console.log(displayArea.value.slice(0, -1))
        displayArea.value = displayArea.value.slice(0, -1)
    } else {
        displayArea.value = displayValue.concat(clickedButton);
        console.log(`The concatened value is ${displayArea.value}`)
    }

}));

document.addEventListener("keydown", function (event) {

    // console.log(event)
    // console.log(`User clicked ${event.key}`)

    if (calcDone === true && numbersOnly.includes(event.key)) {
        displayArea.value = ""
        calcDone = false
    }

    if (event.key === "Backspace") {
        console.log("Backspace is pressed")
        displayArea.value.slice(0, -1)
        console.log(displayArea.value.slice(0, -1))
        displayArea.value = displayArea.value.slice(0, -1)
    }

    let displayValue = displayArea.value

    if (buttonsArray.includes(event.key)) {
        displayArea.value = displayValue.concat(event.key)
        console.log(displayArea.value)
        calcDone = false

        // console.log(displayValue)
    }

    if (event.key == "Enter") {
        displayArea.value = eval(displayValue)
        calcDone = true
    }

})

