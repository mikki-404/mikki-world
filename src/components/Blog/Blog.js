import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stockholmImg from "../../Assets/Blog/stockholm-banner.png";
import DefaultCard from "../Translations/DefaultCard";

function Blog() {
    return (
        <Container fluid className="translations-section">
            {/*<Particle />*/}
            <Container>
                <h1 className="translations-heading">
                    Немного <strong className="purple">о </strong> моей жизни
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={12} className="blog-card">
                        <DefaultCard
                            imgPath={stockholmImg}
                            isBlog={true}
                            title="Поездка в Стокгольм"
                            description="Август 2022"
                            link="/stockholm-trip"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Blog;