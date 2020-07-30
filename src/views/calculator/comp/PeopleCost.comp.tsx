import React from "react";
import { Container } from "react-bootstrap";
import { PeopleCostList } from "./PeopleCostList.comp";
import { PeopleCostHeader } from "./PeopleCostHeader.comp";
import { CostSummary } from "./CostSummary.comp";
import { CheckboxInput } from "../field/CheckboxInput.comp";
import { useCalculatorFormikContext } from "../util/useCalculatorFormikContext.util";

export const PeopleCost = () => {
    const {
        values,
    } = useCalculatorFormikContext();

    return (
        <Container>
            <PeopleCostHeader />
            <PeopleCostList />
            <CheckboxInput name="isWithSecondDay" value={values.isWithSecondDay} label="Wesele z poprawinami" />
            <CostSummary />
        </Container>
    );
}