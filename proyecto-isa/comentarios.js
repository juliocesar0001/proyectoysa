const comentarios = document.getElementById("opinion");
const listaComentarios = "../json/comentarios.json";

fetch(listaComentarios)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(producto => {
            comentarios.innerHTML += `
                                <h2>Nombre:${producto.nombre}</h2>
                                <p>Comentario :${producto.cometario}</p>
                            `
        })
    })
    .catch(error => console.log(error))