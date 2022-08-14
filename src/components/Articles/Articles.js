import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import brainImg from "../../Assets/Articles/brain_400x200.jpeg";
import drawingImg from "../../Assets/Articles/drawing_400x200.jpeg";
import disintegrationImg from "../../Assets/Articles/disintegration_400x200.jpeg";
import DefaultCard from "../Common/DefaultCard";
import * as Constants from "../../Links";

const Data = [
    {
        imgPath: disintegrationImg,
        title: "Почему тульповодство - это плохо",
        description: "Мысли, мнение",
        link: Constants.ARTICLE_DISINTEGRATION
    },
    {
        imgPath: brainImg,
        title: "Немного о сознании по книге М.Газзаниги «Сознание как инстинкт»",
        description: "Саммари, отзыв",
        link: Constants.ARTICLE_CONSCIOUSNESS_BY_GAZZANIGA
    },
    {
        imgPath: drawingImg,
        title: "Связь обучения рисованию и форсинга визуала",
        description: "Наблюдение, мысли",
        link: Constants.ARTICLE_DRAWING_AND_VISUAL
    }
]

const Cards = ({data}) => (
    <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
        {data.map(card => (
            <Col md={4} className="article-card">
                <DefaultCard imgPath={card.imgPath} title={card.title} description={card.description} link={card.link}/>
            </Col>
        ))}
    </Row>
);

export default function Articles() {
    return (
        <Container fluid className="item-list-section">
            <Container>
                <h1 className="section-heading">
                    Небольшие <strong className="purple">статьи и мысли </strong> на тульпотематику
                </h1>
                <Cards data={Data}/>
            </Container>
        </Container>
    );
}