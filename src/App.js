import "./App.css";
import {BrowserRouter,Routes,Route, Router} from "react-router-dom";
import { useState,useRef,useEffect } from "react";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
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

    return (
    <BrowserRouter>

          
        
          
          <NavBar/>
          <Routes>
            <Route 
            path="/" element={<ItemListContainer greeting="hola"/>}
            />
            <Route 
            path="/categoria/:id" element={<ItemListContainer greeting="hola"/>}
            />
          <Route 
            path="/item/:id" element={<ItemDetailContainer/>}
            />
          </Routes>
    
    </BrowserRouter>
    ) 
}

export default App 




