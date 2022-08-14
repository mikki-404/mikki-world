import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import DefaultCard from "../Common/DefaultCard";
import * as Constants from "../../FileWithConstants";
import stockholmImg from "../../Assets/Blog/stockholm_400x200.jpeg";

const Data = [
    {
        imgPath: stockholmImg,
        title: "Поездка в Стокгольм",
        description: "Август 2022",
        link: Constants.BLOG_STOCKHOLM_TRIP_PATH
    }
]

const Cards = ({data}) => (
    <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
        {data.map(card => (
            <Col md={6} className="article-card">
                <DefaultCard imgPath={card.imgPath} title={card.title} description={card.description} link={card.link}/>
            </Col>
        ))}
    </Row>
);

export default function Blog() {
    return (
        <Container fluid className="item-list-section">
            <Container>
                <h1 className="section-heading">
                    Немного <strong className="purple">о </strong> моей жизни
                </h1>
                <Cards data={Data}/>
            </Container>
        </Container>
    );
}