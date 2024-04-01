class Libro{
    titulo = ``;
    genero = ``;
    anioPublicacion = 0;
    precio = 0;
    stock = 0;
}

const libro1 = new Libro();
libro1.titulo = `Cien anios de soledad`;
libro1.genero = `Realismo mágico`;
libro1.anioPublicacion = 1967;
libro1.precio = 21.51;
libro1.stock = 41;

const libro2 = new Libro();
libro2.titulo = `1984`;
libro2.genero = `Ciencia ficción`;
libro2.anioPublicacion = 1949;
libro2.precio = 25.99;
libro2.stock = 25;

const libro3 = new Libro();
libro3.titulo = `El principito`;
libro3.genero = `Fábula`;
libro3.anioPublicacion = 1943;
libro3.precio = 13.00;
libro3.stock = 60;


const libro4 = new Libro();
libro4.titulo = `Orgullo y prejuicio`;
libro4.genero = `Romance`;
libro4.anioPublicacion = 1813;
libro4.precio = 18.75;
libro4.stock = 20;

const libro5 = new Libro();
libro5.titulo = `Harry Potter y la piedra filosofal`;
libro5.genero = `Fantasía`;
libro5.anioPublicacion = 1997;
libro5.precio = 22.99;
libro5.stock = 15;

const libro6 = new Libro();
libro6.titulo = `Crimen y castigo`;
libro6.genero = `Novela psicológica`;
libro6.anioPublicacion = 1866;
libro6.precio = 16.50;
libro6.stock = 49;

const libro7 = new Libro();
libro7.titulo = `Don Quijote de la Mancha`;
libro7.genero = `Novela de caballería`;
libro7.anioPublicacion = 1605;
libro7.precio = 24.99;
libro7.stock = 10;

const libro8 = new Libro();
libro8.titulo = `El amor en los tiempos del cólera`;
libro8.genero = `Realismo mágico`;
libro8.anioPublicacion = 1985;
libro8.precio = 21.25;
libro8.stock = 18;

const libro9 = new Libro();
libro9.titulo = `Matar a un ruiseñor`;
libro9.genero = `Drama`;
libro9.anioPublicacion = 1960;
libro9.precio = 19.99;
libro9.stock = 22;

const libro10 = new Libro();
libro10.titulo = `Los miserables`;
libro10.genero = `Novela histórica`;
libro10.anioPublicacion = 1862;
libro10.precio = 28.50;
libro10.stock = 12;

const libro11 = new Libro();
libro11.titulo = `La metamorfosis`;
libro11.genero = `Ficción absurda`;
libro11.anioPublicacion = 1915;
libro11.precio = 14.75;
libro11.stock = 28;

const libro12 = new Libro();
libro12.titulo = `La Odisea`;
libro12.anioPublicacion = 1906;
libro12.genero = `Epopeya`;
libro12.precio = 26.00;
libro12.stock = 17;

const libro13 = new Libro();
libro13.titulo = `Drácula`;
libro13.genero = `Terror`;
libro13.anioPublicacion = 1897;
libro13.precio = 17.99;
libro13.stock = 24;

const libro14 = new Libro();
libro14.titulo = `Las aventuras de Tom Sawyer`;
libro14.genero = `Aventura`;
libro14.anioPublicacion = 1876;
libro14.precio = 14.50;
libro14.stock = 42;

const libro15 = new Libro();
libro15.titulo = `Las uvas de la ira`;
libro15.genero = `Ficción social`;
libro15.anioPublicacion = 1939;
libro15.precio = 20.25;
libro15.stock = 15;

// Cual es el libro mas caro
let libroMasCaro = libro1;
if (libro2.precio > libroMasCaro.precio) {
    libroMasCaro = libro2;
}
if (libro3.precio > libroMasCaro.precio) {
    libroMasCaro = libro3;
}
if (libro4.precio > libroMasCaro.precio) {
    libroMasCaro = libro4;
}
if (libro5.precio > libroMasCaro.precio) {
    libroMasCaro = libro5;
}
if (libro6.precio > libroMasCaro.precio) {
    libroMasCaro = libro6;
}
if (libro7.precio > libroMasCaro.precio) {
    libroMasCaro = libro7;
}
if (libro8.precio > libroMasCaro.precio) {
    libroMasCaro = libro8;
}
if (libro9.precio > libroMasCaro.precio) {
    libroMasCaro = libro9;
}
if (libro10.precio > libroMasCaro.precio) {
    libroMasCaro = libro10;
}
if (libro11.precio > libroMasCaro.precio) {
    libroMasCaro = libro11;
}
if (libro12.precio > libroMasCaro.precio) {
    libroMasCaro = libro12;
}
if (libro13.precio > libroMasCaro.precio) {
    libroMasCaro = libro13;
}
if (libro14.precio > libroMasCaro.precio) {
    libroMasCaro = libro14;
}
if (libro15.precio > libroMasCaro.precio) {
    libroMasCaro = libro15;
}

