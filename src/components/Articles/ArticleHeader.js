import React from "react";
import {Row} from "react-bootstrap";

export function ArticleHeader(props) {
    return (
        <Row className={'article-header ' + props.bgClass}>
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