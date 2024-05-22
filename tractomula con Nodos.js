const readlineSync = require('readline-sync');

// Clase Camion
class Camion {
    constructor(conductor, generoConductor, ciudadOrigen, ciudadDestino, consumoGasolina, toneladasCarga, modelo, avaluo, marca, anosAntiguedad) {
        if (!conductor || typeof conductor !== 'string') {
            throw new Error('El camión debe tener un conductor válido');
        }
        if (!generoConductor || typeof generoConductor !== 'string') {
            throw new Error('El conductor debe tener un género válido');
        }
        if (!ciudadOrigen || typeof ciudadOrigen !== 'string') {
            throw new Error('Debe haber una ciudad de origen');
        }
        if (!ciudadDestino || typeof ciudadDestino !== 'string') {
            throw new Error('Debe tener una ciudad de destino');
        }
        if (isNaN(consumoGasolina) || consumoGasolina <= 0) {
            throw new Error('La gasolina debe tener un valor numérico positivo');
        }
        if (isNaN(toneladasCarga) || toneladasCarga <= 0) {
            throw new Error('Las toneladas deben tener un valor numérico positivo');
        }
        if (!modelo || typeof modelo !== 'string') {
            throw new Error('El camión debe tener un modelo válido');
        }
        if (isNaN(avaluo) || avaluo <= 0) {
            throw new Error('El avalúo del camión debe ser un valor numérico positivo');
        }
        if (!marca || typeof marca !== 'string') {
            throw new Error('El camión debe tener una marca válida');
        }
        if (isNaN(anosAntiguedad) || anosAntiguedad < 0) {
            throw new Error('Los años de antigüedad del camión deben ser un valor numérico positivo o cero');
        }

        this.conductor = conductor;
        this.generoConductor = generoConductor;
        this.ciudadOrigen = ciudadOrigen;
        this.ciudadDestino = ciudadDestino;
        this.consumoGasolina = consumoGasolina;
        this.toneladasCarga = toneladasCarga;
        this.modelo = modelo;
        this.avaluo = avaluo;
        this.marca = marca;
        this.anosAntiguedad = anosAntiguedad;
    }

    calcularImpuesto() {
        if (this.toneladasCarga <= 5) {
            return 0.05;
        } else if (this.toneladasCarga <= 10) {
            return 0.07;
        } else if (this.toneladasCarga <= 15) {
            return 0.12;
        } else {
            return 0.20;
        }
    }

    calcularComision(distancia) {
        let comision = 0;
        if (distancia > 1000) {
            comision = 0.05 *(distancia / 1000);
            if (this.anosAntiguedad > 5) {
                comision *= 1.07;
            }
        }
        return comision;
    }
}

// Clase Viaje
class Viaje {
    constructor(vehiculo, distancia, tipoCarga, precioKg) {
        this.vehiculo = vehiculo;
        this.distancia = distancia;
        this.tipoCarga = tipoCarga;
        this.precioKg = precioKg;
    }

    calcularPrecioViaje() {
        const impuesto = this.vehiculo.calcularImpuesto();
        const costoTransporte = this.distancia * this.precioKg * this.vehiculo.toneladasCarga;
        const total = costoTransporte * (1 + impuesto); // Se aplica el impuesto al costo total
        const comision = this.vehiculo.calcularComision(this.distancia);
        return total + comision;
    }
}

// Clase CreadorViajes
class CreadorViajes {
    constructor() {
        this.viajes = [];
    }

    crearViaje() {
        const nombreConductor = readlineSync.question('Nombre del conductor: ');
        const generoConductor = readlineSync.question('Género del conductor (m/f): ');
        const ciudadOrigen = readlineSync.question('Ciudad de origen: ');
        const ciudadDestino = readlineSync.question('Ciudad de destino: ');
        const consumoGasolina = parseFloat(readlineSync.question('Consumo de gasolina por kilómetro del camión: '));
        const distanciaViaje = parseInt(readlineSync.question('Distancia del viaje (en km): '));
        const avaluoCamion = parseInt(readlineSync.question('Avalúo del camión: '));
        const marcaCamion = readlineSync.question('Marca del camión: ');
        const antiguedadCamion = parseInt(readlineSync.question('Años de antigüedad del camión: '));
        const pesoCarga = parseFloat(readlineSync.question('Peso de la carga (en toneladas): '));
        const tipoCarga = readlineSync.question('Tipo de carga (Alimentos/Hierro/Cemento/Electrodomésticos/Otro): ');
        const precioCarga = parseFloat(readlineSync.question('Precio por kilogramo de la carga en pesos: '));

        const camion = new Camion(
            nombreConductor,
            generoConductor,
            ciudadOrigen,
            ciudadDestino,
            consumoGasolina,
            pesoCarga,
            marcaCamion,
            avaluoCamion,
            marcaCamion,
            antiguedadCamion
        );

        const viaje = new Viaje(
            camion,
            distanciaViaje,
            tipoCarga,
            precioCarga
        );

        this.registrarViaje(viaje);

        let continuar = false;
        while (true) {
            const respuesta = readlineSync.question('¿Desea agregar otro viaje? (S/N): ').toUpperCase();
            if (respuesta === 'S') {
                continuar = true;
                break;
            } else if (respuesta === 'N') {
                continuar = false;
                break;
            } else {
                console.log('Por favor, ingrese una opción válida (S/N).');
            }
        }

        if (continuar) {
            this.crearViaje();
        }
    }

