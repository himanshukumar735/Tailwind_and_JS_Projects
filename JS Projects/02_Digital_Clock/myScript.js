const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const showDate = () => {
    const dateObj = new Date();

    date.innerHTML = dateObj.getDate();

    let takeMonth = dateObj.getMonth();
    console.log(typeof takeMonth)
    takeMonth += 1;
    month.innerHTML = takeMonth
    year.innerHTML = dateObj.getFullYear();

    // let datePad = date.innerHTML.padStart(2, "0");
    // date.innerHTML = datePad

    // let takeDate = dateObj.getDate();
    // console.log(typeof takeDate)
    // dateString = takeDate.toString();
    // console.log(typeof dateString)
    // const storePadDate = dateString
    // const finalPadDate = storePadDate.padStart(2, "0")
    // console.log(finalPadDate)
    // date.innerHTML = finalPadDate

    // 5 line to single line. do this others also like hours, minutes, and seconds
    date.innerHTML = String(dateObj.getDate()).padStart(2, "0");

    // let datePad = date.innerHTML.padStart(2, "0");
    // date.innerHTML = datePad

    // let storeDate = dateObj.getDate();
    // console.log(`The date is, ${storeDate}`)
    // datePad = storeDate.padStart(2, "0");

    let monthPad = month.innerHTML.padStart(2, "0");
    month.innerHTML = monthPad
}

showDate()
setInterval(showDate, 3600000)

const showTime = () => {
    const time = new Date();
    // console.log(typeof time)
    // console.log(time);

    hourHand.innerHTML = time.getHours();
    minuteHand.innerHTML = time.getMinutes();
    secondHand.innerHTML = time.getSeconds();

    // console.log(typeof hourHand.innerHTML)      // String type
    // console.log(typeof time.getHours())         // Number type  

    let secondPad = secondHand.innerHTML.padStart(2, "0");
    secondHand.innerHTML = secondPad;

    let minutePad = minuteHand.innerHTML.padStart(2, "0");
    minuteHand.innerHTML = minutePad;

    let hourPad = hourHand.innerHTML.padStart(2, "0");
    hourHand.innerHTML = hourPad;
}

showTime()
console.log(setInterval(showTime, 1000));
