import React from 'react';
import { useCalculatorFormikContext } from '../util/useCalculatorFormikContext.util';
import { OnlyDigitsInput } from '../field/OnlyDigitsInput.comp';

export const BenzinCost: React.FC = () => {
    const { values } = useCalculatorFormikContext();
    const costOfBenzin = values.benzinCost.combustionPerHundredKm * values.benzinCost.costPerLiter * (values.benzinCost.howManyKm / 100);
    
    return (
        <p>
            km: 
            <OnlyDigitsInput name="benzinCost.howManyKm"/>
            Benzin cost: {costOfBenzin} PLN
        </p>
    );
}

