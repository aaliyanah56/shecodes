let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let city = "Landon";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London";


function showTemperature(response){
    console.log(response);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperarure");
    let description = document.querySelector("#temperature-description")
    temperatureElement.innerHTML = response.data.main.temp;
}
axios.get('${apiUrl}&appid=${apiKey}').then(showTemperature);
