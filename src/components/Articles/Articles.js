import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import brainImg from "../../Assets/Articles/brain_400x200.jpeg";
import drawingImg from "../../Assets/Articles/drawing_400x200.jpeg";
import disintegrationImg from "../../Assets/Articles/disintegration_400x200.jpeg";
import tempImg from "../../Assets/default_400x200.png";
import TranslationCards from "../Translations/TranslationsCards";

function Articles() {
    return (
        <Container fluid className="translations-section">
            {/*<Particle />*/}
            <Container>
                <h1 className="translations-heading">
                    Небольшие <strong className="purple">статьи и мысли </strong> на тульпотематику
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="article-card">
                        <TranslationCards
                            imgPath={disintegrationImg}
                            isBlog={true}
                            title="Почему тульповодство - это плохо"
                            description="Мысли, мнение"
                            link="/disintegration"
                        />
                    </Col>

                    <Col md={4} className="article-card">
                        <TranslationCards
                            imgPath={brainImg}
                            isBlog={true}
                            title="Немного о сознании по книге М.Газзаниги «Сознание как инстинкт»"
                            description="Саммари, отзыв"
                            link="/consciousness-by-gazzaniga"
                        />
                    </Col>

                    <Col md={4} className="article-card">
                        <TranslationCards
                            imgPath={drawingImg}
                            isBlog={true}
                            title="Связь обучению рисованию и форсинга визуала"
                            description="Наблюдение, мысли"
                            link="/drawing-and-visual"
                        />
                    </Col>

                    <Col md={4} className="article-card">
                        <TranslationCards
                            imgPath={tempImg}
                            isBlog={true}
                            title="Будущая статья"
                            description="Здесь ничего пока нет"
                            link="/"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Articles;