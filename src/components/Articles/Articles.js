import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import brainImg from "../../Assets/Articles/brain_400x200.jpeg";
import drawingImg from "../../Assets/Articles/drawing_400x200.jpeg";
import disintegrationImg from "../../Assets/Articles/disintegration_400x200.jpeg";
import strangeGirlImg from "../../Assets/Articles/strange_girl_who_fell_in_love_with_brain_400x200.jpeg";
import DefaultCard from "../Common/DefaultCard";
import * as Constants from "../../Links";

const Data = [
    {
        imgPath: strangeGirlImg,
        title: "Немного о книге Венди Сузуки «Странная девочка, которая влюбилась в мозг»",
        description: "Книга, отзыв",
        link: Constants.ARTICLE_STRANGE_GIRL_WHO_FELL_IN_LOVE_WITH_BRAIN
    },
    {
        imgPath: disintegrationImg,
        title: "Почему тульповодство - это плохо",
        description: "Мнение, мысли",
        link: Constants.ARTICLE_DISINTEGRATION
    },
    {
        imgPath: brainImg,
        title: "Немного о сознании по книге М.Газзаниги «Сознание как инстинкт»",
        description: "Книга, отзыв",
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
                    Мои <strong className="purple">заметки</strong>
                </h1>
                <p style={{color: "white"}}>
                    Здесь собраны небольшие статьи и мысли тульпотематику и не только
                </p>
                <Cards data={Data}/>
            </Container>
        </Container>
    );
}