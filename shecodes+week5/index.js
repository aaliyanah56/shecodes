function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    console.log(response);
    let city = response.data.name;
    let message = `It is ${temperature} degrees in ${city}`;
    let h1 = document.querySelector("h1");
    h1.innerHTML = message;
  }
  
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let city = "sydney";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(showTemperature);
  