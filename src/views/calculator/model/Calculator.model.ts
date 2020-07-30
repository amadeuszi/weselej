import { PersonCostModel } from "./PersonCost.model";
import { BenzinCostModel } from "./BenzinCost.model";
import { AdditionalCost } from "./AdditionalCost.model";
import { BusCostModel } from "./BusCost.model";

export type CalculatorModel = {
    peopleCostList: Array<PersonCostModel>;
    benzinCost: BenzinCostModel;
    busCost: BusCostModel;
    additionalCosts: Array<AdditionalCost>
};