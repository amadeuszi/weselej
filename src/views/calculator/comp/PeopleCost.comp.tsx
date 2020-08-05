import React from "react";
import { Container } from "react-bootstrap";
import { PeopleCostList } from "./PeopleCostList.comp";
import { PeopleCostHeader } from "./PeopleCostHeader.comp";
import { CostSummary } from "./CostSummary.comp";
import { CheckboxInput } from "../field/CheckboxInput.comp";
import { useCalculatorFormikContext } from "../util/useCalculatorFormikContext.util";

export const PeopleCost = () => {
   

    return (
        <Container>
            <PeopleCostHeader />
            <PeopleCostList />
           
        </Container>
    );
}