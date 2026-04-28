const apiKey = "e52a457e963f7dc1ca3761b56e941247";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const tempData = document.getElementById("temp");
const cityName = document.getElementById("city");
const humidityPercentage = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const imgUpdate = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", function (params) {
    checkWeather(searchBox.value)
})

searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value)
    }
})

// checkWeather("bengaluru")

async function checkWeather(city) {       // async tell the browser that the data fetched from the api can take time. so dont wait for this function to finish and keep stuck and not running the next script code
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);      // await only works under the async and await tell the browser that dont jump to the next line of code until i bring the data (the delay in data can be due to the slow internet connection or the slow server) .fetch is like the postman, it goes to the url mentiond and brings all the data
    var data = await response.json();           // the data which the fetch brings is in the form of a long string. ".json()" converts the long string into the json format and make the data a js object. so that we can use the "data.name" or "data.main.temp" to extract the required data from the json or the object
    console.log(data)

    if (response.status == 404) {
        alert("invalid city name");
        searchBox.value = "";
        return;
    }

    if (data.weather[0].main == "Rain") {
        imgUpdate.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Clouds") {
        imgUpdate.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        imgUpdate.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        imgUpdate.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        imgUpdate.src = "images/mist.png"
    }
    else {
        imgUpdate.src = "images/snow.png"
    }

    tempData.innerText = (Math.round(data.main.temp)) + "°c"
    cityName.innerText = data.name
    humidityPercentage.innerText = (data.main.humidity) + "%"
    windSpeed.innerText = (Math.round(data.wind.speed)) + "km/h"
}

//add the local storagae part here and the location access permission
