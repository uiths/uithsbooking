import React, {Component} from 'react';
import Leftcolone from './blog_col/left_col_one';
import Rightcol from './blog_col/right_col';

class Blogone extends Component {
    render() {
        return (
            <div className="blog_row">
                <Leftcolone/>
                <Rightcol/>
            </div>
        );
    }
}

export default Blogone;