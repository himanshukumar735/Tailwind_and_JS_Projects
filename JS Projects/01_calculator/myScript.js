// alert("It works")
const allButtons = document.querySelectorAll(".btn")        // This gives a node list in the browser
const displayArea = document.getElementById("display")
const buttonsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"]

// button.forEach(item => console.log(item));
// allButtons.forEach(item => console.log(item.innerText));

// allButtons.forEach(item => item.addEventListener('click',function(){
//     console.log(item.innerText)
//     displayArea.value = item.innerText
// }))

allButtons.forEach(item => item.addEventListener('click', () => {
    // console.log(item.innerText);

    const clickedButton = item.innerText;
    console.log(`The clicked button is ${clickedButton}`)

    let displayValue = displayArea.value
    displayArea.value = displayValue.concat(clickedButton)
    console.log(`Item displayed in the display is ${displayValue}`)

    let concatValue = displayValue.concat(clickedButton)
    console.log(`The concated value is, ${concatValue}`)

    if (clickedButton === "=") {
        displayArea.value = eval(displayValue)
    }

}))

document.addEventListener("keydown", function (event) {

    console.log(event)
    console.log(`User clicked ${event.key}`)

    let displayValue = displayArea.value

    if (buttonsArray.includes(event.key)) {
        displayArea.value = displayValue.concat(event.key)
        console.log(displayValue)
    }

    if (event.key == "Enter") {
        displayArea.value = eval(displayValue)
    }

})
