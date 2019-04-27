import React, { Fragment, Component } from 'react';

class CustomTextArea extends Component {
    render() {
        return (
            <Fragment>
                <label htmlFor={this.props.name}>{this.props.label}</label>{this.props.label && <br />}
                <textarea {...this.props.input}
                    type={this.props.type}
                    name={this.props.name}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxLength}
                    disabled={this.props.disabled} 
                />
            </Fragment>
        );
    }
}

export default CustomTextArea;