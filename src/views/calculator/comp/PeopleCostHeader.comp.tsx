import React from "react";
import { Col, Row } from "react-bootstrap";

export const PeopleCostHeader: React.FC = () => {
    return (
        <Row>
            <Col>
                Czy jedzie
            </Col>
            <Col>
                Imię i nazwisko
            </Col>
            <Col>
                Koszt wesla
            </Col>
            <Col>
                Koszt poprawin
            </Col>
            <Col>
                Podatek
            </Col>
        </Row>
    )
}