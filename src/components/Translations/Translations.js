import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import defaultImg from "../../Assets/default_400x200.png";
import DefaultCard from "./DefaultCard";

function Translations() {
    return (
        <Container fluid className="translations-section">
            {/*<Particle />*/}
            <Container>
                <h1 className="translations-heading">
                    Мои <strong className="purple">переводы </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Здесь собраны некоторые гайды и статьи, переведенные мной.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="translations-card">
                        <DefaultCard
                            imgPath={defaultImg}
                            isBlog={true}
                            title="Тульпогайд в странное и удивительное"
                            description="by Dragonheart"
                            link="/tulpamancy-guide-into-the-strange-and-wonderful"
                        />
                    </Col>

                    <Col md={4} className="translations-card">
                        <DefaultCard
                            imgPath={defaultImg}
                            isBlog={true}
                            title="FAQ по тульповодству"
                            description="by Dragonheart"
                            link="/tulpamancy-guide-into-the-strange-and-wonderful"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Translations;