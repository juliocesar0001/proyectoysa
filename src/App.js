import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState,useRef,useEffect } from "react";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Carrito } from "./components/Carrito";
import { CartProvider } from "./context/carritoContext";
import { NavBar } from "./components/NavBar";
import { ItemCount } from "./components/ItemListContainer";
//import {ItemList} from "./components/ItemList";
import data from "./data/MOCK_DATA.json";

function App(){

    const [people, setPeople] = useState([])

	useEffect(() => {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(data), 3000)
		})

		promise.then(data =>setPeople(data))
	}, [])

  //Routes es como un switch case as
    return (
        <CartProvider>
 <BrowserRouter>

<NavBar/>
<Routes>  
    <Route 
    path="/" element={<ItemListContainer greeting="Productos"/>}
    />
    <Route 
    path="/categoria/:id" element={<ItemListContainer greeting="Productos"/>}
    />
    <Route 
    path="/item/:id" element={<ItemDetailContainer/>}
    />
    <Route 
    path="/carrito" element={<Carrito/>}
    />
</Routes>

</BrowserRouter>
        </CartProvider>
   
    ) 
}

export default App 




