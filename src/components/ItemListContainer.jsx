import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer({saludo}){
    return(
        <>
        <div className="item-list-styles container mt-5">
            <div className="row">
                <div className="col text-center">
                    <h2 className="saludo-style">{saludo}</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemListContainer