const axios = require('axios');
const getClimaLatLng = async (latParam, lonParam) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${latParam}&lon=${lonParam}&appid=bf2e16ab33a7e8f5a8cea1e48c5aeafb&units=metric`,
        headers: { 'x-rapidapi-key': 'bb5e8e3448msh73c32c0a61b1efcp1ecc21jsnd778830ac815' }
    });

    const resp = await instance.get()

    return resp.data.main.temp
    console.log(resp)


}

module.exports = {
    getClimaLatLng
}
