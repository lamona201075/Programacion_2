const readlineSync = require('readline-sync');
let numaletas = 0;
const tope = 10;

while (numaletas < tope){

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
        
    
    }
    
    /*let destino = readlineSync.question(`Ingrese el destino al que viaja: `);
    let origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);
    el + al principio convierte en numero 
    let numVuelo = +readlineSync.question(`Ingrese el numero del vuelo: `);
    numVuelo = parseInt(numVuelo);
    let generoDuemal = readlineSync.question(`Ingrese el genero del duenio de la maleta F/M: ` );

    numaletas = numaletas + 1;*/

}


    

