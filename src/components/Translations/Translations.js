import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import defaultImg from "../../Assets/default_400x200.png";
import neuronsGoneWildImg from "../../Assets/Translations/neurons-gone-wild_400x200.jpeg";
import DefaultCard from "../Common/DefaultCard";
import {
    TRANSLATION_NEURONS_GONE_WILD,
    TRANSLATION_TULPAMANCY_GUIDE_DRAGONHEART,
    TRANSLATIONS_PATH
} from "../../FileWithConstants";

function Translations() {
    return (
        <Container fluid className="item-list-section">
            {/*<Particle />*/}
            <Container>
                <h1 className="section-heading">
                    Мои <strong className="purple">переводы </strong>
                </h1>
                <p style={{color: "white"}}>
                    Здесь собраны некоторые гайды и статьи, переведенные мной.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    <Col md={4} className="article-card">
                        <DefaultCard
                            imgPath={neuronsGoneWildImg}
                            isBlog={true}
                            title="Нейроны, которые сошли с ума"
                            description="by Кевин Симлер"
                            link={TRANSLATION_NEURONS_GONE_WILD}
                        />
                    </Col>

                    <Col md={4} className="article-card">
                        <DefaultCard
                            imgPath={defaultImg}
                            isBlog={true}
                            title="Тульпогайд в странное и удивительное"
                            description="by Dragonheart"
                            link={TRANSLATION_TULPAMANCY_GUIDE_DRAGONHEART}
                        />
                    </Col>

                    <Col md={4} className="article-card">
                        <DefaultCard
                            imgPath={defaultImg}
                            isBlog={true}
                            title="FAQ по тульповодству"
                            description="by Dragonheart"
                            link={TRANSLATIONS_PATH}
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Translations;