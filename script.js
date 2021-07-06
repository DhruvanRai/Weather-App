let checkbutton = document.getElementById("check-button");
let getcityname = document.getElementById("cityname");

async function getWeather(event) {
  event.preventDefault();
  let cityname = getcityname.value;
  if (cityname == "") {
    alert("Enter City name");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=b9265c2c33e29a0115df0610439f899b`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(url);
      console.log(data);
      let celsius = data.main.temp;
      let yourCityName = data.name;
      let countryName = data.sys.country;
      let humidity = data.main.humidity;
      let weather = data.weather[0].main;
      let weatherDec = data.weather[0].description;
      document.getElementById(
        "yourCityName-here"
      ).innerHTML = `${yourCityName} `;
      document.getElementById("countryName-here").innerHTML = `${countryName} `;
      document.getElementById("temp-here").innerHTML = `${celsius.toFixed(
        0
      )}°C `;
      document.getElementById("humidity-here").innerHTML = `${humidity}% `;
      document.getElementById("weather-here").innerHTML = `${weather} `;
      document.getElementById("weather-dec-here").innerHTML = `${weatherDec} `;
    } catch (error) {
      alert("Please Check Your City Name and Try Again.");
    }
  }
}

checkbutton.addEventListener("click", getWeather);
