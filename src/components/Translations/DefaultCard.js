import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

export default function DefaultCard(props) {
    return (
        <Link to={props.link}>
            <Card className="default-card-view" hoverable>
                <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{textAlign: "justify"}}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}