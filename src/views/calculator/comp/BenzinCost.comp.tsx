import React from 'react';
import { useCalculatorFormikContext } from '../util/useCalculatorFormikContext.util';
import { OnlyDigitsInput } from '../field/OnlyDigitsInput.comp';
import { useCountBenzinCost } from '../util/useCountBenzinCost.util';

export const BenzinCost: React.FC = () => {
    const { values } = useCalculatorFormikContext();
    const costOfBenzin = useCountBenzinCost();
    
    return (
        <p>
            km: 
            <OnlyDigitsInput name="benzinCost.howManyKm"/>
            Benzin cost: {costOfBenzin} PLN
        </p>
    );
}

