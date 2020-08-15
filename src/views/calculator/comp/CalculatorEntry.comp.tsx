import React from "react";
import { Container } from "react-bootstrap";
import { Formik } from "formik";
import { CalculatorModel } from "../model/Calculator.model";
import { createCalculatorModel } from "../util/factory/createCalculatorModel.util";
import { Calculator } from "./Calculator.comp";
import { WeightChart } from "./weightChart/WeightChart.comp";

export const CalculatorEntry: React.FC = () => {
    const handleSubmit = (values: CalculatorModel) => {
        console.log('submit');
        console.log('Summary cost: ');
    }

    return (
        <>
            <Container>
                <h1>Weselej</h1>
                <hr />
                <Formik
                    initialValues={createCalculatorModel()}
                    onSubmit={handleSubmit}
                >
                    <Calculator />
                </Formik>

                <WeightChart />

            </Container>
        </>
    )
}