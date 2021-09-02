
import axios from 'axios'
require('dotenv').config()

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.API_S

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
