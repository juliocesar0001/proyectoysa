/* Simulador interactivo de promedio de edades ingresados */
/*
let edades;
let promedio;
let suma=0;
let cant_edades=parseInt(prompt("digite la cantidad de edades a promediar"));

for(let i=0;i<cant_edades;i++){
    let edades=parseInt(prompt("digite la edad "+i));
    suma=suma+edades;
}

promedio=suma/cant_edades;

alert("el promedio de edades es "+promedio);

if(promedio>=0 && promedio<99){
    if(promedio<18){
    alert("es un promedio de menores de edad");
    }else{
    alert("el un promedo de mayores de edad");
    }
}else{
    alert("los datos estan incorrectos");
}*/

//ABM Simulador de carrito de compra
/*
class producto{
    constructor(nombre,tipo,numero_catalogo,precio){
        this.nombre=nombre;
        this.tipo=tipo;
        this.numero_catalogo=numero_catalogo;
        this.precio=precio;
    }
}

const compra1=new producto("lycra","remera",123456,1000);
const compra2=new producto("spun","remera",42657,3500);
const compra3=new producto("sublimada","remera",3591,8795);
const compra4=new producto("lycra","remera",24658,0215);

const arrayProductos=[];

arrayProductos.push(compra1);
arrayProductos.push(compra2);
arrayProductos.push(compra3);
arrayProductos.push(compra4);

console.log(arrayProductos);

function menu(){
    alert("Bienvenido al carrito Ysa");
    let opcion=parseInt(prompt("Ingrese una opcion \n 1)Alta de pedido \n 2)Baja de pedido  \n 3)Modificar pedido \n 4)Consultar pedido \n 5)Mostrar pedidos \n 6) Salir"));
    return opcion;
}

function altaPedido(){
    let nombre=prompt("Ingrese el nombre del producto: ");
    let tipo=prompt("Ingrese el tipo de producto");
    let numero_catalogo=prompt("Ingrese el numero de catalogo");
    let precio=prompt("Ingrese el precio del producto");
    let Producto=new producto(nombre,tipo,numero_catalogo,precio);
    arrayProductos.push(Producto);
    console.log(arrayProductos);
}

function bajaPedido(){
    let numero_catalogo=parseInt(prompt("Ingrese el numero de catalogo"));
    let Producto=arrayProductos.find(producto=>producto.numero_catalogo===numero_catalogo);
    let indice=arrayProductos.indexOf(Producto);
    arrayProductos.splice(indice,1);
    console.log(arrayProductos);
}

function modificarPedido(){
    let numero_catalogo=parseInt(prompt("Ingrese el numero de catalogo"));
    let Producto=arrayProductos.find(Producto=>Producto.numero_catalogo===numero_catalogo);
    let indice=arrayProductos.indexOf(Producto);
    let nombre=prompt("Ingrese el nombre del producto: ");
    let tipo=prompt("Ingrese el tipo de producto");
    let precio=prompt("Ingrese el precio del producto");
    let prodcutoModificado=new producto(nombre,tipo,numero_catalogo,precio);
    arrayProductos.splice(indice,1,prodcutoModificado);
    console.log(arrayProductos);   
    }


    function consultaPedido(){
        let numero_catalogo=parseInt(prompt("Ingrese el numero de catalogo: "));
        let Producto=arrayProductos.find(Producto=>Producto.numero_catalogo===numero_catalogo);
        console.log(Producto);
    }

    function mostrarPedidos(){
        arrayProductos.forEach(lista=>{
            console.log(lista);
        })
    }

    function salir(){
        alert("Gracias");
    }

    let opcion=menu();
    switch(opcion){
        case 1:altaPedido();
        break;
        case 2:bajaPedido();
        break;
        case 3:modificarPedido();
        break;
        case 4:consultaPedido();
        break;
        case 5:mostrarPedidos();
        break;
        case 6:salir();
        default:
            alert("opcion incorrecta");
            break;
    }

*/

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const p1 = new Producto(1, "Remera_Jersey", 3000, "../img/art-4.jpg");
const p2 = new Producto(2, "Buzo friza estampado", 2500, "../img/art-22.jpg");
const p3 = new Producto(3, "Polera lanilla", 1340, "../img/art-24.jpg");
const p4 = new Producto(4, "remera lanilla sublimado", 2000, "../img/art-28.jpg");
const p5 = new Producto(5, "Remera jaspeado", 1500, "../img/art-65.jpg");
const p6 = new Producto(6, "Remera spum sublimada", 1200, "../img/art-70.jpg");
const p7 = new Producto(7, "Remera Jersey", 1000, "../img/art-4.jpg");
const p8 = new Producto(8, "Remera Jersey", 1300, "../img/art-4.jpg");

const productos = [p1, p2, p3, p4, p5, p6, p7, p8];

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                            <div class="producto">
                                <img class="card-img-tom producto-imagen" src="${producto.img}" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h3>${producto.nombre}</h3>
                                    <p>${producto.precio}</p>
                                    <button class="producto-agregar" id="boton${producto.id}"> Agregar al Carrito </button>
                                </div>
                            </div>`
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                gravity: "top",
                position: "right",
            }).showToast();
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

const verCarrito = document.getElementById("verCarrito");
const contenedorCarrito = document.getElementById("contenedorCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})


const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                            <div class="producto">
                                <img class="card-img-tom producto-imagen" src="${producto.img}" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h3>${producto.nombre}</h3>
                                    <p>${producto.precio}</p>
                                    <p>${producto.cantidad}</p>
                                    <button class="producto-agregar" id="eliminar${producto.id}"> Eliminar Producto </button>
                                </div>
                            </div>`
        contenedorCarrito.appendChild(card);
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    let indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: "Carrito Vacio!",
        icon: "success",
        confirmButtonText: "aceptar"
    })
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    localStorage.clear();
    mostrarCarrito();
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}


const finalizar = document.getElementById("finalizarCarrito");

finalizar.addEventListener("click", () => {
    Swal.fire({
        title: "¿Estas seguro de finalziar la compra?",
        icon: "error",
        confirmButtonText: "aceptar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result) => {
        Swal.fire({
            title: "Carrito finalizado!",
            icon: "success",
            confirmButtonText: "aceptar"
        })
    })
})