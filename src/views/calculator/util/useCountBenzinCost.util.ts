import { useCalculatorFormikContext } from "./useCalculatorFormikContext.util";

export const useCountBenzinCost = () => {
    const { values } = useCalculatorFormikContext();

    const {
        combustionPerHundredKm,
        costPerLiter,
        howManyKm,
    } = values.benzinCost;
    const benzinCost = combustionPerHundredKm * howManyKm / 100 * costPerLiter;
    return benzinCost;
};