import { useFormikContext } from "formik";
import { CalculatorModel } from "../model/Calculator.model";

export const useCalculatorFormikContext = () => {
    return useFormikContext<CalculatorModel>();
}