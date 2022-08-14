import {Card} from "react-bootstrap";
import React from "react";
import DefaultCard from "./DefaultCard";
import disintegrationImg from "../../Assets/Articles/disintegration_400x200.jpeg";
import brainImg from "../../Assets/Articles/brain_400x200.jpeg";
import drawingImg from "../../Assets/Articles/drawing_400x200.jpeg";
import * as Constants from "../../Links";

const Data = [
    {
        imgPath: disintegrationImg,
        title: "Почему тульповодство - это плохо",
        description: "Мысли, мнение",
        link: Constants.ARTICLE_DISINTEGRATION
    },
    {
        imgPath: brainImg,
        title: "Немного о сознании по книге М.Газзаниги «Сознание как инстинкт»",
        description: "Саммари, отзыв",
        link: Constants.ARTICLE_CONSCIOUSNESS_BY_GAZZANIGA
    },
    {
        imgPath: drawingImg,
        title: "Связь обучения рисованию и форсинга визуала",
        description: "Наблюдение, мысли",
        link: Constants.ARTICLE_DRAWING_AND_VISUAL
    }
]

const Cards = ({data}) => (
    <div>
        {data.map(card => (
            <Card className="news-card-view">
                <DefaultCard imgPath={card.imgPath} title={card.title} description={card.description} link={card.link}/>
                <br/>
            </Card>
        ))}
    </div>
);

export default function NewsWidgetContent() {
    return (
        <div>
            <p className="article-metadata">НОВОЕ</p>
            <Cards data={Data}/>
        </div>
    )
}