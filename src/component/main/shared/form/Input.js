import React from 'react';

export const Input = ({
    input,
    label,
    type,
    defaultValue,
    symbol,
    name,
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
                {console.log(defaultValue)}
                {input.name === 'email' ?
                <input {...input} readOnly name={input.name} value={defaultValue} type={type} className={className} />
                :<input {...input} name={name} value={defaultValue}  type={type} className={className} />}
            {touched &&
                ((error && <div className='validation' >{error}</div>))}
        </div>
    )
