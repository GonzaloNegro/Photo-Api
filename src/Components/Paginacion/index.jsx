import React from "react";

function Paginacion(props){
    return(
        <div className="py-3">
            <p className="row justify-content-center">Página actual: {props.pagina}</p>
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;