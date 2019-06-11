import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import ".././_style_blog.scss"

class BlogSlideBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-md-12 col-lg-4 sidebar">
                <div className="sidebar-box">
                    <div className="bio text-center">
                        <img src="img/img_blog_example/person_1.jpg" alt="Image Placeholder" className="img-fluid"/>
                        <div className="bio-body">
                            <h2>Meagan Smith</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                            <p><a href="#" className="btn btn-primary btn-sm">Read my bio</a></p>
                            <p className="social">
                                <a href="#" className="p-2"><span className="fa fa-facebook"/></a>
                                <a href="#" className="p-2"><span className="fa fa-twitter"/></a>
                                <a href="#" className="p-2"><span className="fa fa-instagram"/></a>
                                <a href="#" className="p-2"><span className="fa fa-youtube-play"/></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sidebar-box">
                    <h3 className="heading">Popular Posts</h3>
                    <div className="post-entry-sidebar">
                        <ul>
                            <li>
                                <a href="">
                                    <img src="img/img_blog_example/img_2.jpg" alt="Image placeholder" className="mr-4"/>
                                    <div className="text">
                                        <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                        <div className="post-meta">
                                            <span className="mr-2">March 15, 2018 </span>

                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="img/img_blog_example/img_4.jpg" alt="Image placeholder" className="mr-4"/>
                                    <div className="text">
                                        <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                        <div className="post-meta">
                                            <span className="mr-2">March 15, 2018 </span>

                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="img/img_blog_example/img_12.jpg" alt="Image placeholder" className="mr-4"/>
                                    <div className="text">
                                        <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                        <div className="post-meta">
                                            <span className="mr-2">March 15, 2018 </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="sidebar-box">
                    <h3 className="heading">Categories</h3>
                    <ul className="categories">
                        <li><a href="#">Courses <span>(12)</span></a></li>
                        <li><a href="#">News <span>(22)</span></a></li>
                        <li><a href="#">Design <span>(37)</span></a></li>
                        <li><a href="#">HTML <span>(42)</span></a></li>
                        <li><a href="#">Web Development <span>(14)</span></a></li>
                    </ul>
                </div>


                <div className="sidebar-box">
                    <h3 className="heading">Tags</h3>
                    <ul className="tags">
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Freelancing</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Freelancing</a></li>
                    </ul>
                </div>
            </div>
        );

    }
}

export default BlogSlideBar;