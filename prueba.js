const readlineSync = require('readline-sync');

let totalPesoHombres = 0;
let totalPesoMujeres = 0;
let cantidadMaletasHombres = 0;
let cantidadMaletasMujeres = 0;

for (let contadorMaletas = 1; contadorMaletas < 3; contadorMaletas++) {
    // Tu código para ingresar datos de la maleta ...

    let pesoMaleta = parseFloat(readlineSync.question(`Ingrese el peso de la maleta en KG: `));

    // Tu código para determinar el género del propietario de la maleta ...

    if (genero === 'h') {
        totalPesoHombres += pesoMaleta;
        cantidadMaletasHombres++;
    } else if (genero === 'm') {
        totalPesoMujeres += pesoMaleta;
        cantidadMaletasMujeres++;
    }

    // Tu código para el resto del proceso de ingreso de datos ...
}

// Calcular el promedio de peso de las maletas por género
const promedioPesoHombres = cantidadMaletasHombres === 0 ? 0 : totalPesoHombres / cantidadMaletasHombres;
const promedioPesoMujeres = cantidadMaletasMujeres === 0 ? 0 : totalPesoMujeres / cantidadMaletasMujeres;

// Mostrar resultados
console.log(`Promedio de peso de las maletas para hombres: ${promedioPesoHombres.toFixed(2)} KG`);
console.log(`Promedio de peso de las maletas para mujeres: ${promedioPesoMujeres.toFixed(2)} KG`);
