import React from 'react';

export const Input = ({
    input,
    label,
    type,
    symbol,
    className,
    meta: { touched, error, warning }
}) => (
        <div className='form-group'>
            <label>{label}</label>
                {symbol &&
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>{symbol}</div>
                    </div>
                }
                <input {...input} type={type} className={className} />
            {touched &&
                ((error && <div className='validation'>{error}</div>))}
        </div>
    )
