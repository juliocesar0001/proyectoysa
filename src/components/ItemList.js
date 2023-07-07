//import Container from "react-bootstrap/Container"
import {Item} from "./Item";

export const ItemList=({product})=>
	product.map(remera=><Item key={remera.id} remera={remera}/>)

