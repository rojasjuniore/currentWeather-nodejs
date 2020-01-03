
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'direccion de la cliudad el clima',
        demand: true
    }
}).argv


console.log(1, argv.address);
lugar.getlugarLatLng(argv.address)
    .then((data) => {
        console.log(2, "getlugarLatLng", data)
        clima.getClimaLatLng(data.lat, data.lng)
            .then(res => {
                console.warn(`El clima de ${argv.address} es ${res} `)
            })
            .catch(console.log)
    }).catch(err => console.log)




