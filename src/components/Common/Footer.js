import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineDownCircle, AiOutlineInstagram, AiOutlineSend} from "react-icons/ai";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Mikki</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://vk.com/mikki_404"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineDownCircle/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="src/components/Common/Footer"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineInstagram/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="src/components/Common/Footer"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineSend/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;