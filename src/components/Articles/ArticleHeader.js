import React from "react";
import {Row} from "react-bootstrap";

export default function ArticleHeader(props) {
    return (
        <Row className={'article-header'}
             style={
                 {
                     backgroundImage: "linear-gradient(180deg, rgba(19, 15, 25, 1) 5%, rgba(255, 255, 255, 0) 100%), url('" + props.img + "')",
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     width: '99.5vw',
                 }
             }>
            <div>
                <div className="article-metadata">
                    <span>{props.category} | </span>
                    <time>{props.date}</time>
                </div>
                <h1>{props.name}</h1>
            </div>
        </Row>


    )
}