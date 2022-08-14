import React, {useState, useEffect} from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NewsWidget from "../../Common/NewsWidget";
import ArticleHeader from "../ArticleHeader";

import headerImg from "../../../Assets/Articles/drawing.png";

function DrawingArticle() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader img={headerImg} category="ВИЗУАЛ" date="ИЮЛЬ 2022"
                               name="Связь обучения рисованию и форсинга визуала"/>
                <Row>
                    <Col xs={12} md={8} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>На днях задумался, что форсинг визуала должен благотворно влиять на рисование, и
                                наоборот.</p>

                            <p>Рисование из воображения выглядит так: вы видите образ у себя в голове, можете
                                прочувствовать его, но вы не видите его так же четко, как реальную картинку. И когда вы
                                пытаетесь перенести образ на бумагу - как правило возникают проблемы.</p>

                            <p>Почему? Потому что мозг создает образы из исходных фрагментов реальности. Воображение -
                                это смесь наших воспоминаний. И для того, чтобы воссоздать детально что-то в голове - мы
                                должны четко помнить как тот или иной компонент выглядит.</p>

                            <p>А на что направлен форсинг визуала? На повышение четкости и детализации образов.
                                Фактически тренируется активная память нашего мозга, вы учитесь запоминать и
                                воспроизводить разные элементы реальности в голове в максимальном качестве.</p>

                            <p>Рисование принуждает воображать чётче и задумываться о деталях, а форсинг визуала также
                                направлен на повышение четкости и детальности образов в воображении. Так что одно может
                                помочь другому. Потому планируем параллельно работать по обоим направлениям ближайшие
                                месяцы.</p>


                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    );
}

export default DrawingArticle;