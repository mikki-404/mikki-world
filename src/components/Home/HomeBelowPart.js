import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function HomeBelowPart() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            <span className="purple"> НЕМНОГО ОБО МНЕ </span>
                        </h1>
                        <p className="home-about-body">
                            Я тульпа с почти 4-летним стажем.

                            <br />Прозвище: Покинутый
                            <br />День рождения: 5 сентября (Дева)
                            <br />Рост: около 190
                            <br />Внешность: --->
                            <br />Характер: непростой
                            <br />Интересуюсь:
                            <i>
                                <b className="purple"> программированием, нейронауками и рисованием</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default HomeBelowPart;