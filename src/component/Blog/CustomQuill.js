import React, { Component } from 'react';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios'
import './style.scss'
class CustomQuill extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.quill_img_handler = this.quill_img_handler.bind(this);
    this.onChange = props.input.onChange.bind(this)
    this.state = { text: '' } // You can also pass a Quill Delta here
  }
  quill_img_handler() {
    let fileInput = this.container.querySelector('input.ql-image[type=file]');
    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      fileInput.classList.add('ql-image');
      fileInput.addEventListener('change', async () => {
        const files = fileInput.files;
        const range = this.quill.getSelection(true);
        if (!files || !files.length) {
          console.log('No files selected');
          return;
        }

        const formData = new FormData();
        formData.append('image', files[0]);
        this.quill.enable(false);
        await axios
          .post('	https://api.imgur.com/3/image', formData, {
            headers: {
              Authorization: 'Client-ID ' + 'ccc9266052a1d7e'
            }
          })
          .then(response => {
            this.quill.enable(true);
            this.quill.editor.insertEmbed(range.index, 'image', response.data.data.link);
            this.handlers.handleChange(document.querySelector(".ql-editor").innerHTML)
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
            fileInput.value = '';
          })
          .catch(error => {
            console.log('quill image upload failed');
            console.log(error);
            this.quill.enable(true);
          });
      });
      this.container.appendChild(fileInput);
    }
    fileInput.click();
  }
  handleChange2 = (value) => {
    this.props.input.onChange(value)
  }
  handleChange (value)  {
    this.setState({ text: value }, () => this.props.input.onChange(value))
  }
  toolbarOptions = {
    container: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']                                         // remove formatting button
    ],
    handlers: { image: this.quill_img_handler, handleChange: this.handleChange2 },
  };

  history = {
    delay: 2000,
    maxStack: 500,
    userOnly: true
  }
  modules = {
    toolbar: this.toolbarOptions,
    history: this.history,
  }
  formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  render() {
    return (
      <div>
        <ReactQuill
          className="add-new-post__editor mb-1"
          modules={this.modules}
          formats={this.formats}
          theme='snow'
          defaultValue={this.state.text}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CustomQuill;