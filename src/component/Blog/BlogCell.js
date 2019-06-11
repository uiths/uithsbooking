import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
class BlogCell extends Component {
    render() {
        const blog = this.props.blog;
        console.log(blog)
        return (
            <Fragment>
                <div className="col-md-6">

                    <Link to={`blog_detail/${blog._id}`}>
                        <img src="img/img_blog_example/img_5.jpg" alt="imagePlaceholder" />
                        <div className="blog-content-body">
                            <div className="post-meta">
                            </div>
                            <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                        </div>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default BlogCell;