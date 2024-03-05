const readlineSync = require('readline-sync');
do 
{
    let origenMaleta = readlineSync.question(`Ingrese el origen de la maleta: `);

    let numVuelo = readlineSync.question(`Ingrese el número del vuelo: `);
    numVuelo = parseInt(numVuelo);

    let destino = readlineSync.question(`Ingrese el destino al que viaja: `);
    let pesoMaleta = readlineSync.question(`Ingrese el peso de la maleta en KG: `);
    let generoDuemal = readlineSync.question(`Ìngrese el género del dueño de la maleta F/M: ` );

     // Lógica para determinar si el usuario desea continuar ingresando información
     let sigMaleta = readlineSync.question(`¿Desea ingresar información para otra maleta? (s/n): `);
     if (sigMaleta.toLowerCase() !== 's') {
         continuar = false;
    

}
