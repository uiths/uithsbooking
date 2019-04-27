import React, { Fragment, Component } from 'react';

class CustomSelect extends Component {
    render() {
        return (
            <Fragment>
                <label htmlFor={this.props.name}>{this.props.label}</label><br />
                <select className={this.props.className} {...this.props.input} >
                    {this.props.children}
                </select>
            </Fragment>
        );
    }
}

export default CustomSelect;