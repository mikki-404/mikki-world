import React, {useState, useEffect} from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {NewsWidget} from "./NewsWidget";
import {ArticleHeader} from "./ArticleHeader";

export function DisintegrationArticle() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader bgClass="article-header-disintegration"
                category="МНЕНИЕ" date="АВГУСТ 2022" name="Принудительная дезинтеграция психики как результат форсинга"/>
                <Row>
                    <Col xs={12} md={8} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>Пока сидел в ванной - тоже пришел к подобным мыслям, что тульповодство - это плохо. Это
                                накладывание самоограничений на собственную жизнь и жизнь тульп. Потому что живете потом
                                как килька в банке: в тесноте и дай бог что б не в обиде. Постоянно надо о ком-то
                                заботиться в голове, что-то решать за всех или со всеми. Грубо говоря, хорошо если всем
                                хорошо, а бывает, что некоторые и жить не хотят потом. Мозг принудительно
                                дезорганизован, ресурсы делятся у кого как, глюки какие-то как побочный эффект. А все
                                часто со скуки, интереса и непонимания во что вляпываются.</p>

                            <p>Не все случаи, но есть те, кто действительно чувствует себя лучше в такой среде. Но часто
                                совсем юные особы бросаются в это дело насмотревшись тиктока и из-за, зачастую,
                                временных проблем.</p>

                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    );
}
