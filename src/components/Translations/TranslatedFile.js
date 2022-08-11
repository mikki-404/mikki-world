import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import AllPagesPDFContainer from "./AllPagesPDFContainer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const guideLink =
    "https://raw.githubusercontent.com/mikki-404/webapp/master/src/Assets/Guide-test.pdf";

function TranslatedFile() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="translations-section">

                <p className="article-metadata">Тульпогайд в странное и удивительное <b className="purple">by Dragonheart</b></p>
                    {/*<Document file={guideLink} className="d-flex justify-content-center">*/}
                    {/*    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />*/}
                    {/*</Document>*/}
                    <div className="all-page-container">
                        <AllPagesPDFContainer pdf={guideLink} />
                    </div>


            </Container>
        </div>
    );
}

export default TranslatedFile;