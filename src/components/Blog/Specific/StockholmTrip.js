import React, {useState, useEffect} from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NewsWidget from "../../Common/NewsWidget";
import ArticleHeader from "../../Articles/ArticleHeader";

import headerImg from "../../../Assets/Blog/stockholm.jpeg";

function StockholmTripRecord() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader img={headerImg}
                               category="ПУТЕШЕСТВИЕ" date="АВГУСТ 2022" name="Стокгольм"/>
                <Row>
                    <Col xs={12} md={8} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>Будет дополнено</p>


                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    );
}

export default StockholmTripRecord;