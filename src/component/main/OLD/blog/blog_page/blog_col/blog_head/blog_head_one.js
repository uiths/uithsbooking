import React, {Component} from 'react';
import {  Link } from "react-router-dom";

class Bloghead_one extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card overflow">
                <h3 className="bloghead"><a href={this.props.link} style={{color: 'black'}}>{this.props.title}</a></h3>
                <h6>{this.props.signature}</h6>
                <img src={this.props.img} alt="unavailable" className="imgfloat" />
                <p style={{marginTop: 10}}>{this.props.summary}</p>
                <Link to={this.props.link}>(Click để xem thêm →)</Link>
            </div>
        );
    }
}

export default Bloghead_one;