import React from "react";
import {Worker, Viewer} from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";
import {Container, Row, Card, Col} from "react-bootstrap";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


export default function AllPagesPDFContainer(props) {

    const {pdf} = props;
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Container>
                <Row>
                    <Col className="article-card">
                        <Card>
                            <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Worker>
    );
}