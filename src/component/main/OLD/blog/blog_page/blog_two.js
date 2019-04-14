import React, {Component} from 'react';
import Leftcoltwo from './blog_col/left_col_two';
import Rightcol from './blog_col/right_col';

class Blogtwo extends Component {
    render() {
        return (
            <div className="blog_row">
                <Leftcoltwo/>
                <Rightcol/>
            </div>
        );
    }
}

export default Blogtwo;