import { question } from "readline-sync";
import  { displayInfo , fetchWeatherApi} from "./OpenMeteo.mjs";


const params = {
    latitude: question("Enter latitude of the place"),
    longitude: question("Enter longitutde of the place"),
    current: "temperature_2m",
  };

  const url = "https://api.open-meteo.com/v1/forecast";

const responses = await fetchWeatherApi(url,params)

const currentWeather = responses.current;

displayInfo(currentWeather, responses);


