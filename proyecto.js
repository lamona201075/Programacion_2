const readlineSync = require('readline-sync');
let numaletas = 0;
const tope = 10;

while (numaletas < tope){
    let origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);

    let numVuelo = +readlineSync.question(`Ingrese el numero del vuelo: `);
    numVuelo = parseInt(numVuelo);

    let pesoMaleta = readlineSync.question(`Ingrese el peso de la maleta en KG: `);
    if(pesoMaleta.length == 0){
        console.error(`El peso de la maleta no puede ser cero`);
    }
    else
    {   
        const limitePeso = 23;
        const costoExtra = 20000;
        const kilosExtra = pesoMaleta - limitePeso;
        if(pesoMaleta < 23){
            console.log(`No hay exceso de peso`);
        }else{
            let costoAdicional = kilosExtra * costoExtra;
            console.log("El costo adicional por exceder el límite de peso es: " + costoAdicional + " pesos.");
        }

        let genero = readlineSync.question(`Ingrese si el duenio de la maleta es hombre o mujer:  ` );
        if (genero == `hombre`){
            console.log(`El propietario de la maleta es hombre`);
        }else if (genero == `mujer`){
            console.log(`El duenio de la maleta es mujer. `);
        }
    }

    /*
    el + al principio convierte en numero 
    
    let destino = readlineSync.question(`Ingrese el destino al que viaja: `);

    numaletas = numaletas + 1;*/

}


    

