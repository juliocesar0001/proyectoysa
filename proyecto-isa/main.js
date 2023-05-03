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




