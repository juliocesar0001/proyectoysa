import {useState,useEffect}from "react";
import {getFirestroe,doc,getdoc} from "firebase/firestore"
import {ItemDetail} from "./ItemDetail"
import data from "../data/productos.json"
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";


const ItemDetailContainer=()=>{
    const[product,setProduct]=useState([])
    const {id}=useParams()

  useEffect(()=>{
    const promesa=new Promise((resolve,rejected)=>{
      const db=getFirestroe()

      const refDoc=doc(db,"items1",id)

      getdoc(refDoc).then(snapshot=>
        setProduct({id:snapshot.id, ...snapshot.data()})
        )

      setTimeout(()=>{
        resolve(data)
      },2000)
  },)
    promesa.then(result=>{
        setProduct(result[2])
    })
  },[id])
  
    return(
      <Container className="algo">
        <div>detalle</div>
      {product.length===0 ?(<div>Loading...</div>):(<ItemDetail remera={product}/>)}
      </Container>
    )
}


export default ItemDetailContainer;
