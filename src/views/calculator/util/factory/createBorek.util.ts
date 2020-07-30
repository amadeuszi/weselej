import { PersonCostModel } from "../../model/PersonCost.model";

export const createBorek = (): PersonCostModel => {
    const borek: PersonCostModel = {
        firstDayCost: 1200,
        isSelected: true,
        name: 'Robert Borek',
        secondDayCost: 200,
        taxCost: 0,
        taxCost2: 0,
    };

    return borek;
}