const readlineSync = require('readline-sync');

let contadorMaletas = 0;
let contadorGeneroFemenino = 0;
let contadorGeneroMasculino = 0;

function IngresarMaleta(){

    let origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);
    if(origenMaleta.length == 0){
        console.error(`El origen de la maleta no puede estar vacio`);
    }
    else
    {
        let numVuelo = readlineSync.question(`Ingrese el numero del vuelo: `);
        if(isNaN(numVuelo)){
            console.error(`El numero del vuelo no puede estar vacio`);
        }
        else if(numVuelo <= 0){
            console.error(`El numero del vuelo debe ser un numero positivo`);
        }
        else {
            
        }
    }



    



/* Calcular el número mayor después de salir del bucle
for (let i = 0; i < maletamp.length; i++) {
    if (maletamp[i] > numeroMayor) {
        numeroMayor = maletamp[i];
    }
}
console.log("El número mayor de las maletas ingresadas es:", numeroMayor);/
}