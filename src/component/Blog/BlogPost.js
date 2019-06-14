import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
// import { ImageDrop } from 'quill-image-drop-module';
import axios from 'axios'
import "react-quill/dist/quill.snow.css";
import BlogPostForm from './BlogPostForm'
class Editor extends Component {
	blogPost = (data) => {
		this.props.history.push({
			pathname: '/blog_review',
			state: { data }
		})
	}
	render() {
		return (
			<div id="blog_post mg-top-20">
				<div className="container-fluid">
					<h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Đăng bài viết</h3>

					<BlogPostForm submitCb={this.blogPost} />
				</div>
			</div>
		)
	}
}

export default Editor;
