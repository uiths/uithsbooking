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
			<div id="blog_post">
				<BlogPostForm submitCb={this.blogPost} />
			</div>
		)
	}
}

export default Editor;