console.log("El libro más caro es:", libroMasCaro.titulo, "con un precio de:", libroMasCaro.precio);

// Cual libro tiene mayor stock
let libroMayorStock = libro1;
if (libro2.stock > libroMayorStock.stock) {
    libroMayorStock = libro2;
}
if (libro3.stock > libroMayorStock.stock) {
    libroMayorStock = libro3;
}
if (libro4.stock > libroMayorStock.stock) {
    libroMayorStock = libro4;
}
if (libro5.stock > libroMayorStock.stock) {
    libroMayorStock = libro5;
}
if (libro6.stock > libroMayorStock.stock) {
    libroMayorStock = libro6;
}
if (libro7.stock > libroMayorStock.stock) {
    libroMayorStock = libro7;
}
if (libro8.stock > libroMayorStock.stock) {
    libroMayorStock = libro8;
}
if (libro9.stock > libroMayorStock.stock) {
    libroMayorStock = libro9;
}
if (libro10.stock > libroMayorStock.stock) {
    libroMayorStock = libro10;
}
if (libro11.stock > libroMayorStock.stock) {
    libroMayorStock = libro11;
}
if (libro12.stock > libroMayorStock.stock) {
    libroMayorStock = libro12;
}
if (libro13.stock > libroMayorStock.stock) {
    libroMayorStock = libro13;
}
if (libro14.stock > libroMayorStock.stock) {
    libroMayorStock = libro14;
}
if (libro15.stock > libroMayorStock.stock) {
    libroMayorStock = libro15;
}

console.log("El libro con mayor stock es:", libroMayorStock.titulo, "con un stock de:", libroMayorStock.stock);

// Libro con fecha de publicacion mas vieja
let libroMasViejo = libro1;
if (libro2.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro2;
}
if (libro3.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro3;
}
if (libro4.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro4;
}
if (libro5.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro5;
}
if (libro6.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro6;
}
if (libro7.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro7;
}
if (libro8.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro8;
}
if (libro9.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro9;
}
if (libro10.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro10;
}
if (libro11.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro11;
}
if (libro12.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro12;
}
if (libro13.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro13;
}
if (libro14.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro14;
}
if (libro15.anioPublicacion < libroMasViejo.anioPublicacion) {
    libroMasViejo = libro15;
}

console.log("El libro más viejo es:", libroMasViejo.titulo, "publicado en el anio:", libroMasViejo.anioPublicacion);


class Categoria{
    nombre = ``;
    descripcion = ``;
    stock = 0;
}
//ordenar alfabeticamente

const categorias1 = new Categoria();
categorias1.nombre = `Ficción`;
categorias1.descripcion = `libro de ficción que incluyen novelas; cuentos; etc.`;
categorias1.stock = 41;


const categorias2 = new Categoria();
categorias2.nombre = `Ciencia ficción`;
categorias2.descripcion = `libro que se basan en conceptos científicos y especulativos.`;
categorias2.stock = 25;

const categorias3 = new Categoria();
categorias3.nombre = `Romance`;
categorias3.descripcion = `libro que exploran relaciones amorosas y emociones.`;
categorias3.stock = 60;

const categorias4 = new Categoria();
categorias4.nombre = `Fábula`;
categorias4.descripcion = `Narraciones breves con animales u objetos personificados que transmiten una enseñanza o moraleja.`;
categorias4.stock = 20;

const categorias5 = new Categoria();
categorias5.nombre = `Fantasía`;
categorias5.descripcion = `libro que presentan elementos imaginarios; como magia; mundos alternativos y criaturas fantásticas.`;
categorias5.stock = 15;

const categorias6 = new Categoria();
categorias6.nombre = `Novela psicológica`;
categorias6.descripcion = `libro que exploran la mente humana y los aspectos psicológicos de los personajes.`;
categorias6.stock = 49;

