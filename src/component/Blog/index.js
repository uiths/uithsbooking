import React, { Component } from 'react';
import { getBlog } from './actions'
import { connect } from 'react-redux'
import BlogSlideBar from './BlogDetail/BlogSlideBar'
import BlogItem from './BlogItem'

class Blog extends Component {
    componentDidMount() {
        this.props.getBlog();
    }
    render() {
        console.log(this.props.blogList)
        return (
            <div id="blog-container">
                <div className="container list-rentals-container">
                    <h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Blog chia sẻ</h3>
                    <div className="row blog-entries mg-top-20">
                        <div className="col-md-12 col-lg-8 main-content">
                            <div className="row">
                                {
                                    this.props.blogList.map((blog, index) => {
                                        return <BlogItem key={index} blog={blog}/>
                                    })
                                }
                            </div>
                        </div>
                        <BlogSlideBar />
                    </div>
                </div>
             </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        blogList: state.blog.blogList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBlog: () => dispatch(getBlog())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);