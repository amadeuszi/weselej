import { useCalculatorFormikContext } from "./useCalculatorFormikContext.util";

export const useCountMusicianCost = () => {
    const { values } = useCalculatorFormikContext();

    const musicianCost = values.peopleCostList.map((musician) => {
        if (!musician.isSelected) {
            return 0;
        }
        let sum = 0;

        if (values.isWithSecondDay) {
            sum += musician.secondDayCost;
            sum += musician.taxCost2;
        }

        sum += musician.firstDayCost + musician.taxCost;
        return sum;
    }).reduce((a, b) => a + b, 0);
    return musicianCost;
};