const categorias7 = new Categoria();
categorias7.nombre = `Novela de caballería`;
categorias7.descripcion = `Narrativas que relatan las aventuras de caballeros en la Edad Media.`;
categorias7.stock = 10;

const categorias8 = new Categoria();
categorias8.nombre = `Realismo mágico`;
categorias8.descripcion = `Narrativas que combinan elementos realistas con elementos mágicos o fantásticos.`;
categorias8.stock = 18;

const categorias9 = new Categoria();
categorias9.nombre = `Drama`;
categorias9.descripcion = `libro que presentan conflictos emocionales e interpersonales de los personajes.`;
categorias9.stock = 22;

const categorias10 = new Categoria();
categorias10.nombre = `Novela histórica`;
categorias10.descripcion = `libro que están ambientados en un período histórico específico y que incorporan eventos y personajes reales.`;
categorias10.stock = 12;

const categorias11 = new Categoria();
categorias11.nombre = `Ficción absurda`;
categorias11.descripcion = `Narrativas que presentan situaciones absurdas o ilógicas.`;
categorias11.stock = 28;

const categorias12 = new Categoria();
categorias12.nombre = `Epopeya`;
categorias12.descripcion = `Narrativas extensas que relatan las hazañas de héroes y heroínas en un contexto épico.`;
categorias12.stock = 17;

const categorias13 = new Categoria();
categorias13.nombre = `Terror`;
categorias13.descripcion = `libro que buscan provocar miedo y suspenso en el lector.`;
categorias13.stock = 24;

const categorias14 = new Categoria();
categorias14.nombre = `Aventura`;
categorias14.descripcion = `Narrativas que presentan viajes emocionantes y peligrosos; y desafíos para los protagonistas.`;
categorias14.stock = 42;

const categorias15 = new Categoria();
categorias15.nombre = `Ficción social`;
categorias15.descripcion = `libro que exploran problemas y aspectos sociales de la sociedad.`;
categorias15.stock = 15;

/*let categoriaMenorStock = Categoria[0];
for (let i = 1; i < Categoria.length; i++) {
    if (Categoria[i].stock < categoriaMenorStock.stock) {
        categoriaMenorStock = Categoria[i];
    }
}
// Mostrar la categoría con el menor stock
console.lo*/


class Cliente{
    nombre = ``;
    direccion = ``;
    correo = ``;
    telefono = 0;

}

// Ordenarlos por orden alfabetico


const cliente1 = new Cliente();
cliente1.nombre = `Juanchita Moreno`;
cliente1.direccion = `Carrera 9#18`;
cliente1.correo = `juanchit@gmail.com`;
cliente1.telefono = 8901023;

const cliente2 = new Cliente();
cliente2.nombre = `Pepe Pérez`;
cliente2.direccion = `Avenida 5#12`;
cliente2.correo = `pepe@gmail.com`;
cliente2.telefono = 7654321;

const cliente3 = new Cliente();
cliente3.nombre = `María López`;
cliente3.direccion = `Calle 3#6`;
cliente3.correo = `maria@gmail.com`;
cliente3.telefono = 9876543;

const cliente4 = new Cliente();
cliente4.nombre = `Daniela Martinez`;
cliente4.direccion = `Carrera 8a1`;
cliente4.correo = `danim@gmail.com`;
cliente4.telefono = 58693534;

const cliente5 = new Cliente();
cliente5.nombre = `Pedro Rodríguez`;
cliente5.direccion = `Calle 15#30`;
cliente5.correo = `pedrordz@gmail.com`;
cliente5.telefono = 6543210;

const cliente6 = new Cliente();
cliente6.nombre = `Lucía Sánchez`;
cliente6.direccion = `Calle 12#22`;
cliente6.correo = `luciasan@gmail.com`;
cliente6.telefono = 8765432;

const cliente7 = new Cliente();
cliente7.nombre = `Mario Torres`;
cliente7.direccion = `Carrera 20#35`;
cliente7.correo = `mariotorr@gmail.com`;
cliente7.telefono = 2345678;

const cliente8 = new Cliente();
cliente8.nombre = `Laura Ramírez`;
cliente8.direccion = `Avenida 8#10`;
cliente8.correo = `laurarami@gmail.com`;
cliente8.telefono = 6789012;

const cliente9 = new Cliente();
cliente9.nombre = `Santiago Gómez`;
cliente9.direccion = `Carrera 12#28`;
cliente9.correo = `santiagogom@gmail.com`;
cliente9.telefono = 1098765;

