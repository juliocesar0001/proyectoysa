import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import {getFirestore,doc,getdoc,collection,addDoc} from "firebase/firestore"
import {CarritoContext, CartContext} from "../context/carritoContext"
import { useCallback, useContext, useState } from "react"
import FormGroup from "react-bootstrap/esm/FormGroup"

export const Carrito=()=>{
    const [formValues,setFormValues]=useState({
        nombre:"",
        phone:"",
        email:"",
    })

    const {productosAgregados,deleteItem,clear}=useContext(CarritoContext)

    const sendOrder=()=>{
        const order={
            buyer:formValues,
            items:productosAgregados,
            total:total(),
        }

        const db=getFirestore()
        const orderCollection=collection(db,"orders")

        addDoc(orderCollection,order).then(response=>{
            if(response.id){
                clear()
                alert("su orden:"+response.id+"ha sido completada")
            }
        })
    }

    const handleChange =ev=>{
        setFormValues(prev=>({
            ...prev,
            [ev.target.name]:ev.target.value,

        }))
    }

    const total=()=>{
        productosAgregados.reduce(
            (acumulador,valorActual)=>
            acumulador+valorActual.quantity+valorActual.price,0
        )
        return(
            <Container className="mt-4" >
                <h1>Lista de productos</h1>
                {!productosAgregados.lenght?(
                    <mark>No hay productos</mark>
                ):(
                    <>
                    <Table stripped bordered hover variant="dark">
                        <thead>
                            <tr>
                              <th>Nombre</th>
                              <th></th>
                              <th>Precio</th>
                              <th>Cantidad</th>
                              <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosAgregados.map(remera=>(
                                <tr key={remera.id}>
                                    <td>{remera.nombre}</td>
                                    <td>{remera.precio}</td>
                                    <td>{remera.precio}</td>
                                    <td>
                                        <Button onClick={()=>
                                        deleteItem(remera.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>total</td>
                                <td></td>
                                <td></td>
                                <td>{total()}</td>
                            </tr>
                        </tfoot>
                    </Table>
                    <h2>Ingresar datos de usuario</h2>
                    <Form>
                        <Form.Group
                        className="mb-3"
                        constrolId="formBasicEmail"
                        >
                            <Form.labe>Nombre</Form.labe>
                            <Form.Control
                            onChange={handleChange}
                            value={formValues.name}
                            type="text"
                            name="name"
                            />

                        </Form.Group>

                        <Button
                        variant="primary"
                        type="button"
                        onClick={sendOrder}
                        >Submit</Button>
                    </Form>
                    </>
                )}
            </Container>
        )
    }
}