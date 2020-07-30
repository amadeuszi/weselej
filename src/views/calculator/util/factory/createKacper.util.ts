import { PersonCostModel } from "../../model/PersonCost.model";

export const createKacper = (): PersonCostModel => {
    const kacper: PersonCostModel = {
        firstDayCost: 600,
        isSelected: true,
        name: 'Kacper',
        secondDayCost: 100,
        taxCost: 30,
        taxCost2: 17,
    };

    return kacper;
}