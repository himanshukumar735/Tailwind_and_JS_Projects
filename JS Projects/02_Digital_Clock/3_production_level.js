const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')
const AMPM = document.getElementById('ampm')


const dateAddOn = document.getElementById('date')
const monthAddOn = document.getElementById('month')
const yearAddOn = document.getElementById('year')
const dayAddOn = document.getElementById('day')

const dayArray = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"]

function digitalClock() {
    // console.log("The function is executed every second")
    const myobj = new Date()

    let h = myobj.getHours()
    let m = myobj.getMinutes()
    let s = myobj.getSeconds()
    let date = myobj.getDate()
    let month = myobj.getMonth()
    let year = myobj.getFullYear()
    let day = myobj.getDay()

    if (h >= 20 || h <= 6) {
        document.body.classList.add("night-bg")
        document.body.classList.remove("day-bg")
    } else {
        document.body.classList.add("day-bg")
        document.body.classList.remove("night-bg")
    }

    dayAddOn.innerHTML = dayArray[day]

    month = month + 1

    if (h >= 12) {              //h > 11 can also be right
        AMPM.innerHTML = "PM"
    }
    else {
        AMPM.innerHTML = "AM"
    }


    if (h == 0) {
        h = 12
    }

    if (h > 12) {
        h = h - 12
    }

    if (h < 10) {
        h = "0" + h
    }

    if (m < 10) {
        m = "0" + m
    }

    if (s < 10) {
        s = "0" + s
    }

    if (date < 10) {
        date = "0" + date
    }

    if (month < 10) {
        month = "0" + month
    }

    hourHand.innerHTML = h
    minuteHand.innerHTML = m
    secondHand.innerHTML = s

    dateAddOn.innerHTML = date
    monthAddOn.innerHTML = month
    yearAddOn.innerHTML = year

}
digitalClock()
setInterval(digitalClock, 1000)