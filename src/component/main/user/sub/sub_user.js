import React, {Component} from 'react';

class Sub_user extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p className="profiletext" id={this.props.id} contentEditable="true">{this.props.info}<span
                    className="glyphicon glyphicon-pencil" style={{float: 'right'}}/></p>
            </div>
        );
    }
}

export default Sub_user;