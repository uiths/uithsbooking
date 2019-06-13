import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import ".././_style_blog.scss"

class BlogSlideBar extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-4 sidebar">
                <div className="sidebar-box">
                    <div className="bio text-center">
                        <img src=".././img/img_blog_example/person_1.jpg" alt="Image Placeholder" className="img-fluid"/>
                        <div className="bio-body">
                            <h2>Nhật Nguyễn</h2>
                            <p>Là người lãnh đạo tuyệt vời nhất nhóm. Chủ tịch chưa bao giờ than phiền về task khó hay gì hêt, anh ấy luôn cố gắng hết sức để hoàn thiện mọi thứ một cách tốt nhất.</p>
                            <p><a href="#" className="btn btn-primary btn-sm">Follow me!</a></p>
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
                    <h3 className="heading">Bài viết được nhiều người xem</h3>
                    <div className="post-entry-sidebar">
                        <ul>
                            <li>
                                <a href="">
                                    <img src=".././img/img_blog_example/img_2.jpg" alt="Image placeholder" className="mr-4"/>
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
                                    <img src=".././img/img_blog_example/img_4.jpg" alt="Image placeholder" className="mr-4"/>
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
                                    <img src=".././img/img_blog_example/img_12.jpg" alt="Image placeholder" className="mr-4"/>
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
                    <h3 className="heading">Danh mục</h3>
                    <ul className="categories">
                        <li><a href="#">Nhà ở <span>(12)</span></a></li>
                        <li><a href="#">Tin tức <span>(22)</span></a></li>
                        <li><a href="#">Mẹo <span>(37)</span></a></li>
                        <li><a href="#">View đẹp <span>(42)</span></a></li>
                        <li><a href="#">Hướng dẫn <span>(14)</span></a></li>
                    </ul>
                </div>


                <div className="sidebar-box">
                    <h3 className="heading">Tags</h3>
                    <ul className="tags">
                        <li><a href="#">Du lịch</a></li>
                        <li><a href="#">Khám phá</a></li>
                        <li><a href="#">Ẩm thực</a></li>
                        <li><a href="#">Đời sống</a></li>
                        <li><a href="#">Bận rộn</a></li>
                        <li><a href="#">Tự do</a></li>
                        <li><a href="#">Điểm đến</a></li>
                        <li><a href="#">Thú vị</a></li>
                        <li><a href="#">Tri thức</a></li>
                        <li><a href="#">Thiên nhiên</a></li>
                        <li><a href="#">Con người</a></li>
                        <li><a href="#">Thực vật</a></li>
                    </ul>
                </div>
            </div>
        );

    }
}

export default BlogSlideBar;