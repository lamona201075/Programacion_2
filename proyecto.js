const readlineSync = require('readline-sync');


let maletamp = [];
let numeroMayor = 0; // Inicializamos el número mayor fuera del bucle

for (contadorMaletas = 1; contadorMaletas < 2; contadorMaletas++) {


    let origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);
    if(origenMaleta.length == 0){
        console.error(`El origen de la maleta no puede estar vacio. `);
        contadorMaletas--; // resta al contador el recuento
        continue;
    }else{
        console.info(`Origen registrado!`)
    }

    let numVuelo = readlineSync.question(`Ingrese el numero del vuelo: `);
        if(isNaN(numVuelo) || numVuelo <= 0){
            console.error(`El numero del vuelo no puede estar vacio`);
            contadorMaletas--;
            continue 
        }else{
            console.info(`Numero de vuelo registrado.`)  
        }

    let pesoMaleta = readlineSync.question(`Ingrese el peso de la maleta en KG: `); 
    if (isNaN(pesoMaleta) || pesoMaleta <= 0) {
        console.error(`El peso de la maleta debe ser un numero positivo. `);
        contadorMaletas--;
        continue;
    } else {

        maletamp.push(pesoMaleta);
        const limitePeso = 23;
        const costoExtra = 5000;
        const kilosExtra = pesoMaleta - limitePeso;

        if (pesoMaleta <= limitePeso) {
            console.log(`No hay exceso de peso, el valor de la maleta es de 20.000 `);
        } else {
            let costoAdicional = kilosExtra * costoExtra;
            console.log(`El costo adicional por exceder el límite de peso es:   ${costoAdicional}  pesos.`);
        }
    }

    let genero = readlineSync.question(`Ingrese si el duenio de la maleta es hombre(h) o mujer(m): ` );
     if (genero === `h`) {
        console.log(`El propietario de la maleta es hombre`);
    } else if (genero === `m`) {
            console.log(`El propietario de la maleta es mujer.`);
    } else {
        console.error(`Opcion invalida. Por favor, ingrese "h" para hombre y "m" para mujer`);
        contadorMaletas--;
    }


    const destinos = [`San Andres`, `Pereira`, `Medellin`, `Cali`, `Manizales`, `Barranquilla`, `Bogota`];
    console.log(destinos)
    const destinoPromo = `Cali`;
    const valMaleta = 20000;
    let ciudadPasajero = readlineSync.question(`Ingrese a cual de los destinos se dirige: `);
        if (ciudadPasajero === destinoPromo) {
            const descuento = valMaleta * 0.15;
            const totalDescuento = valMaleta - descuento;
            console.log(`¡Se aplicó descuento del 15% en el equipaje!`);
            console.log(`Su total a pagar por el equipaje es de: ${totalDescuento} pesos.`);
        } else {
            console.log(`No hay promocion de equipaje para este destino.`);
        }

    console.info(`Maleta Num: ${contadorMaletas} registrada exitosamente!`);
}
   