const cliente10 = new Cliente();
cliente10.nombre = `Carla Herrera`;
cliente10.direccion = `Calle 6#16`;
cliente10.correo = `carlaherr@gmail.com`;
cliente10.telefono = 5432109;

const cliente11 = new Cliente();
cliente11.nombre = `Andrés Díaz`;
cliente11.direccion = `Avenida 4#8`;
cliente11.correo = `andresdiaz@gmail.com`;
cliente11.telefono = 9876541;

const cliente12 = new Cliente();
cliente12.nombre = `Marcela Castro`;
cliente12.direccion = `Carrera 18#40`;
cliente12.correo = `marcelacas@gmail.com`;
cliente12.telefono = 3210987;

const cliente13 = new Cliente();
cliente13.nombre = `Eduardo Muñoz`;
cliente13.direccion = `Calle 11#20`;
cliente13.correo = `eduardomun@gmail.com`;
cliente13.telefono = 6541230;

const cliente14 = new Cliente();
cliente14.nombre = `Julia Vargas`;
cliente14.direccion = `Avenida 3#6`;
cliente14.correo = `juliavarg@gmail.com`;
cliente14.telefono = 3210456;

const cliente15 = new Cliente();
cliente15.nombre = `Lena Maria`;
cliente15.direccion = `Carrera 8b`;
cliente15.correo = `Lenamar@gmail.com`;
cliente15.telefono = 6849534;

/* function ordenarClientesPorNombre(array) {
    let cambio;
    do {
        cambio = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].nombre > array[i + 1].nombre) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                cambio = true;
            }
        }
    } while (cambio);
}

// Ordenar los clientes alfabéticamente por nombre
ordenarClientesPorNombre(cliente1);

// Mostrar los clientes ordenados
console.log("Clientes ordenados alfabéticamente:");
cliente1.forEach(cliente => console.log(`${cliente.nombre}: ${cliente.direccion}, ${cliente.correo}, ${cliente.telefono}`));
*/ 

class Pedido{
    libro = ``;
    cliente = ``;
    fechaPedido = ``;
    direccion = ``;
    estado = ``;
    total = 0;  
}

const pedido1 = new Pedido();
pedido1.libro = `Cien anios de soledad`;
pedido1.cliente = `Juanchita Moreno`;
pedido1.fechaPedido = `2024-03-10`;
pedido1.direccion = `Carrera 9#18`;
pedido1.estado = `Enviado`;
pedido1.total = 21.51;


const pedido2 = new Pedido();
pedido2.libro= `1984`;
pedido2.cliente= `Pepe Pérez`;
pedido2.fechaPedido= `2024-03-10`;
pedido2.direccion= `Avenida 5#12`;
pedido2.estado= `Enviado`;
pedido2.total= 21.51;


const pedido3 = new Pedido();
pedido3.libro= `El principito`;
pedido3.cliente= `María López`;
pedido3.fechaPedido= `2024-03-12`;
pedido3.direccion= `Calle 3#6`;
pedido3.estado= `En proceso`;
pedido3.total= 18.75;

const pedido4 = new Pedido();
pedido4.libro= `Orgullo y prejuicio`;
pedido4.cliente= `Daniela Martinez`;
pedido4.fechaPedido= `2024-03-15`;
pedido4.direccion= `Carrera 8a1`;
pedido4.estado= `Entregado`;
pedido4.total= 30.20;

const pedido5 = new Pedido();
pedido5.libro= `Harry Potter y la piedra filosofal`;
pedido5.cliente= `Pedro Rodríguez`;
pedido5.fechaPedido= `2024-03-17`;
pedido5.direccion= `Calle 15#30`;
pedido5.estado= `Enviado`;
pedido5.total= 25.00;


const pedido6 = new Pedido();
pedido6.libro= `Crimen y castigo`;
pedido6.cliente= `Lucía Sánchez`;
pedido6.fechaPedido= `2024-03-20`;
pedido6.direccion= `Calle 12#22`;
pedido6.estado= `En proceso`;
pedido6.total= 12.99;


const pedido7 = new Pedido();
pedido7.libro= `Don Quijote de la Mancha`;
pedido7.cliente= `Mario Torres`;
pedido7.fechaPedido= `2024-03-22`;
pedido7.direccion= `Carrera 20#35`;
pedido7.estado= `Entregado`;
pedido7.total= 19.95;


