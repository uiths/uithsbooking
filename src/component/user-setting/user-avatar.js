import React, { Component } from 'react';
import * as actions from 'actions'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import PhotoSelector from 'component/PhotoSelector'
import { Field, reduxForm } from 'redux-form';
import './style.scss'
import { validate2} from './validate'
class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFiles: [],
            imgSrc: '',
            isChange: false,
            isUpLoading: false,
            isSuccess: false,
            image: null
        }
    }
    
    onPick = (image) => {
        this.setState({ image, isChange: true })
    }
    useAvatar = (e) => {
        e.preventDefault()
        this.props.dispatch(actions.oldAvatar(this.state.image))
    }
    render() {
        const { valid, pristine, submitting, handleSubmit, submitCb } = this.props
        const imageList = this.props.initialValues.oldImages
        return (
            <div className="usercontent">
                <div>
                    <h3 style={{ textAlign: "center" }}>Upload ảnh đại diện</h3>
                </div>
                <br />
                <hr />
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xs-12">
                        <form onSubmit={handleSubmit(submitCb)}>
                            <Field
                                name="avatar"
                                image={this.props.initialValues.image}
                                component={PhotoSelector} />
                            <button type="submit" className="b b1 center_button" disabled={!valid || submitting}>
                                {submitting ?
                                    <span>
                                        <i className="fa fa-spin fa-spinner" /> Đang lưu...
                                        </span>
                                    :
                                    <span>Lưu</span>
                                }
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12">
                    { imageList.length > 0 && <React.Fragment>
                        <ImagePicker
                            images={imageList.map((image, i) => ({ src: image, value: i }))}
                            onPick={this.onPick}
                        />
                        <button onClick={this.useAvatar} className="b b1 center_button" disabled={!this.state.isChange} >
                            {submitting ?
                                <span>
                                    <i className="fa fa-spin fa-spinner" /> Đang lưu...
                                        </span>
                                :
                                <span>Lưu</span>
                            }
                        </button>
                        </React.Fragment>
                    }
                    </div>
                    {/* <div className="centered cont" style={{ marginTop: "20px" }}>
                    <img src={"/img/img_avatar.png"} className="image" />
                    <div className="middle">
                        <div>
                            <button type="submit" className="btn btn-primary">
                                <i className="fa fa-camera" /></button>
                        </div>
                    </div>
                </div> */}

                </div>
                <hr />
                {/* <div>
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        {
                            this.state.isSuccess &&
                            <div class="boxtrue">Đổi Avatar Thành công</div>
                        }
                        <br />
                        {this.state.isChange ? (this.state.isUpLoading ? <button disabled type="submit" className="b b1 center_button">Uploading....</button> :
                            <button onClick={this.upload} type="submit" className="b b1 center_button">Lưu thay đổi</button>)
                            : <div></div>
                        }
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div> */}
                <br />
                <br />
            </div>
        );
    }
}

export default reduxForm({
    form: 'editAvatarForm',
    // destroyOnUnmount: true,
    // enableReinitialize: true,
    validate: validate2
})(UserAvatar);