import { ItemCount } from "./ItemCount";
import { CarritoContext } from "../context/carritoContext";
import { useContext } from "react";

export const ItemDetail=({remera})=>{
    const {addItem}=useContext(CarritoContext)
    
    const onAdd=quantity=>addItem(remera,quantity)
    
    return(
        <div>
            <h1>{remera.nombre}</h1>
            <img 
            src={remera.img}
            height={300}
            alt={remera.nombre}
            />
            <p>${remera.precio}</p>
            <ItemCount stock={remera.precio} onAdd={onAdd}/>
        </div>

    );
}