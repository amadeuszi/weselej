import React from "react";
import { Container, Row } from "react-bootstrap";
import { useCountSum } from "../util/useCountSum.util";

export const CostSummary: React.FC = () => {
    const sum = useCountSum();
    const sumWithTax = sum * 1.23;

    return (
        <>
            <hr />
            <h2>
                Suma
            </h2>
            <Container>
                <Row>
                    Suma bez podatku: {sum}
                </Row>
                <Row>
                    Suma z podatkiem: {sumWithTax}
                </Row>
            </Container>
        </>
    )
}