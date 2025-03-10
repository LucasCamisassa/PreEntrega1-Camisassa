import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function CardProducts({phone}) {
    return(
       <Card style={{ width: '18rem', border: "2px black solid", borderRadius:"10px", boxShadow:"2px 5px 10px black"}}>
            <Card.Img className="imgCellRed" variant="top" src={phone.img} />
            <Card.Body>
                <Card.Title className="cardTitleStyles">{phone.category}</Card.Title>
                <Card.Text className="cardTextStyles">{phone.model}</Card.Text>
                <Link to={`/item/${phone.id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card> 
    )

}

export default CardProducts