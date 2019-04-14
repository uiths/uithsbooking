import React, {Component} from 'react';
import Leftcolmain from './blog_page/blog_col/left_col_main';
import Rightcol from './blog_page/blog_col/right_col';

class Blogmain extends Component {
    render() {
        return (
            <div className="blog_row">
                <Leftcolmain/>
                <Rightcol/>
            </div>
        );
    }
}

export default Blogmain;