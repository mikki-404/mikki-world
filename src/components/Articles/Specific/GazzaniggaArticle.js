import React, {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NewsWidget from "../../Common/NewsWidget";
import ArticleHeader from "../ArticleHeader";

import headerImg from "../../../Assets/Articles/brain.jpeg";

function GazzaniggaArticle() {

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader img={headerImg}
                               category="СОЗНАНИЕ" date="ИЮЛЬ 2022"
                               name="Немного о сознании по книге М.Газзаниги «Сознание как инстинкт»"/>
                <Row>
                    <Col xs={12} md={9} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>Наш мозг не является монолитной системой, а имеет <strong>модульную иерархическую
                                структуру</strong>, что
                                подтверждено многими современными исследованиями. Причина такого устройства мозга в том,
                                чтобы
                                снизить энергопотребление при максимальной производительности мозга. Это порождает
                                некоторую
                                степень независимости модулей друг от друга при сохранении иерархической структуры между
                                слоями,
                                которым эти модули принадлежат.</p>

                            <p>При попытке изучить локализацию и структуру сознания был изучен ряд клинических случаев:
                                анэнцифалия (отсутствие коры головного мозга), болезнь Альцгеймера, потеря части
                                головного мозга
                                в результате травм, рассечение мозолистого тела мозга (когда 2 полушария разъединяются),
                                сомнамбулизм и другие. При любом из этих случаев сознание сохранялось, но претерпевало
                                некоторые
                                изменения. При утрате каких-то модулей сознание продолжало работать словно их никогда и
                                не
                                существовало.</p>

                            <p>То есть при тульповодстве, вполне возможно, что часть психики просто отчуждается и
                                происходит
                                дезорганизация, рассинхронизация ее агрегирующей функции, часть модулей просто выходит
                                из-под
                                нашего контроля. Для примера: если мы возьмем случай с рассечением мозолистого тела, то
                                в каждом
                                полушарии оказывалось свое сознание, однако оно просто игнорировало утраченные модули
                                (например,
                                не могло произвести логический анализ чего-то или не видело вторым глазом). Никакого
                                дискомфорта
                                при этом сознание не испытывало, то есть это просто агрегация состояний того, что
                                имеется в
                                наличии.</p>

                            <p>Потому и есть различия между личностями. Оно обусловлено доступностью и подконтрольностью
                                ряда
                                модулей нашего мозга. К примеру, при сомнамбулизме (лунатизме) личность человека
                                претерпевала
                                сильные изменения в связи с тем, что некоторые области мозга спали. Был описан случай,
                                когда
                                вежливый и мягкий человек в состоянии сомнамбулизма убил свою жену. Это просто пример,
                                ибо в
                                состоянии сомнамбулизма люди часто достаточно агрессивно реагируют на попытки разбудить
                                их.</p>

                            <p> В целом книга повлияла на меня несколько демотивирующе и фрустрирующе, но в ней
                                действительно
                                приведено много интересных клинических случаев и достаточно развернутая история эволюции
                                знаний
                                о мозге и сознании.</p>
                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    );
}

export default GazzaniggaArticle;