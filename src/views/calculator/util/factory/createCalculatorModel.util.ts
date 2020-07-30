import { CalculatorModel } from "../../model/Calculator.model";
import { createMusicians } from "./createMusicians.util";

export const createCalculatorModel = (): CalculatorModel => {
    const calculatorModel: CalculatorModel = {
        additionalCosts: [],
        benzinCost: {
            combustionPerHundredKm: 12,
            costPerLiter: 5,
            howManyKm: 100,
        },
        isWithSecondDay: true,
        busCost: {
            costPerDay: 160,
            howManyDays: 1,
        },
        peopleCostList: createMusicians(),
    };

    return calculatorModel;
}