const pedido8 = new Pedido();
pedido8.libro=  `El amor en los tiempos del cólera`;
pedido8.cliente= `Laura Ramírez`;
pedido8.fechaPedido= `2024-03-28`;
pedido8.direccion= `Carrera 12#28`;
pedido8.estado= `En proceso`;
pedido8.total= 22.30;


const pedido9 = new Pedido();
pedido9.libro= `Matar a un ruiseñor`;
pedido9.cliente= `Laura Ramírez`;
pedido9.fechaPedido= `2024-03-30`;
pedido9.direccion= `Avenida 8#10`;
pedido9.estado= `Entregado`;
pedido9.total= 17.45;

const pedido10 = new Pedido();
pedido10.libro= `Los miserables`;
pedido10.cliente= `Carla Herrera`;
pedido10.fechaPedido= `2024-04-02`;
pedido10.direccion= `Calle 6#16`;
pedido10.estado= `Enviado`;
pedido10.total= 28.60;


const pedido11 = new Pedido();
pedido11.libro= `La metamorfosis`;
pedido11.cliente= `Andrés Díaz`;
pedido11.fechaPedido= `2024-04-05`;
pedido11.direccion= `Avenida 4#8`;
pedido11.estado= `En proceso`;
pedido11.total= 14.25;


const pedido12 = new Pedido();
pedido12.libro= `La Odisea`;
pedido12.cliente= `Marcela Castro`;
pedido12.fechaPedido= `2024-04-08`;
pedido12.direccion= `Carrera 18#40`;
pedido12.estado= `Entregado`;
pedido12.total= 35.75;


const pedido13 = new Pedido()
pedido13.libro= `Drácula`;
pedido13.cliente=  `Eduardo Muñoz`;
pedido13.fechaPedido=  `Calle 11#20`;
pedido13.direccion= `Carrera 18#40`;
pedido13.estado= `Enviado`;
pedido13.total= 16.99;


const pedido14 = new Pedido()
pedido14.libro= `Las aventuras de Tom Sawyer`;
pedido14.cliente=  `Julia Vargas`;
pedido14.fechaPedido= `2024-04-13`;
pedido14.direccion=  `Avenida 3#6`;
pedido14.estado= `En proceso`;
pedido14.total= 20.50;


const pedido15 = new Pedido()
pedido15.libro=  `Las uvas de la ira`;
pedido15.cliente=  `Lena Maria`;
pedido15.fechaPedido= `2024-04-15`;
pedido15.direccion= `Carrera 8b`;
pedido15.estado= `Entregado`;
pedido15.total= 10.99;

let pedidoMayorTotal = pedido1; // Supongamos que el primer pedido tiene el mayor total inicialmente
function mostrarPedidoMayorTotal() {
    console.log(`El pedido con el mayor precio total es:`);
    console.log(`Libro: ${pedidoMayorTotal.libro}`);
    console.log(`Total: ${pedidoMayorTotal.total}`);
}
function encontrarPedidoMayorTotal(pedido) {
    if (pedido.total > pedidoMayorTotal.total) {
        pedidoMayorTotal = pedido;
    }
}
function encontrarPedidoMayorTotal(pedido) {
    if (pedido.total > pedidoMayorTotal.total) {
        pedidoMayorTotal = pedido;
    }
}

encontrarPedidoMayorTotal(pedido2);
encontrarPedidoMayorTotal(pedido3);
encontrarPedidoMayorTotal(pedido4);
encontrarPedidoMayorTotal(pedido5);
encontrarPedidoMayorTotal(pedido6);
encontrarPedidoMayorTotal(pedido7);
encontrarPedidoMayorTotal(pedido8);
encontrarPedidoMayorTotal(pedido9);
encontrarPedidoMayorTotal(pedido10);
encontrarPedidoMayorTotal(pedido11);
encontrarPedidoMayorTotal(pedido12);
encontrarPedidoMayorTotal(pedido13);
encontrarPedidoMayorTotal(pedido14);
encontrarPedidoMayorTotal(pedido15);
mostrarPedidoMayorTotal();

function contarPedidosEnviados(pedidos) {
    let contador = 0;
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].estado === 'Enviado') {
            contador++;
        }
    }
    return contador;
}

const todosLosPedidos = [pedido1, pedido2, pedido3, pedido4, pedido5, pedido6, pedido7, pedido8, pedido9, pedido10, pedido11, pedido12, pedido13, pedido14, pedido15];
const pedidosEnviados = contarPedidosEnviados(todosLosPedidos);
console.log(`El número de pedidos en estado "enviado" es: ${pedidosEnviados}`);

