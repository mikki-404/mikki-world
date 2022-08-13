import {Card, Col} from "react-bootstrap";
import React from "react";
import NewsWidgetContent from "./NewsWidgetContent";

export default function NewsWidget() {
    return (
        <Col xs={12} md={4} className="article-card">
            <NewsWidgetContent/>
        </Col>
    )
}