import React from "react";
import { useFormikContext } from "formik";
import { CalculatorModel } from "../model/Calculator.model";
import { Col, Row } from "react-bootstrap";
import { CheckboxInput } from "../field/CheckboxInput.comp";
import { OnlyDigitsInput } from "../field/OnlyDigitsInput.comp";

export const PeopleCostList = () => {
    const {
        values,
    } = useFormikContext<CalculatorModel>()

    const musicians = values.peopleCostList;

    return (
        <>
            {
                musicians.map((musician, index) => (
                    <Row>
                        <Col>
                            <CheckboxInput
                                name={`peopleCostList[${index}].isSelected`}
                                value={values.peopleCostList[index].isSelected}
                                label={''}
                            />
                        </Col>
                        <Col>
                            { musician.name }
                        </Col>
                        <Col>
                            <OnlyDigitsInput name={`peopleCostList[${index}].firstDayCost`} />
                        </Col>
                        <Col>
                            <OnlyDigitsInput
                                disabled={!values.isWithSecondDay}
                                name={`peopleCostList[${index}].secondDayCost`}
                            />
                        </Col>
                        <Col>
                            { values.isWithSecondDay ? musician.taxCost + musician.taxCost2 : musician.taxCost }
                        </Col>
                    </Row>
                ))
            }
        </>
    );
};