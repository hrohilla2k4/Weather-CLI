import { question } from "readline-sync";
import fetchWeatherApi from "./OpenMeteo.mjs";


const params = {
    latitude: question("Enter latitude of the place"),
    longitude: question("Enter longitutde of the place"),
    current: "temperature_2m",
  };

fetchWeatherApi('https://api.open-meteo.com/v1/forecast',params )

