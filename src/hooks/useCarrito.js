import { useState } from "react";

export const useCarrito=()=>{
    const [productosAgregados,setProductosAgregados]=useState([])

    const addItem=(remera,quantity)=>{
        const {stock,...rest}=remera
        const alreadyExists=productosAgregados.some(
            remera=>remera.id===rest.id
            )
        if(!alreadyExists)
         setProductosAgregados(prev=>[
            ...prev,
            {...rest,quantity},
         ])
         else{
            const actualizarProductos=productosAgregados.map(
                remera=>{
                    if(remera.id===rest.id)
                    return{
                        ...remera,
                        quantity:remera.quantity+quantity,
                    }
                    else return remera
                }
            )
            setProductosAgregados(actualizarProductos)
         }
    }

    const deleteItem= id =>{
        const otrosProductos=productosAgregados.filter(
            remera=>remera.id!==id
        )
        setProductosAgregados(otrosProductos)
    }

    const clear=()=>setProductosAgregados([])

    return{
        productosAgregados,
        addItem,
        clear,
        deleteItem,

    }
}