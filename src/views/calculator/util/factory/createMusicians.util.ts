import { PersonCostModel } from "../../model/PersonCost.model";
import { createBorek } from "./createBorek.util";
import { createDominika } from "./createDominika.util";
import { createMichal } from "./createMichal.util";
import { createKacper } from "./createKacper.util";

export const createMusicians = (): Array<PersonCostModel> => {
    return [
        createBorek(),
        createDominika(),
        createMichal(),
        createKacper(),
    ];
}