import React, { Component, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import './style.scss'
class Datepicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: props.selected
        }
    }
    handleChange = (date) => {
        this.setState({ startDate: date });
        this.props.input.onChange(date);
    }
    
    render() {
        const {
            input, placeholder,
            meta: { touched, error }
        } = this.props
        console.log(this.props.input.value)
        return (

            <div>
                <label htmlFor={this.props.input.name}>{this.props.label}</label><br />
                <DatePicker
                    {...input}
                    placeholderText="dd/mm/yyyy"
                    name={this.props.input.name}
                    minDate={new Date()}
                    className={`${this.props.className} ${error && ' error-form'}`}
                    selected={this.state.startDate}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={this.handleChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                // filterDate={(date) => {
                //     if (this.props.birthdayType)
                //         return moment() > date;
                //     else
                //         return date;
                // }}
                />

            </div>);
    }
}

export default Datepicker;