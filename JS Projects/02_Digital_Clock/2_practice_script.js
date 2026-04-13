const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')
const AMPM = document.getElementById('ampm')

function digitalClock(params) {
    const myObj = new Date()        // Date is an object 

    hourHand.innerHTML = myObj.getHours()
    minuteHand.innerHTML = myObj.getMinutes()
    secondHand.innerHTML = myObj.getSeconds()

    if (hourHand.innerHTML > 12) {
        AMPM.innerHTML = "AM"
    }
    else {
        AMPM.innerHTML = "PM"
    }

    if (hourHand.innerHTML > 12) {
        hourHand.innerHTML = hourHand.innerHTML - 12
    }

    if (hourHand.innerHTML == 0) {
        hourHand.innerHTML = 12
    }

    if (hourHand.innerHTML < 10) {
        hourHand.innerHTML = 0 + hourHand.innerHTML
    }

    if (secondHand.innerHTML < 10) {
        secondHand.innerHTML = 0 + secondHand.innerHTML
    }

    if (minuteHand.innerHTML < 10) {
        minuteHand.innerHTML = 0 + minuteHand.innerHTML
    }

}

setInterval(digitalClock, 1000)

