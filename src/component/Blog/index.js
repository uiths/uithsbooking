import React, { Component } from 'react';
import { getBlog } from './actions'
import { connect } from 'react-redux'
import BlogCell from './BlogCell'
class Blog extends Component {
    componentDidMount() {
        this.props.getBlog();
    }
    render() {
        console.log(this.props.blogList)
        return (
            <div id="blog-container">
                {
                    this.props.blogList.map((blog, index) => {
                        return <BlogCell key={index} blog={blog} />
                    })
                }
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