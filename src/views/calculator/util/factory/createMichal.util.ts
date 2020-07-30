import { PersonCostModel } from "../../model/PersonCost.model";

export const createMichal = (): PersonCostModel => {
    const michal: PersonCostModel = {
        firstDayCost: 600,
        isSelected: true,
        name: 'Michal',
        secondDayCost: 100,
        taxCost: 30,
        taxCost2: 17,
    };

    return michal;
}