const readlineSync = require('readline-sync');

let contadorDestinos = {};
let pesoTotalMaletas = 0;

for (let contadorMaletas = 1; contadorMaletas < 3; contadorMaletas++) {
    let origenMaleta;
    while (true) {
        origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);
        if (origenMaleta.length === 0) {
            console.error(`El origen de la maleta no puede estar vacío.`);
        } else {
            console.info(`Origen registrado!`);
            break;
        }
    }

    let numVuelo;
    while (true) {
        numVuelo = readlineSync.question(`Ingrese el numero del vuelo: `);
        if (isNaN(numVuelo) || numVuelo <= 0) {
            console.error(`El numero del vuelo debe ser un numero positivo.`);
        } else {
            console.info(`Numero de vuelo registrado.`);
            break;
        }
    }

    let pesoMaleta;
    let precioAntesMaleta = 0;
    const valMaleta = 20000;
    while (true) {
        pesoMaleta = readlineSync.question(`Ingrese el peso de la maleta en KG: `);
        if (isNaN(pesoMaleta) || pesoMaleta <= 0) {
            console.error(`El peso de la maleta debe ser un numero positivo.`);
        } else {
            const limitePeso = 23;
            const costoExtra = 5000;
            const kilosExtra = pesoMaleta - limitePeso;

            if (pesoMaleta <= limitePeso) {
                console.log(`No hay exceso de peso, el valor de la maleta es de ${valMaleta}.`);
            } else {
                let costoAdicional = kilosExtra * costoExtra;
                precioAntesMaleta = valMaleta + costoAdicional;
                console.log(`El costo adicional por exceder el límite de peso es: ${costoAdicional} pesos.`);
            }
            break;
        }
    }

    let genero;
    while (true) {
        genero = readlineSync.question(`Ingrese si el propietario de la maleta es hombre(h) o mujer(m): `);
        if (genero === 'h' || genero === 'm') {
            if (genero === 'h') {
                console.log(`El propietario de la maleta es hombre.`);
            } else {
                console.log(`El propietario de la maleta es mujer.`);
            }
            break;
        } else {
            console.error(`Opcion invalida. Por favor, ingrese "h" para hombre y "m" para mujer`);
        }
    }

    const destinos = [`San Andres`, `Pereira`, `Medellin`, `Cali`, `Manizales`, `Barranquilla`, `Bogota`];
    console.info(destinos)
    const destinoPromo = 'Cali'; // Destino con promoción de equipaje
    let valorFinalMaleta = 0;
    let ciudadPasajero;
    while (true) {
        ciudadPasajero = readlineSync.question(`Ingrese a cual de los destinos se dirige: `);
        //si la ciudad que ingreso el pasajero no se encuentra en la lista aun, se agrega
        if (ciudadPasajero in contadorDestinos) {
            contadorDestinos[ciudadPasajero]++;
        } else {
            // pero si ya se digito una vez, se incrementa 
            contadorDestinos[ciudadPasajero] = 1;
        }
        if (ciudadPasajero === destinoPromo) {
            valorFinalMaleta = precioAntesMaleta * 0.85;
            console.log(`¡Se aplicó descuento del 15% en el equipaje!`);
            console.log(`Su total a pagar por el equipaje es de: ${valorFinalMaleta} pesos.`);
        } else {
            console.log(`No hay promoción de equipaje para este destino.`);
        }
        // se agrega el peso de la maleta al total para mostrarlo l final
        pesoTotalMaletas += Number(pesoMaleta);
        break;
    }

    console.info(`Maleta Num: ${contadorMaletas} registrada exitosamente!`);
    console.info(`Peso de la maleta: ${pesoMaleta}`);
}

// Estos se encuentrar fuera del FOR principal por que solo necesito que me muestre la informacion al final y no despues de cada repeticion del
console.log(`EL PESO TOTAL DE LAS MALETAS ES DE ${pesoTotalMaletas}`);
console.log(`DESTINO AL QUE MAS SE DESPACHARON MALETAS`);
for (let destino in contadorDestinos) {
    console.log(`Se despacharon a ${destino} ${contadorDestinos[destino]} maletas`);
}
