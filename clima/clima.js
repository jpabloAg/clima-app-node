const axios = require('axios');
const appid = '65bd9a3114316b085de740509d1fadd5';

const getClima = async ({ lat, lon }) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};