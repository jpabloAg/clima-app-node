const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async ( direccion ) => {
    try{
        const coordenadas = await lugar.getLugarLatLng( direccion );
        const temperatura = await clima.getClima( coordenadas );
        return `El clima de ${ coordenadas.direccion } es de ${ temperatura }`
    }catch(err){
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo( argv.direccion )
    .then( resp => console.log(resp))
    .catch( err => console.log(err));