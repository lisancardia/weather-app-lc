function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=New York&appid=7784a4cd4aa2e0c25ead7bd96d585b8a&units=metric';

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

