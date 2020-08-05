import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useFormikContext } from "formik";
import { CalculatorModel } from "../model/Calculator.model";
import { PeopleCost } from "./PeopleCost.comp";
import { BenzinCost } from "./BenzinCost.comp";
import { useCalculatorFormikContext } from "../util/useCalculatorFormikContext.util";
import { CheckboxInput } from "../field/CheckboxInput.comp";
import { CostSummary } from "./CostSummary.comp";

export const Calculator: React.FC = () => {

    const {
        values,
    } = useCalculatorFormikContext();

    return (
        <Container>
            <PeopleCost />
            <BenzinCost />
            <CheckboxInput name="isWithSecondDay" value={values.isWithSecondDay} label="Wesele z poprawinami" />
            <CostSummary />
        </Container>
    )
};