    registrarViaje(viaje) {
        const precioViaje = viaje.calcularPrecioViaje();
        console.log(`El precio del viaje es: ${precioViaje} pesos`);
        this.viajes.push(viaje); // Agregar el viaje a la lista de viajes
    }

    calcularDineroTotalRecaudado() {
        let totalRecaudado = 0;
        for (const viaje of this.viajes) {
            totalRecaudado += viaje.calcularPrecioViaje();
        }
        return totalRecaudado;
    }

    calcularTipoCargaMasImpuestos() {
        const impuestosPorTipoCarga = {};
        for (const viaje of this.viajes) {
            const tipoCarga = viaje.tipoCarga;
            if (!(tipoCarga in impuestosPorTipoCarga)) {
                impuestosPorTipoCarga[tipoCarga] = 0;
            }
            impuestosPorTipoCarga[tipoCarga] += viaje.vehiculo.calcularImpuesto();
        }
        let maxImpuestos = -1;
        let tipoCargaMasImpuestos = '';
        for (const tipoCarga in impuestosPorTipoCarga) {
            if (impuestosPorTipoCarga[tipoCarga] > maxImpuestos) {
                maxImpuestos = impuestosPorTipoCarga[tipoCarga];
                tipoCargaMasImpuestos = tipoCarga;
            }
        }
        return tipoCargaMasImpuestos;
    }

    calcularPromedioGananciaPorTipoCarga(tipoCarga) {
        let totalGanancias = 0;
        let cantidadViajes = 0;
        for (const viaje of this.viajes) {
            if (viaje.tipoCarga === tipoCarga) {
                totalGanancias += viaje.calcularPrecioViaje();
                cantidadViajes++;
            }
        }
        return cantidadViajes > 0 ? totalGanancias / cantidadViajes : 0;
    }

    calcularMarcaCamionMenosGasolina() {
        let minGasolina = 0;;
        let marcaMenosGasolina = '';
        const marcas = {};
        for (const viaje of this.viajes) {
            const marca = viaje.vehiculo.marca;
            if (!(marca in marcas)) {
                marcas[marca] = 0;
            }
            marcas[marca] += viaje.vehiculo.consumoGasolina;
            if (marcas[marca] < minGasolina) {
                minGasolina = marcas[marca];
                marcaMenosGasolina = marca;
            }
        }
        return marcaMenosGasolina;
    }

    calcularDineroTotalComisiones() {
        let totalComisiones = 0;
        for (const viaje of this.viajes) {
            totalComisiones += viaje.vehiculo.calcularComision(viaje.distancia);
        }
        return totalComisiones;
    }

    calcularGananciasConductor(nombreConductor) {
        let gananciasTransportes = 0;
        let gananciasComisiones = 0;
        for (const viaje of this.viajes) {
            if (viaje.vehiculo.conductor === nombreConductor) {
                gananciasTransportes += viaje.calcularPrecioViaje();
                gananciasComisiones += viaje.vehiculo.calcularComision(viaje.distancia);
            }
        }
        return {
            gananciasTransportes,
            gananciasComisiones
        };
    }
}

// Instanciación del creador de viajes
const creadorViajes = new CreadorViajes();
creadorViajes.crearViaje();

// Ejemplo de uso de métodos adicionales
const totalRecaudado = creadorViajes.calcularDineroTotalRecaudado();
console.log(`Dinero total recaudado: ${totalRecaudado} pesos`);

const tipoCargaMasImpuestos = creadorViajes.calcularTipoCargaMasImpuestos();
console.log(`Tipo de carga con más impuestos: ${tipoCargaMasImpuestos}`);

const promedioGananciaAlimentos = creadorViajes.calcularPromedioGananciaPorTipoCarga('Alimentos');
console.log(`Promedio de ganancia por tipo de carga 'Alimentos': ${promedioGananciaAlimentos} pesos`);

const marcaMenosGasolina = creadorViajes.calcularMarcaCamionMenosGasolina();
console.log(`Marca de camión que menos gasolina consume: ${marcaMenosGasolina}`);

const totalComisiones = creadorViajes.calcularDineroTotalComisiones();
console.log(`Dinero total recaudado por comisiones: ${totalComisiones} pesos`);

const gananciasConductor = creadorViajes.calcularGananciasConductor('Nombre del conductor');
console.log(`Ganancias del conductor 'Nombre del conductor':`);
console.log(` - Ganancias por transportes: ${gananciasConductor.gananciasTransportes} pesos`);
console.log(` - Ganancias por comisiones: ${gananciasConductor.gananciasComisiones} pesos`);
