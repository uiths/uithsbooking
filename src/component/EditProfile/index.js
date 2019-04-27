import React, { Fragment, Component } from 'react';
import './style.scss'
import PhotoSelector from 'component/PhotoSelector'
class EditProfile extends Component {
    render() {
        return (
            <Fragment>
                <div className="edit-profile-container">
                    <p className="edit-profile-label">Chỉnh sửa thông tin cá nhân</p>
                    <div className="edit-profile-form">
                        <div className="edit-profile-fields">
                            <div className="field-container">
                                <PhotoSelector />
                            </div>
                            <div className="field-container">
                                <input type="text" className="custom-input" />
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default EditProfile;