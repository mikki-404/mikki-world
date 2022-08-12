import React, {useState, useEffect} from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {NewsWidget} from "../NewsWidget";
import {ArticleHeader} from "../ArticleHeader";

export function DisintegrationArticle() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader bgClass="article-header-disintegration"
                               category="МНЕНИЕ" date="АВГУСТ 2022" name="Почему тульповодство - это плохо"/>
                <Row>
                    <Col xs={12} md={8} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>В психиатрии есть понятие <strong>дезинтеграции личности</strong> - разъединения
                                отдельных психических
                                процессов с нарушением целостности психической деятельности. Она бывает 2 видов:
                                <ul>
                                    <li>Позитивная</li>
                                    <li>Негативная</li>
                                </ul>
                            </p>
                            <p><strong>Позитивная дезинтеграция</strong> фактически является разрывом между нашим
                                текущим Я и Я
                                идеальным. Это приводит к кризису личности, но результатом данного кризиса должен
                                стать личностный скачок. Грубо говоря - человек растет над собой, избавляясь от
                                старого и внося новое в свою жизнь.</p>
                            <p><strong>Негативная дезинтеграция</strong> же приводит к увеличению фрагментарности
                                личности, снижению
                                баланса и увеличению аутизации личности. Негативная дезинтеграция может привести к
                                депрессии, изменению личности, психопатическим сдвигам и иным нехорошим последствиям.
                                Тульповодство фактически и является видом искусственной негативной
                                дезинтеграции личности.</p>

                            <p>Конечно, не все случаи практики тульповодства приводят к действительно непоправимым
                                последствиям, но это всегда риск. Это всегда нарушение целостности психики. И по
                                возможности личностные кризисы следует решать через позитивную дезинтеграцию, а не
                                негативную. Тульповодство не решит ваши проблемы, но легко может подкинуть
                                новых. <strong>Если есть возможность не форсить тульпу, то лучше этого не
                                    делать.</strong></p>

                            <p>Да и вообще, тульповодство - это накладывание самоограничений на собственную жизнь и
                                жизнь тульп. Потому что живете потом как килька в банке: в тесноте и дай бог что б не в
                                обиде. Постоянно надо о ком-то заботиться в голове, что-то решать за всех или со всеми.
                                Грубо говоря, хорошо если всем хорошо, а бывает, что некоторые члены системы и жить не
                                хотят потом.</p>

                            <p>Да и причины для создания тульпы у львиной доли юных тульповодов ограничиваются
                                интересом, развлечением либо использоваением тульпы для решения каких-то временных
                                проблем. Но тульпа - не психолог, ни ученый, ни специалист, а просто еще одна молодая
                                личность в вашей голове. Так что это выглядит как долбежка головой об стену когда просто
                                зачесался лоб.</p>

                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    )
        ;
}
