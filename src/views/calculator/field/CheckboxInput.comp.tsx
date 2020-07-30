import { FormGroup } from 'react-bootstrap';
import { useFormikContext } from 'formik';
import React, { FormEvent, useCallback } from 'react';

interface CheckboxInputProps {
    name: string;
    value: boolean;
    isError?: boolean;
    label: string;
    onChange?: any;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
    const { handleBlur, handleChange } = useFormikContext();

    const handleCheckboxChange = useCallback((event: FormEvent) => {
        if (props.onChange) {
            props.onChange(event);
        }
        handleChange(event);
    }, [ props, handleChange ]);

    return (
        <FormGroup>
                <label>
                    {props.label}
                    <input
                        name={props.name}
                        id={props.name}
                        type="checkbox"
                        checked={props.value}
                        onBlur={handleBlur}
                        onChange={handleCheckboxChange}
                    />
                </label>
        </FormGroup>
    );
};
