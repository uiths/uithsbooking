import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "./_style_blog.scss"
import moment from 'moment'
class BlogItem extends Component {
    render() {
        const blog = this.props.blog;
        console.log(blog)
        return (
            <div className="col-md-6">
                <Link  className="blog-entry"  to={`blog_detail/${blog._id}`}>
                    <img src={`${blog.image}`} alt="Image placeholder"/>
                        <div className="blog-content-body">
                            <div className="post-meta">
                                {/* <span className="category">{blog.author && blog.author.username}</span> */}
                                <span className="mr-2">{moment(blog.createdAt).format('DD/MM/YYYY')}</span>
                            </div>
                            <h2>{blog.title}</h2>
                        </div>
                </Link>
            </div>

        );

    }
}

export default BlogItem;