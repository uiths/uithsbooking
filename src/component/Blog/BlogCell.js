import React, { Fragment,Component } from 'react';
import {Link} from 'react-router-dom'
class BlogCell extends Component {
    render() {
        const blog = this.props.blog;
        console.log(blog)
        return (
            <Fragment>
                <Link to={`blog_detail/${blog._id}`}>
                </Link>
            </Fragment>
        );
    }
}

export default BlogCell;