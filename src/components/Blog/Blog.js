import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stockholmImg from "../../Assets/Blog/stockholm_400x200.jpeg";
import DefaultCard from "../Common/DefaultCard";

function Blog() {
    return (
        <Container fluid className="item-list-section">
            {/*<Particle />*/}
            <Container>
                <h1 className="section-heading">
                    Немного <strong className="purple">о </strong> моей жизни
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="article-card">
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