class TiendaFisica{
    nombre = ``;
    direccion = ``;
    telefono = ``;
    correo =  ``;
    ciudad = ``;
}

const tienda1 = new TiendaFisica();
tienda1.nombre = "Librería El Dorado";
tienda1.direccion = "Calle 1 #123";
tienda1.telefono = "123456789";
tienda1.correo = "eldorado@gmail.com";
tienda1.ciudad = "Bogotá";

const tienda2 = new TiendaFisica();
tienda2.nombre = "Librería La Página";
tienda2.direccion = "Carrera 2 #456";
tienda2.telefono = "987654321";
tienda2.correo = "lapagina@gmail.com";
tienda2.ciudad = "Medellín";

const tienda3 = new TiendaFisica();
tienda3.nombre = "Librería El Rincón Literario";
tienda3.direccion = "Avenida 3 #789";
tienda3.telefono = "456789123";
tienda3.correo = "rinconliterario@gmail.com";
tienda3.ciudad = "Cali";

const tienda4 = new TiendaFisica();
tienda4.nombre = "Librería La Letra Impresa";
tienda4.direccion = "Calle 4 #1011";
tienda4.telefono = "789123456";
tienda4.correo = "letraimpresa@gmail.com";
tienda4.ciudad = "Barranquilla";

const tienda5 = new TiendaFisica();
tienda5.nombre = "Librería La Imaginación";
tienda5.direccion = "Carrera 5 #1213";
tienda5.telefono = "147258369";
tienda5.correo = "imaginacion@gmail.com";
tienda5.ciudad = "Cartagena";

const tienda6 = new TiendaFisica();
tienda6.nombre = "Librería La Pluma y el Papel";
tienda6.direccion = "Avenida 6 #1415";
tienda6.telefono = "258369147";
tienda6.correo = "plumapapel@gmail.com";
tienda6.ciudad = "Bucaramanga";

const tienda7 = new TiendaFisica();
tienda7.nombre = "Librería El Saber";
tienda7.direccion = "Calle 7 #1617";
tienda7.telefono = "369147258";
tienda7.correo = "elsaber@gmail.com";
tienda7.ciudad = "Santa Marta";

const tienda8 = new TiendaFisica();
tienda8.nombre = "Librería La Tinta";
tienda8.direccion = "Carrera 8 #1819";
tienda8.telefono = "654321789";
tienda8.correo = "latinta@gmail.com";
tienda8.ciudad = "Manizales";

const tienda9 = new TiendaFisica();
tienda9.nombre = "Librería La Historia";
tienda9.direccion = "Avenida 9 #2021";
tienda9.telefono = "987654321";
tienda9.correo = "lahistoria@gmail.com";
tienda9.ciudad = "Pereira";

const tienda10 = new TiendaFisica();
tienda10.nombre = "Librería Los libro";
tienda10.direccion = "Calle 10 #2223";
tienda10.telefono = "123456789";
tienda10.correo = "loslibro@gmail.com";
tienda10.ciudad = "Cúcuta";

const tienda11 = new TiendaFisica();
tienda11.nombre = "Librería El Conocimiento";
tienda11.direccion = "Carrera 11 #2425";
tienda11.telefono = "456789123";
tienda11.correo = "elconocimiento@gmail.com";
tienda11.ciudad = "Pasto";

const tienda12 = new TiendaFisica();
tienda12.nombre = "Librería La Cultura";
tienda12.direccion = "Avenida 12 #2627";
tienda12.telefono = "789123456";
tienda12.correo = "lacultura@gmail.com";
tienda12.ciudad = "Villavicencio";

const tienda13 = new TiendaFisica();
tienda13.nombre = "Librería La Aventura";
tienda13.direccion = "Calle 13 #2829";
tienda13.telefono = "147258369";
tienda13.correo = "laaventura@gmail.com";
tienda13.ciudad = "Ibagué";

const tienda14 = new TiendaFisica();
tienda14.nombre = "Librería La Ciencia";
tienda14.direccion = "Carrera 14 #3031";
tienda14.telefono = "258369147";
tienda14.correo = "laciencia@gmail.com";
tienda14.ciudad = "Neiva";

const tienda15 = new TiendaFisica();
tienda15.nombre = "Librería La Fantasía";
tienda15.direccion = "Avenida 15 #3233";
tienda15.telefono = "369147258";
tienda15.correo = "lafantasia@gmail.com";
tienda15.ciudad = "Montería";

