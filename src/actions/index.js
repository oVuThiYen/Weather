
import axios from 'axios'

const API_KEY = 'b02f149ed2b40a802f7d19d262b629a7';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${URL}&q=${city},us`
  const request = axios.get(url);
  console.log(request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
