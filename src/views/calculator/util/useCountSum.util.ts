import { useCalculatorFormikContext } from "./useCalculatorFormikContext.util";
import { useCountBenzinCost } from "./useCountBenzinCost.util";
import { useCountMusicianCost } from "./useCountMusicianCost.util";

export const useCountSum = () => {
   

    const totalCost = useCountBenzinCost() + useCountMusicianCost();
    return totalCost;
};