const apiKey = "e52a457e963f7dc1ca3761b56e941247";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputArea = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const temperatureElement = document.getElementById("temp");
const cityElement = document.getElementById("city");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const weatherIconElement = document.getElementById("weatherIcon");

function getValidCityName() {
    const storeCity = inputArea.value.trim();
    if (storeCity === "") {
        alert("Enter the city name!")
    } else {
        return storeCity;
    }
}

function handleWeatherSearch() {
    const cityName = getValidCityName();
    inputArea.value = "";
    if (cityName === undefined) {
        return;
    }
    else { fetchWeatherData(cityName) }
}

searchBtn.addEventListener("click", function () {
    handleWeatherSearch()
})

inputArea.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        handleWeatherSearch()
    }
})

async function fetchWeatherData(cityName) {
    const completeUrl = `${apiUrl}` + `${cityName}` + "&appid=" + `${apiKey}`;
    const response = await fetch(completeUrl);      // fetch returns a promise. Hence, using the await bcs getting promise takes time
    // console.log(response);

    if (response.ok) {
        const data = await response.json();         // response.json also returns a promise
        console.log(data);
        updateWeatherUI(data);                      // data is passed as parameter and it is called
    } 
    
    else if(response.status === 404){
        alert("City not found");
    }

    else {
        alert("Pls try again")
    }
}

function updateWeatherUI(data) {
    cityElement.innerText = data.name;
    temperatureElement.innerText = `${Math.round(data.main.temp)}` + "°c";
    humidityElement.innerText = `${(data.main.humidity)}` + "%";
    windElement.innerText = `${Math.round(data.wind.speed)}` + "kmph";
    const weatherCondition = data.weather[0].main;
    updateWeatherIcon(weatherCondition);
}

function updateWeatherIcon(weatherCondition) {
    console.log(`The weather codition is, ${weatherCondition}`)
    if (weatherIcon[weatherCondition] === undefined) {
        weatherIconElement.src = weatherIcon.default;
    } else {
        weatherIconElement.src = weatherIcon[weatherCondition];
    }
}

const weatherIcon = {
    Clear: "images/clear.png",
    Clouds: "images/clouds.png",
    Drizzle: "images/drizzle.png",
    Mist: "images/mist.png",
    Rain: "images/rain.png",
    Snow: "images/snow.png",
    default: "images/search.png"
}

