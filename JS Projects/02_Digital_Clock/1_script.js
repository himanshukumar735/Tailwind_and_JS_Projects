const hourSpan = document.getElementById('hour')
const minuteSpan = document.getElementById('minute')
const secondSpan = document.getElementById('second')
const am = document.getElementById('ampm')

function updateClock() {
    const time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if (h < 12) {
        am.innerText = "AM"
    } else {
        am.innerText = "PM"
    }

    if (h > 12) {
        h = h - 12
    }

    if (h === 0) {
        h = 12
    }

    if (s < 10) {
        s = "0" + s
    }

    if (m < 10) {
        m = "0" + m
    }

    if (h < 10) {
        h = "0" + h
    }


    hourSpan.textContent = h
    minuteSpan.textContent = m
    secondSpan.textContent = s


}

setInterval(updateClock, 1000)
