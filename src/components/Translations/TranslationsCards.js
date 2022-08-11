import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

function TranslationCards(props) {
    return (
        <Link to={props.link}>
            <Card className="project-card-view" hoverable>
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

export default TranslationCards;