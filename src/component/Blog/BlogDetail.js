import React, { Component } from 'react';
import {getBlogById} from './actions'
import {connect} from 'react-redux'
class BlogDetail extends Component {
    componentDidMount() {
        this.props.getBlogById(this.props.match.params.id)
    }
    render() {
        const blog = this.props.blog || {}
        console.log(blog)
        return (
            <div>
                <p>{blog.title}</p>
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
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
        getBlogById : (id) => dispatch(getBlogById(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BlogDetail);