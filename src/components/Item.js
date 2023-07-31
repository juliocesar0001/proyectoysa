import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import {ItemCount} from "./ItemListContainer"

export const Item=({remera})=>{

	return(
		<Card
		style={{width:"18rem"}}
		key={remera.id}
		className="float-start"
		>
			<Card.Img variant="top" src={remera.img}/>
			<Card.Body>
			<Card.Title>{remera.modelo}</Card.Title>
			<Card.Text>Categoria: {remera.categoria}</Card.Text>
			<Link to={ `/item/${remera.id}`}>
				<Button variant="primary">Ver datalle</Button>
			</Link>
			
			<ItemCount/>
		</Card.Body>
	</Card>	
	)
}



