let now = new Date();
let currentDate = document.querySelector("p");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}
currentDate.innerHTML = `${day} ${hour}:${minute}`;

function displayWeather(response) {
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#currentTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function place(event) {
  event.preventDefault();
  let apiKey = "4e90fb6f67e7658d1094eddbcb1d7180";
  let cityName = document.querySelector("#city-value").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}
let city = document.querySelector("#search");
city.addEventListener("submit", place);
