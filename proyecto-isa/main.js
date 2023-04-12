/* Simulador interactivo de promedio de edades ingresados */

var edades;
var promedio;
var suma=0;
var cant_edades=parseInt(prompt("digite la cantidad de edades a promediar"));

for(i=0;i<cant_edades;i++){
    var edades=parseInt(prompt("digite la edad "+i));
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
}