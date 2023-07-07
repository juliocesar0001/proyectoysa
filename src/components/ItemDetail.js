export const ItemDetail=({remera})=>{
    return(
        <>
        <div>{remera.nombre}</div>
        <div>{remera.modelo}</div>
        <div>{remera.precio}</div>
        <div>{remera.categoria}</div>
        </>
    );
}