import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NewsWidget from "../../Common/NewsWidget";
import ArticleHeader from "../ArticleHeader";

import headerImg from "../../../Assets/Articles/strange_girl_who_fell_in_love_with_brain.jpeg";

function StrangeGirlWhoFellInLoveWithBrainArticle() {

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader img={headerImg}
                               category="КНИГИ" date="АВГУСТ 2022"
                               name="Немного о книге Венди Сузуки «Странная девочка, которая влюбилась в мозг»"/>
                <Row>
                    <Col xs={12} md={9} className="article-card">
                        <Card className="article-body">

                            <br/>
                            <p>В своей книге профессор-нейробиолог Венди Сузуки повествует историю своей жизни и карьеры
                                попутно делясь информацией о том, как знания из раздела нейробиологии помогло ей стать
                                счастливее и улучшить собственную жизнь. Большую часть своей карьеры она посвятила
                                изучению механизмов формирования долгосрочных воспоминаний, и в своей книге она приводит
                                советы и упражнения по этой теме. </p>

                            <h3> Как обогатить свой мозг?</h3>
                            <p> Вы можете обогатить свой мозг прямо сегодня с помощью приемов, которые займут у вас не
                                больше четырех минут в день. Этого вполне достаточно, чтобы оказать некоторое влияние на
                                ваш мозг, и сформировать новые нейронные связи. Вот некоторые из них
                                <ul>
                                    <li><strong>Прием для двигательной коры.</strong> Зайдите в Интернет и разучите
                                        танцевальное движение с сайта программы So You Think You Can Dance. Затем
                                        повторяйте его в течение четырех минут под вашу любимую музыку.
                                    </li>
                                    <li><strong>Прием для вкусовой коры.</strong> Попробуйте блюда новой для вас кухни:
                                        лаосскую, африканскую, хорватскую, турецкую или любую другую национальную кухню.
                                        Вот очень полезный прием для вкусовой коры: попробуйте пообедать в полной
                                        темноте. Проверьте, как отсутствие визуальных впечатлений повлияет на вкусовые
                                        ощущения.
                                    </li>
                                    <li><strong>Когнитивный прием.</strong> Посмотрите лекцию канала TED на тему, в
                                        которой совершенно не разбираетесь. Послушайте аудиозапись спектакля,
                                        радиопередачи или лекции на интересную тему. Прочитайте статью в рубрике, куда
                                        вы обычно никогда не заглядываете – для меня это могла бы быть финансовая или
                                        спортивная колонка газеты.
                                    </li>
                                    <li><strong>Прием для зрительной коры.</strong> В Интернете или музее выберите
                                        незнакомое произведение, порассматривайте его спокойно хотя бы четыре минуты.
                                        Постарайтесь при этом отвлечься от окружающей действительности и «потеряться» в
                                        том, что рассматриваете. Это стимулирует зрительную кору.
                                    </li>
                                    <li><strong>Прием для слуховой коры.</strong> Зайдите на любой музыкальный
                                        интернет-сайт (список может быть бесконечным) и прослушайте известную песню того
                                        музыкального жанра, который вы обычно игнорируете. Попытайтесь понять, чем
                                        объясняется популярность этой вещи в своем жанре.
                                    </li>
                                    <li><strong>Прием для обоняния.</strong> Главная разница между профессиональным
                                        сомелье, способным различить множество ароматов и точно описать их, и вами или
                                        мной заключается в одной простой вещи – практике. Прежде чем приступать к еде,
                                        подождите несколько минут – принюхайтесь. Постарайтесь ощутить все ароматы блюда
                                        и попробуйте описать их словами. Это поможет вам лучше настроиться на
                                        обонятельные ощущения.
                                    </li>
                                </ul>
                            </p>

                            <h3>Как запоминать эффективнее?</h3>
                            <p><ol>
                                <li><strong>Повторение</strong>. Чем большее число раз вы вызываете
                                в памяти какое-то воспоминание, тем прочнее оно
                                становится. Скучно, но это правда. На нейронном
                                уровне с каждым повторением у вас укрепляются
                                синаптические связи. Они обеспечивают это
                                воспоминание и позволяют ему противостоять помехам
                                от других воспоминаний или общей деградации памяти.
                                Повторение задействует нейронные сети, которые
                                относятся к системе внимания. Иными словами, мы склонны помнить то, на что обратили
                                внимание.</li>
                                <li><strong>Ассоциации</strong>. Если вы хотите запомнить что-то
                                новое, попытайтесь связать это с хорошо известными
                                фактами или выстроить систему ассоциаций –
                                это поможет. Чем больше у воспоминания ассоциаций,
                                тем оно прочнее. Дело в том, что ассоциации позволяют
                                извлекать это воспоминание множеством способов:
                                если одна из них не сработает, помогут остальные.</li>
                                <li><strong>Эмоциональный резонанс</strong>. Мы знаем,
                                что эмоциональные воспоминания прочнее других,
                                да и держатся они дольше. Объясняется это тем,
                                что мозжечковая миндалина – структура, необходимая
                                для обработки эмоций, – способна формировать очень
                                долговечные воспоминания при помощи гиппокампа.
                                Когда-то, десятки тысяч лет назад, мозжечковая
                                миндалина (один из древнейших отделов мозга)
                                автоматически сигнализировала нам о состоянии среды,
                                о ее полезности или опасности. С развитием более
                                сложных мозговых структур мозжечковая миндалина
                                начала направлять в гиппокамп «подкрепления»,
                                когда тот регистрировал самые яркие эмоциональные
                                переживания. Она сигнализировала гиппокампу:
                                запомни этот момент, он заставил меня смеяться,
                                плакать, визжать от ужаса! Именно по этой причине
                                наши сильные эмоциональные воспоминания, кажется,
                                намертво впечатываются в наш мозг и хранятся в нем
                                очень долго.</li>
                                <li><strong>Новизна</strong>. Мозг устроен так, чтобы фокусировать
                                внимание на новизне. Так что по-настоящему необычные события – скажем, снегопад в
                                Калифорнии – как правило, остаются в памяти очень надолго.</li>
                                </ol>
                                </p>

                        </Card>
                    </Col>
                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    );
}

export default StrangeGirlWhoFellInLoveWithBrainArticle;