import React, { Component } from 'react';
import { handleString } from 'helpers/index'
import { Link } from 'react-router-dom'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import { connect } from 'react-redux';

import './style.scss'
// Imagine you have a list of languages that you'd like to autosuggest.
const people = [
    {
        first: 'Charlie',
        last: 'Brown',
        twitter: 'dancounsell'
    },
    {
        first: 'Charlotte',
        last: 'White',
        twitter: 'mtnmissy'
    },
    {
        first: 'Chloe',
        last: 'Jones',
        twitter: 'ladylexy'
    },
    {
        first: 'Cooper',
        last: 'King',
        twitter: 'steveodom'
    }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters


class Search extends Component {
    constructor() {
        super();
        this.state = {
            key: null,
            value: '',
            suggestions: []
        }
    }
    escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    getSuggestions = (value) => {
        const escapedValue = this.escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('\\b' + escapedValue, 'i');

        return this.props.rentals.data.filter(person => regex.test(this.getSuggestionValue(person)));
    }

    getSuggestionValue = (suggestion) => {
        return `${suggestion.city} ${suggestion.address}`;
    }

    renderSuggestion = (suggestion, { query }) => {
        const suggestionText = `${suggestion.address}`;
        const matches = AutosuggestHighlightMatch(suggestionText, query);
        const parts = AutosuggestHighlightParse(suggestionText, matches);
        return (
            <React.Fragment>
                <Link to={`/detail/${suggestion._id}`}>
                    <span className={'suggestion-content ' + suggestion._id}>
                        <img style={{ maxWidth: "40px", maxHeight: "40px" }} src={suggestion.image[0]}></img>
                        <div className="suggestion-detail">
                            <p className="suggestion-title">{suggestion.title}</p>
                            <p className="name">
                                {
                                    parts.map((part, index) => {
                                        const className = part.highlight ? 'highlight' : null;
                                        return (
                                            <span className={className} key={index}>{part.text}</span>
                                        );
                                    })
                                }
                            </p>
                        </div>
                    </span>

                </Link>
            </React.Fragment>
        );
    }
    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            className: "suggestion-input",
            value,
            onChange: this.onChange
        };

        return (
            <React.Fragment>
                <form autoComplete="off" className="home_search home_search_form" onSubmit={e => { e.preventDefault(); }} method="get">
                    <i className="fa fa-search" />
                    <Autosuggest
                        suggestions={suggestions.slice(0, 5)}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps} />
                    <Link to={`/search?key=${this.state.value}`}><button style={{width:"200px"}} className="btn btn-success">Tìm kiếm</button></Link>
                </form>

            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals
    }
}
export default connect(mapStateToProps)(Search);