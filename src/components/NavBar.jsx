import React from "react";
import imagenCarrito from "../img/imagenCarrito.png";
import CartWidget from "../components/CartWidget"
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    return (
        <>
        <div className="d-flex container navbar-styles">
            <img className="img-fluid img-logo-style" src={imagenCarrito} alt="logo-tienda" />
            <ul className="d-flex container justify-content-around align-items-center list-unstyled m-1">
                <li><a className="text-decoration-none li-navbar-style" href="http://" target="_blank" rel="noopener noreferrer">HOME</a></li>
                <li><a className="text-decoration-none li-navbar-style" href="http://" target="_blank" rel="noopener noreferrer">PRODUCTOS</a></li>
                <li><a className="text-decoration-none li-navbar-style" href="http://" target="_blank" rel="noopener noreferrer">¿QUIENES SOMOS?</a></li>
                <li><a className="text-decoration-none li-navbar-style" href="http://" target="_blank" rel="noopener noreferrer">CONTACTO</a></li>
            </ul>
            <CartWidget />
        </div>
        </>
    )
}

export default NavBar