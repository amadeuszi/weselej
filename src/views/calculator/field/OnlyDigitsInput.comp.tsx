import { ErrorMessage, useFormikContext, Field } from 'formik';
import React, { FormEvent, useCallback, useRef } from 'react';
import _ from 'lodash';
import NumberFormat from 'react-number-format';
import { FormLabel } from 'react-bootstrap';

export interface OnlyDigitsInputProps {
    label?: string;
    disabled?: boolean;
    value?: number;
    name: string;
    appendSign?: string;
}

export const OnlyDigitsInput: React.FC<OnlyDigitsInputProps> = (props) => {

    return (
        <>
            <Field
                disabled={props.disabled}
                className="mr-2 small"
                name={props.name}
                type="number"
            />
        </>
    );
};
