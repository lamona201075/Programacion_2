class Equipo {
    constructor(nombre, precioVenta, precioAlquilerPorDia) {
        if (typeof nombre !== 'string') {
            throw new Error('El campo del nombre debe estar lleno.');
        }
        if (!precioVenta || typeof precioVenta !== 'number') {
            throw new Error('El equipo requiere un precio para la venta.');
        }
        if (!precioAlquilerPorDia || typeof precioAlquilerPorDia !== 'number') {
            throw new Error('Se requiere un precio para el alquiler del equipo.');
        }

        this.nombre = nombre;
        this.precioVenta = precioVenta;
        this.precioAlquilerPorDia = precioAlquilerPorDia;

    }
    calcularIngresosVenta(cantidadVendida){
        return this.precioVenta * cantidadVendida;
    }
    
}


const equipo1 = new Equipo('Computador', 10000, 5000);
const cantidadVendidaEquipo1 = 5;
const ingresosVentaEquipo1 = equipo1.calcularIngresosVenta(cantidadVendidaEquipo1);
console.log(`Ingresos por venta del equipo 1: $${ingresosVentaEquipo1}`);


const equipo2 = new Equipo('Computador', 20000, 10000);
const cantidadVendidaEquipo2 = 4;
const ingresosVentaEquipo2 = equipo2.calcularIngresosVenta(cantidadVendidaEquipo2);
console.log(`Ingresos por venta de equpo 2: $${ingresosVentaEquipo2}`);



class Venta {
    constructor(equipo, precioVentaEquipo, cantidad, tipoCliente) {
        if (equipo === undefined || typeof equipo !== 'string') {
            throw new Error('El nombre del equipo debe estar definido y ser una cadena de texto.');
        }
        if (!precioVentaEquipo || typeof precioVentaEquipo !== 'number') {
            throw new Error('Se requiere un precio válido para la venta del equipo.');
        }
        if (!cantidad || typeof cantidad !== 'number') {
            throw new Error('Se requiere una cantidad válida para la venta del equipo.');
        }
        if (!tipoCliente || typeof tipoCliente !== 'string') {
            throw new Error('Debe introducir el tipo de cliente, no puede ser un número.');
        }
        this.equipo = equipo;
        this.precioVentaEquipo = precioVentaEquipo;
        this.cantidad = cantidad;
        this.tipoCliente = tipoCliente;
    }
}

const venta1 = new Venta('Compu', 100000, 3, 'Juridica');
const ingresosVenta1 = venta1.cantidad * venta1.precioVentaEquipo;
console.log(`Ingresos por venta 1: $${ingresosVenta1}`);

const venta2 = new Venta('Compu', 230000, 2, 'Juridico');
const ingresosVenta2 = venta2.cantidad * venta2.precioVentaEquipo;
console.log(`Ingresos por venta 2: $${ingresosVenta2}`);


class Alquiler {
    constructor(equipo, cantidadDias, precio) {
        if (typeof equipo !== 'string') {
            throw new Error('El nombre del equipo debe ser una cadena de texto.');
        }
        if (typeof cantidadDias !== 'number' || cantidadDias <= 0) {
            throw new Error('La cantidad de días debe ser un número positivo.');
        }
        if (typeof precio !== 'number' || precio <= 0) {
            throw new Error('El precio debe ser un número positivo.');
        }

        this.equipo = equipo;
        this.cantidadDias = cantidadDias;
        this.precio = precio;
    }
    calcularIngresosAlquiler() {
        return this.precio * this.cantidadDias;
    }
}
const alquiler1 = new Alquiler('Proyector', 5, 2000);
const ingresosAlquiler1 = alquiler1.calcularIngresosAlquiler();
console.log(`Ingresos por alquiler 1: $${ingresosAlquiler1}`);

const alquiler2 = new Alquiler(`Computador`, 4, 230000);
const ingresosAlquiler2 = alquiler2.calcularIngresosAlquiler();
console.log(`Ingresos por alquiler 2: $${ingresosAlquiler2}`);


class Cliente {
    constructor(nombreCli, tipoCliente, productoAdquirido) {
        if (typeof nombreCli !== 'string') {
            throw new Error('El nombre del cliente debe estar definido y ser un texto.');
        }
        if (!tipoCliente || typeof tipoCliente !== 'string') {
            throw new Error('Debe introducir el tipo de cliente, no puede ser un número.');
        }
        if (!productoAdquirido || typeof productoAdquirido !== 'string') {
            throw new Error('Se requiere una cantidad válida para el producto adquirido.');
        }
        this.nombreCli = nombreCli;
        this.tipoCliente = tipoCliente;
        this.productoAdquirido = productoAdquirido;
    }
}

let cliente1 = new Cliente('Juan', 'Natural', `Computador`);
let cliente2 = new Cliente('María', 'Juridica', `Computador`);
console.log(cliente1);
console.log(cliente2);


