import fetch from "node-fetch";

const fetchWeatherApi = async (url, params) => {
  const response = await fetch(url + "?" + new URLSearchParams(params));
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const params = {
  latitude: 28.993082, 
  longitude: 77.015076, 
  current: "temperature_2m", 
};

const url = "https://api.open-meteo.com/v1/forecast";

const responses = await fetchWeatherApi(url, params);

const currentWeather = responses.current;
console.log("Current Weather Data:");
console.log("Time:", currentWeather.time);
console.log("Temperature (2m):", currentWeather.temperature_2m);
console.log("Wind Speed (10m):", currentWeather.wind_speed_10m);

const timezone = responses.timezone;
const latitude = responses.latitude;
const longitude = responses.longitude;
console.log("Timezone:", timezone);
console.log("Latitude:", latitude);
console.log("Longitude:", longitude);
