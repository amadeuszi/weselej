import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useFormikContext } from "formik";
import { CalculatorModel } from "../model/Calculator.model";
import { PeopleCost } from "./PeopleCost.comp";

export const Calculator: React.FC = () => {

    return (
        <Container>
            <PeopleCost />

        </Container>
    )
};