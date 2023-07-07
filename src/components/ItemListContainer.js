import { useState,useEffect } from "react";
import "../estilos/boton.css";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import {ItemList} from "./ItemList";
import data from "../data/productos.json";

export const ItemListContainer=props=>{
  const[product,setProduct]=useState([]);

  const {id}=useParams();

useEffect(()=>{
  const promesa=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
      resolve(data)
    },2000)
})
  promesa.then(result=>{
    if(id){
      setProduct(result.filter(product=>product.categoria===id))
    }else{
      setProduct(result)
    }
  })
},[id])

  return(
    <Container>
      <div>{props.greeting}</div>
    {product.length===0 ?(<div>Loading...</div>):(<ItemList product={product}/>)}
    </Container>
  )
}


function Contador({numClicks}){
    return(
        <div className="contador">{numClicks}</div>
    );
}

function Boton({texto,esBotonMas,manejarClick}){
    return(
        <button className={esBotonMas? "botonMas":"botonMenos"} onClick={manejarClick}>{texto}</button>
    );
}

function alerted(){
     alert("es un carrito");
}

export const ItemCount=()=>{

    const[numClicks,setnumClicks]=useState(0);

    let stock=10;

  const contadorMas=()=>{
    if(numClicks<11){
      setnumClicks(numClicks+1);
    }
  }

  const contadorMenos=()=>{
    if(numClicks>0){
      setnumClicks(numClicks-1);
    }
        
  }

    return(
    <div className="Cont">

    <div className="contenedor-principal">
    <Contador
    numClicks={numClicks}
    />

    <Boton
    texto="+"
    esBotonClick={true}
    manejarClick={contadorMas}
    />
    <Boton
    texto="-"
    esBotonClick={false}
    manejarClick={contadorMenos}
    />

    <Boton
    texto="Agregar al carrito"
    esBotonClick={false}
    manejarClick={alerted}
    />
    </div>
  </div>
      );
};