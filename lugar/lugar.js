const axios = require('axios');
const apiKey = '65bd9a3114316b085de740509d1fadd5';

const getLugarLatLng = async ( city ) => {
    let dataCity = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            apiKey
        }
    });
    
    
    const data = dataCity.data;
    const direccion = data.name;
    const lat = data.coord.lat;//latitud
    const lon = data.coord.lon;//longitud

    return {
        direccion,
        lat,
        lon
    };
};

module.exports = {
    getLugarLatLng
};