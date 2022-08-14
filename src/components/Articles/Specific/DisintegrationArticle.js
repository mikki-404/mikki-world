import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import NewsWidget from "../../Common/NewsWidget";
import ArticleHeader from "../ArticleHeader";

import headerImg from "../../../Assets/Articles/disintegration_full.jpg";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function DisintegrationArticle() {
    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader img={headerImg}
                               category="МНЕНИЕ" date="АВГУСТ 2022" name="Почему тульповодство - это плохо"/>
                <Row>
                    <Col xs={12} md={9} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>Тульповодство очень часто преподносится как позитивно окрашенная практика, где ты
                                получаешь
                                друга, который подбодрит, поможет советом, выслушает и непременно будет на твоей
                                стороне. Так действительно бывает, но никто этого вам не гарантирует. Практика форсинга
                                направлена по сути на отчуждение части психики под другую личность и на нарушение ее
                                целостности. Потому стоит задуматься какой ценой вы можете получить этого потенциального
                                друга (или не получить). </p>
                            <p>В психиатрии есть понятие <strong>дезинтеграции личности</strong> - разъединения
                                отдельных психических процессов с нарушением целостности психической деятельности. Она
                                бывает 2 видов:
                                <ul>
                                    <li>Позитивная</li>
                                    <li>Негативная</li>
                                </ul>
                            </p>
                            <p><strong>Позитивная дезинтеграция</strong> фактически является разрывом между нашим
                                текущим Я и Я идеальным. Это приводит к кризису личности, но результатом данного кризиса
                                должен стать личностный скачок. Грубо говоря - человек растет над собой, избавляясь от
                                старого и внося новое в свою жизнь. По результату психика становится целостной и
                                обновленной.</p>
                            <p><strong>Негативная дезинтеграция</strong> же приводит к увеличению фрагментарности
                                личности, снижению баланса и увеличению аутизации личности. Негативная дезинтеграция
                                может привести к депрессии, изменению личности, психопатическим сдвигам и иным нехорошим
                                последствиям.</p>
                            <p>Тульповодство фактически и является некоторым подвидом искусственной дезинтеграции
                                личности, где мы пытаемся увеличить собственную фрагментарность, отчуждить часть
                                собственной личности и ресурсов для того, чтобы этим самым потенциальным другом
                                обзавестись. Я искренне считаю это той самой негативной дезинтеграцией, тем более что
                                случаи обострения либо манифистации психических расстройств на почве тульпофорсинга
                                далеко не редки.</p>
                            <p>Конечно, не все случаи практики тульповодства приводят к действительно непоправимым
                                последствиям, но это всегда риск. Это всегда нарушение целостности психики. И по
                                возможности личностные кризисы следует решать через позитивную дезинтеграцию, а не
                                негативную. Тульповодство не решит ваши проблемы, но легко может подкинуть
                                новых. <strong>Если есть возможность не форсить тульпу, то лучше этого не
                                    делать.</strong></p>
                            <p>Да и вообще, тульповодство - это еще и накладывание ограничений на собственную жизнь и
                                жизнь тульп: в одной голове нескольким личностям бывает тесно, личное пространоство
                                отсутствует, от конфликтов и столкновений интересов никуда не деться в прямом смысле,
                                постоянно надо о ком-то заботиться, что-то решать за всех или со всеми. В отдельных
                                случаях отдельные члены системы даже теряют мотивацию к жизни и могут попытаться
                                дропнуться.</p>
                            <p>Да и причины для создания тульпы у львиной доли юных тульповодов ограничиваются
                                интересом, развлечением либо использоваением тульпы для решения каких-то временных
                                проблем. Но тульпа - не психолог, ни ученый, ни специалист, а просто еще одна молодая
                                личность в вашей голове. Так что это выглядит как долбежка головой об стену, когда
                                просто зачесался лоб.</p>
                            <p>Потому очень хотелось бы видеть среди новичков в этом деле в большинстве своем лишь тех,
                                кто осознает все потенциальные риски и влияние данного решения на всю свою последующую
                                жизнь.</p>

                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    )
        ;
}
