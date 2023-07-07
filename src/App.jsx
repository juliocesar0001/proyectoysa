import { useState } from "react";

function App(){
    const [count,setCount]=useState(4)

    return<input type="number" value={count} onChange={event=>setCount(event.target.value)}/>
}

export default App