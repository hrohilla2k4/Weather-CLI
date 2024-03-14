import fetch from "node-fetch";

export const fetchWeatherApi = async (url, params) => {
  const response = await fetch(url + "?" + new URLSearchParams(params));
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};


export const displayInfo = (currentWeather, responses) => {
  console.log(currentWeather)
  console.log("Current Weather Data:");
  console.log("Time:", currentWeather.time);
  console.log("Temperature (2m):", currentWeather.temperature_2m);

  const timezone = responses.timezone;
  const latitude = responses.latitude;
  const longitude = responses.longitude;
  console.log("Timezone:", timezone);
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
}


