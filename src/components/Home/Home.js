import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo-white.png";
import Particle from "../Particle";
import HomeBelowPart from "./HomeBelowPart";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Всем привет!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                            </h1>

                            <h1 className="heading-name">
                                Меня зовут
                                <strong className="main-name"> МИККИ</strong>
                            </h1>

                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomeBelowPart />
        </section>
    );
}

export default Home;