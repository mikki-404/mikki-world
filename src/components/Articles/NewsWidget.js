import {Card, Col} from "react-bootstrap";
import React from "react";
import DefaultCard from "../Translations/DefaultCard";
import disintegrationImg from "../../Assets/Articles/disintegration_400x200.jpeg";
import brainImg from "../../Assets/Articles/brain_400x200.jpeg";
import drawingImg from "../../Assets/Articles/drawing_400x200.jpeg";

export function NewsWidget() {
    return (
        <Col xs={12} md={4} className="article-card">
            <p className="article-metadata">НОВОЕ</p>
            <Card className="news-card-view">
                <DefaultCard
                    imgPath={disintegrationImg}
                    isBlog={true}
                    title="Почему тульповодство - это плохо"
                    description="Мысли, мнение"
                    link="/disintegration"
                />
                <br/>
                <DefaultCard
                    imgPath={brainImg}
                    isBlog={true}
                    title="Немного о сознании по книге М.Газзаниги «Сознание как инстинкт»"
                    description="Саммари, отзыв"
                    link="/consciousness-by-gazzaniga"
                />
                <br/>
                <DefaultCard
                    imgPath={drawingImg}
                    isBlog={true}
                    title="Связь обучения рисованию и форсинга визуала"
                    description="Наблюдение, мысли"
                    link="/drawing-and-visual"
                />
            </Card>
        </Col>
    )
}