import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BlogItem from './BlogItem'
import BlogSlideBar from './BlogDetail/BlogSlideBar'
import "./_style_blog.scss"

class BlogList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container list-rentals-container">
                <h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Blog chia sẻ</h3>

                <div className="row blog-entries mg-top-20">
                    <div className="col-md-12 col-lg-8 main-content">
                        <div className="row">
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                        </div>
                    </div>

                    <BlogSlideBar/>

                </div>
            </div>
        );

    }
}

export default BlogList;