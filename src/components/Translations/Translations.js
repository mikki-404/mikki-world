import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import defaultImg from "../../Assets/default_400x200.png";
import neuronsGoneWildImg from "../../Assets/Translations/neurons-gone-wild_400x200.jpeg";
import DefaultCard from "../Common/DefaultCard";
import * as Constants from "../../Links";

const Data = [
    {
        imgPath: neuronsGoneWildImg,
        title: "Нейроны, которые сошли с ума",
        description: "by Кевин Симлер",
        link: Constants.TRANSLATION_NEURONS_GONE_WILD
    },
    {
        imgPath: defaultImg,
        title: "Тульпогайд в странное и удивительное",
        description: "by Dragonheart",
        link: Constants.TRANSLATION_TULPAMANCY_GUIDE_DRAGONHEART
    },
    {
        imgPath: defaultImg,
        title: "FAQ по тульповодству",
        description: "by Dragonheart",
        link: Constants.TRANSLATIONS_PATH
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

function Translations() {
    return (
        <Container fluid className="item-list-section">
            <Container>
                <h1 className="section-heading">
                    Мои <strong className="purple">переводы </strong>
                </h1>
                <p style={{color: "white"}}>
                    Здесь собраны некоторые гайды и статьи, переведенные мной.
                </p>
                <Cards data={Data}/>
            </Container>
        </Container>
    );
}

export default Translations;