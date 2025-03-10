import React from "react";
import carritoCompra from "../img/carritoCompra.png"
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function CarritoCompra () {

    const cantidadProductos = 3;

    return(
        <>
        <div className="btn-carrito-style">
            <button className="h-75 w-100 btn-carrito-style"><img className="img-fluid h-75 w-100" src={carritoCompra} alt="logo-carrito" /></button>
            <span className="badge badge-pill badge-danger">{cantidadProductos}</span>
        </div>
        </>
    )
}

export default CarritoCompra