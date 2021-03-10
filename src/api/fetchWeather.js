import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'b2b6a016ec9dd8181f3e44524689eafa'

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