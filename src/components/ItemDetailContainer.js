import {useState,useEffect}from "react";
import {ItemDetail} from "./ItemDetail"
import data from "../data/productos.json"
import Container from "react-bootstrap/esm/Container";

const ItemDetailContainer=()=>{
    const[product,setProduct]=useState([]);

  useEffect(()=>{
    const promesa=new Promise((resolve,rejected)=>{
      setTimeout(()=>{
        resolve(data)
      },2000)
  })
    promesa.then(result=>{
        setProduct(result[2])
    })
  },)
  
    return(
      <Container className="algo">
        <div>detealle</div>
      {product.length===0 ?(<div>Loading...</div>):(<ItemDetail remera={product}/>)}
      </Container>
    )
}


export default ItemDetailContainer;
