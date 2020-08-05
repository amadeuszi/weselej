import React from 'react';
import { useCalculatorFormikContext } from '../util/useCalculatorFormikContext.util';

export const BenzinCost: React.FC = () => {
    const { values } = useCalculatorFormikContext();
    const costOfBenzin = values.benzinCost.combustionPerHundredKm * values.benzinCost.costPerLiter * (values.benzinCost.howManyKm / 100);

    return (
        <p>
            Benzin cost: {costOfBenzin} PLN
        </p>
    );
}

