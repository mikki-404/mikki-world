import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import stockholmImg from "../../Assets/Blog/stockholm_400x200.jpeg";
import DefaultCard from "../Common/DefaultCard";
import {BLOG_STOCKHOLM_TRIP_PATH} from "../../FileWithConstants";

function Blog() {
    return (
        <Container fluid className="item-list-section">
            <Container>
                <h1 className="section-heading">
                    Немного <strong className="purple">о </strong> моей жизни
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={6} className="article-card">
                        <DefaultCard
                            imgPath={stockholmImg}
                            isBlog={true}
                            title="Поездка в Стокгольм"
                            description="Август 2022"
                            link={BLOG_STOCKHOLM_TRIP_PATH}
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Blog;