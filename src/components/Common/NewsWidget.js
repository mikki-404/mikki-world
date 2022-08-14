import {Card, Col} from "react-bootstrap";
import React from "react";
import NewsWidgetContent from "./NewsWidgetContent";

export default function NewsWidget(props) {
    const mdValue = props.md || 3;
    return (
        <Col xs={12} md={mdValue} className="article-card">
            <NewsWidgetContent/>
        </Col>
    )
}