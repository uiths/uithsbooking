import React, { Fragment, Component } from 'react';

class CustomSelect extends Component {
    render() {
        return (
            <Fragment>
                <label htmlFor={this.props.input.name}>{this.props.label}</label><br />
                <select name={this.props.input.name} className={this.props.className} {...this.props.input} >
                    {this.props.children}
                </select>
            </Fragment>
        );
    }
}

export default CustomSelect;