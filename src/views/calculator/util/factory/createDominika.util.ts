import { PersonCostModel } from "../../model/PersonCost.model";

export const createDominika = (): PersonCostModel => {
    const dominika: PersonCostModel = {
        firstDayCost: 1000,
        isSelected: true,
        name: 'Dominika Nastulska',
        secondDayCost: 200,
        taxCost: 51,
        taxCost2: 34,
    };

    return dominika;
}