const readlineSync = require('readline-sync');

class Tractomula {
    constructor(conductor, generoConductor, ciudadOrigen, ciudadDestino, consumoGasolina, toneladasCarga, modelo, avaluo, marca, anosAntiguedad) {
        if (!conductor || typeof conductor !== 'string') {
            throw new Error('El camion debe tener un conductor válido');
        }
        if (!generoConductor || typeof generoConductor !== 'string') {
            throw new Error('El conductor debe tener un genero válido');
        }
        if (!ciudadOrigen || typeof ciudadOrigen !== 'string') {
            throw new Error('Debe haber una ciudad de origen');
        }
        if (!ciudadDestino || typeof ciudadDestino !== 'string') {
            throw new Error('Debe tener una ciudad de destino');
        }
        if (isNaN(consumoGasolina) || consumoGasolina <= 0) {
            throw new Error('La gasolina debe tener un valor numerico positivo');
        }
        if (isNaN(toneladasCarga) || toneladasCarga <= 0) {
            throw new Error('Las toneladas deben tener un valor numerico positivo');
        }
        if (!modelo || typeof modelo !== 'string') {
            throw new Error('El camion debe tener un modelo válido');
        }
        if (isNaN(avaluo) || avaluo <= 0) {
            throw new Error('El avaluo del camion debe ser un valor numerico positivo');
        }
        if (!marca || typeof marca !== 'string') {
            throw new Error('El camion debe tener una marca válida');
        }
        if (isNaN(anosAntiguedad) || anosAntiguedad < 0) {
            throw new Error('Los anios de antiguedad del camion deben ser un valor numerico positivo o cero');
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

class Viaje {
    #distancia;

    constructor(vehiculo, distancia, tipoCarga, precioKg) {
        this.vehiculo = vehiculo;
        this.#distancia = distancia;
        this.tipoCarga = tipoCarga;
        this.precioKg = precioKg;
    }

    getDistancia() {
        return this.#distancia;
    }

    setDistancia(nuevaDistancia) {
        if (isNaN(nuevaDistancia) || nuevaDistancia <= 0) {
            throw new Error('La distancia debe ser un valor numérico positivo');
        }
        this.#distancia = nuevaDistancia;
    }

    calcularPrecioViaje() {
        const impuesto = this.vehiculo.calcularImpuesto();
        const costoTransporte = this.#distancia * this.precioKg * this.vehiculo.toneladasCarga;
        const total = costoTransporte * (1 + impuesto); // Se aplica el impuesto al costo total
        const comision = this.vehiculo.calcularComision(this.#distancia);
        return total + comision;
    }
}

class NodoViaje {
    constructor(viaje) {
        this.valor = viaje;
        this.siguiente = null; 
    }
}

class ListaViaje {
    constructor() {
        this.head = null;
    }

    insertarViaje(viaje) {
        const nuevoNodo = new NodoViaje(viaje);
        
        if (this.head === null) {
            this.head = nuevoNodo;
        } else {
            let nodoTmp = this.head;
            while (nodoTmp.siguiente !== null) {
                nodoTmp = nodoTmp.siguiente;
            }
            nodoTmp.siguiente = nuevoNodo;
        }
    }

    mostrar() {
        let nodoTmp = this.head;
        while (nodoTmp !== null) {
            const viaje = nodoTmp.valor;
            console.info(`Viaje - Conductor: ${viaje.vehiculo.conductor}, Distancia: ${viaje.getDistancia()} km, Tipo de carga: ${viaje.tipoCarga}, Precio: ${viaje.calcularPrecioViaje()} pesos`);
            nodoTmp = nodoTmp.siguiente;
        }
    }
}

class CreadorViajes {
    constructor() {
        this.listaViajes = new ListaViaje();
        this.viajes = [];
    }

    crearViaje() {
        const nombreConductor = readlineSync.question('Nombre del conductor: ');
        const generoConductor = readlineSync.question('Genero del conductor (m/f): ');
        const ciudadOrigen = readlineSync.question('Ciudad de origen: ');
        const ciudadDestino = readlineSync.question('Ciudad de destino: ');
        const consumoGasolina = parseFloat(readlineSync.question('Consumo de gasolina por kilometro del camion: '));
        const distanciaViaje = parseInt(readlineSync.question('Distancia del viaje (en km): '));
        const avaluoTractomula = parseInt(readlineSync.question('Avaluo del camion: '));
        const marcaTractomula = readlineSync.question('Marca del camion: ');
        const antiguedadTractomula = parseInt(readlineSync.question('Anios de antiguedad del camion: '));
        const pesoCarga = parseFloat(readlineSync.question('Peso de la carga (en toneladas): '));
        const tipoCarga = readlineSync.question('Tipo de carga (Alimentos/Hierro/Cemento/Electrodomesticos/Otro): ');
        const precioCarga = parseFloat(readlineSync.question('Precio por kilogramo de la carga en pesos: '));

        const tractomula = new Tractomula(nombreConductor, generoConductor, ciudadOrigen, ciudadDestino, consumoGasolina, pesoCarga, marcaTractomula, avaluoTractomula, marcaTractomula, antiguedadTractomula);

        const viaje = new Viaje(tractomula, distanciaViaje, tipoCarga, precioCarga);

        this.registrarViaje(viaje);
    }

    registrarViaje(viaje) {
        const precioViaje = viaje.calcularPrecioViaje();
        console.log(`El precio del viaje es: ${precioViaje} pesos`);
        this.viajes.push(viaje); // Agregar el viaje a la lista de viajes
        this.listaViajes.insertarViaje(viaje); // Agregar el viaje a la lista enlazada
    }

    iniciar() {
        let continuar;
        do {
            this.crearViaje();
            while (true) {
                const respuesta = readlineSync.question('¿Desea agregar otro viaje? (si/no): ').toUpperCase();
                if (respuesta === 'SI' || respuesta === 'S') {
                    continuar = true;
                    break;
                } else if (respuesta === 'NO' || respuesta === 'N') {
                    continuar = false;
                    break;
                } else {
                    console.log('Por favor, ingrese una opción válida (si/no).');
                }
            }
        } while (continuar);

        console.log('Lista de viajes:');
        this.listaViajes.mostrar();
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

    calcularMarcaTractomulaMenosGasolina() {
        let minGasolina = Infinity;
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
            totalComisiones += viaje.vehiculo.calcularComision(viaje.getDistancia());
        }
        return totalComisiones;
    }

    calcularGananciasConductor(nombreConductor) {
        let gananciasTransportes = 0;
        let gananciasComisiones = 0;
        for (const viaje of this.viajes) {
            if (viaje.vehiculo.conductor === nombreConductor) {
                gananciasTransportes += viaje.calcularPrecioViaje();
                gananciasComisiones += viaje.vehiculo.calcularComision(viaje.getDistancia());
            }
        }
        return {
            gananciasTransportes,
            gananciasComisiones
        };
    }
}

// Instanciación del creador de viajes y llamada al método iniciar
const creadorViajes = new CreadorViajes();
creadorViajes.iniciar();

// Ejemplo de uso de métodos adicionales
const totalRecaudado = creadorViajes.calcularDineroTotalRecaudado();
console.log(`Dinero total recaudado: ${totalRecaudado} pesos`);

const tipoCargaMasImpuestos = creadorViajes.calcularTipoCargaMasImpuestos();
console.log(`Tipo de carga con más impuestos: ${tipoCargaMasImpuestos}`);

const promedioGananciaAlimentos = creadorViajes.calcularPromedioGananciaPorTipoCarga('Alimentos');
console.log(`Promedio de ganancia por tipo de carga 'Alimentos': ${promedioGananciaAlimentos} pesos`);

const promedioGananciaCemento = creadorViajes.calcularPromedioGananciaPorTipoCarga('Cemento');
console.log(`Promedio de ganancia por tipo de carga 'Cemento': ${promedioGananciaCemento} pesos`);

const promedioGananciaElectrodomestico = creadorViajes.calcularPromedioGananciaPorTipoCarga('Electrodomesticos');
console.log(`Promedio de ganancia por tipo de carga 'Electrodomesticos': ${promedioGananciaElectrodomestico} pesos`);

const promedioGananciaHierro = creadorViajes.calcularPromedioGananciaPorTipoCarga('Hierro');
console.log(`Promedio de ganancia por tipo de carga 'Hierro': ${promedioGananciaHierro} pesos`);

const marcaMenosGasolina = creadorViajes.calcularMarcaTractomulaMenosGasolina();
console.log(`Marca de camion que menos gasolina consume: ${marcaMenosGasolina}`);

const totalComisiones = creadorViajes.calcularDineroTotalComisiones();
console.log(`Dinero total recaudado por comisiones: ${totalComisiones} pesos`);

const nombreConductor = readlineSync.question('Ingrese el nombre del conductor para calcular sus ganancias: ');
const gananciasConductor = creadorViajes.calcularGananciasConductor(nombreConductor);
console.log(`Ganancias del conductor '${nombreConductor}':`);
console.log(` - Ganancias por transportes: ${gananciasConductor.gananciasTransportes} pesos`);
console.log(` - Ganancias por comisiones: ${gananciasConductor.gananciasComisiones} pesos`);
