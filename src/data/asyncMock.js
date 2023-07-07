const productos=[
    {
        id:"1",
        name:"julio",
        price:550,
        category:"celular",
        stock:25,
        descripcion:"descripcion de cel"
    },
    {   
        id:"2",
        name:"karen",
        price:320,
        category:"tablet",
        stock:22,
        descripcion:"descripcion de la tablet"
},
{
    id:"3",
    name:"aio",
    price:550,
    category:"cAular",
    stock:25,
    descripcion:"ddipcion de cel"
}
]

export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod=>prod.id===productId))
        },500)
    })
}