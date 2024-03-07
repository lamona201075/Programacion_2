const readlineSync = require('readline-sync');
let numaletas = 0;
const tope = 3;
let maletamp = [];

while (numaletas < tope){
    
    let origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);

    let numVuelo = +readlineSync.question(`Ingrese el numero del vuelo: `);
    numVuelo = parseInt(numVuelo);

    let maletamp = [];
    let pesoMaleta = readlineSync.question(`Ingrese el peso de la maleta en KG: `);
    maletamp.push(parseFloat(pesoMaleta)); 
    if(pesoMaleta.length == 0){
        console.error(`El peso de la maleta no puede ser cero`);
    }
    else
    {   
        const limitePeso = 23;
        const costoExtra = 5000;
        const kilosExtra = pesoMaleta - limitePeso;
        if(pesoMaleta < 23){
            console.log(`No hay exceso de peso, el valor de la maleta es de 20.000 `);
        }else{
            let costoAdicional = kilosExtra * costoExtra;
            console.log("El costo adicional por exceder el límite de peso es: " + costoAdicional + " pesos.");
        }

        let genero = readlineSync.question(`Ingrese si el duenio de la maleta es hombre o mujer:  ` );
        if (genero == `hombre`){
            console.log(`El propietario de la maleta es hombre`);
        }else if (genero == `mujer`){
            console.log(`El propietario de la maleta es mujer. `);
        }
    }

    const destinos = [`San Andres`, `Pereira`, `Medellin`, `Cali`, `Manizales`, `Barranquilla`, `Bogota`];
    console.log(destinos)
    const destinoPromo = `Cali`;
    const valMaleta = 20000;
    let ciudadPasajero = readlineSync.question(`Ingrese a cual de los destinos se dirige:  `);
    if(ciudadPasajero === destinoPromo){
        const descuento = valMaleta*0.15;
        const totalDescuento = valMaleta - descuento;
        console.log(`!Se aplico descuento del 15% en el equipaje¡`);
        console.log(`Su total a pagar por el equipaje es de: `+totalDescuento+ `pesos.`);
    } else {
        console.log(`No hay promocion de equipaje para este destino. `);
    }

    let numeroMayor = maletamp[0]; // Supongamos que el primer número es el mayor por ahora

    for (let i = 1; i < maletamp.length; i++) {
        if (maletamp[i] > numeroMayor) {
            numeroMayor = maletamp[i];
        }
}


    
}



console.log(numeroMayor)