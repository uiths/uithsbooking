import React, { Component } from 'react';
import { getBlogById } from './actions'
import { connect } from 'react-redux'
import moment from 'moment'
import BlogSlideBar from './BlogDetail/BlogSlideBar'
import './style.scss'
class BlogDetail extends Component {
  componentDidMount() {
    this.props.getBlogById(this.props.match.params.id)
  }
  render() {
    const blog = this.props.blog || {}
    console.log(blog)
    return (
      <div className="container mg-top-80">
        <div className="row blog-entries">
          <div className="col-md-12 col-lg-8 main-content">
            <h1 className="mb-4">{blog.title}</h1>
            <div className="post-meta">
              <span className="category">{blog.author && blog.author.username}</span>
              <span className="mr-2">{moment(blog.createdAt).format('DD/MM/YYYY')}</span>
            </div>
            <div className="content-container" style={{width:"100%"}} dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            <div className="pt-5">
              <p>Categories: <a href="#">Food</a>, <a href="#">Travel</a> Tags: <a
                href="#">#manila</a>, <a href="#">#asia</a></p>
            </div>
          </div>
          <div className="mg-top-80">
            <BlogSlideBar />
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogById: (id) => dispatch(getBlogById(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);