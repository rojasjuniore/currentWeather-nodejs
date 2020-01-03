const axios = require('axios');
const getlugarLatLng = async (param) => {
    const encodeUrl = encodeURI(param)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'bb5e8e3448msh73c32c0a61b1efcp1ecc21jsnd778830ac815' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${param}`)
    }

    const data = resp.data.Results[0]
    const address = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        address,
        lat,
        lng
    }

}

module.exports = {
    getlugarLatLng
}
