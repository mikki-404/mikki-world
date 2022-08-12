import {Card, Col} from "react-bootstrap";
import React from "react";

export function NewsWidget() {
    return (
        <Col xs={6} md={4} className="article-card">

            <Card className="article-body">
                <p>Здесь будут последние статьи и новости :)</p>
            </Card>
        </Col>
    )
}