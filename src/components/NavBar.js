//import cart from "../carrito.png"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import navBar from "../estilos/navBar.css";
import {NavLink} from "react-router-dom";
import data from "../data/productos.json";
import Container from "react-bootstrap/Container";

const categories=data.map(product=>product.categoria);
const unique=new Set(categories);
 
export const NavBar = () =>(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Productos</Navbar.Brand>
            <Nav className="me-auto">
                {[...unique].map(item=>(
                    <NavLink className="nav-link" to={ `/categoria/${item} `}>
                        {item}
                    </NavLink>
                ))}
            </Nav>
        </Container>
    </Navbar>)