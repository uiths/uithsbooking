import React, { Fragment, Component } from 'react';

// class CustomInput extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <label htmlFor={this.props.name}>{this.props.label}</label><br />
//                 <input {...this.props.input}
//                     type={this.props.type}
//                     name={this.props.name}
//                     // value={this.props.defaultValue}
//                     /*${this.props.meta.error && ' error-form'} */
//                     className={`${this.props.className } ` }
//                     placeholder={this.props.defaultValue}
//                     maxLength={this.props.maxLength}
//                     disabled={this.props.disabled} 
//                 />
//             </Fragment>
//         );
//     }
// }

// export default CustomInput;

export const CustomInput = ({
    input,
    label,
    type,
    defaultValue,
    symbol,
    name,
    values,
    className,
    maxLength,
    disabled,

    meta: { touched, error, warning }
}) => (
        <Fragment>
            <label htmlFor={name}>{label}</label><br />

            {input.name === 'email' || input.name === 'username' ?
                <input {...input}
                    type={type}
                    name={name}
                    // value={this.props.defaultValue}
                    /*${this.props.meta.error && ' error-form'} */
                    className={`${className} `}
                    placeholder={defaultValue}
                    maxLength={maxLength}
                    readOnly
                />
                : <input {...input}
                    type={type}
                    name={name}
                    // value={this.props.defaultValue}
                    /*${this.props.meta.error && ' error-form'} */
                    className={`${className} `}
                    placeholder={defaultValue}
                    maxLength={maxLength}
                    disabled={disabled}
                />}
            {/* {touched &&
                ((error && <div className='validation' >{error}</div>))} */}
        </Fragment>)
