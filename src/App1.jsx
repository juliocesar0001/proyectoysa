import "./App.css"

// const Button= props=>{
//     const{text,bgColor}=props
//     console.log({props})
//     return<button style={{backgroundColor:bgColor}}>{text||"NO ENVIE TEXTO"}</button>
// }

const Button= ({text="Aceptar",bgColor})=>(
    <button style={{backgroundColor:bgColor}}>{text}</button>
)

function App1() {
    return(
    <>
    
    <Button text="cancel" bgColor="red"/>
    <Button text="Alert" bgColor="blue"/>
    <Button bgColor="Orange"/>
    </>
    )
}

export default App1

/*{<Button text="Alert"  />
PROPS=>{text:"Alert"} }*/

// App1>Button
// >> PROPS >>
// {age:10,gender:"female"}
