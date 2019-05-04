import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import authService from 'services/auth-service';
import UserAvatar from './user-avatar';
import UserOldAvatar from 'component/user-setting/user-old-avatar'
import * as actions from 'actions'
import { connect } from 'react-redux'
import ChangNewPass from 'component/main/user/change_new_password'
// import UserContentForm from './OLD-user-content-form'
import Loading from 'component/main/user/loading'
import EditProfile from 'component/user-setting/EditProfile'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {isEmpty} from 'helpers/index'
class userSetting extends Component {
    constructor(props) {
        super(props);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
    }
    addNotification(message) {
        this.notificationDOMRef.current.addNotification({
            message,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 2000 },
            dismissable: { click: true }
        });
    }
    updateInfo = (userData) => {
        const user = this.props.users.data
        if (userData != user) {
            this.props.dispatch(actions.updateUserInfo(userData))
        }
    }
    componentWillMount() {
        const userId = authService.getId();
        if (!this.props.users.data._id)
            this.props.dispatch(actions.fetchUserById(userId));
    }
    componentDidUpdate() {
        this.props.users.isUpdated && this.addNotification('Cập nhật thông tin thành công')
        this.props.users.isUploaded && this.addNotification('Tải ảnh lên thành công')
    }
    uploadAvatar = (file) => {
        console.log(file)
        this.props.dispatch(actions.uploadAvatar(file))
    }
    useAvatar = (url) => {
        console.log(url)
        if (!isEmpty(url))
            this.props.dispatch(actions.oldAvatar(url.oldAvatar))
    }
    render() {
        const user = this.props.users.data
        if (user._id) {
            return (
                <div>
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="user">

                            <ReactNotification ref={this.notificationDOMRef} />
                            <Tabs defaultTab="basic-tab-one">
                                <TabList>
                                    <Tab tabFor="basic-tab-one" className="tabc"><i className="fa fa-user" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Thông tin</h4></Tab>
                                    <Tab tabFor="basic-tab-two" className="tabc"><i className="fa fa-image" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Ảnh đại diện</h4></Tab>
                                    {/* <Tab tabFor="basic-tab-three" className="tabc"><i className="fa fa-check-circle" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Xác thực</h4></Tab> */}
                                    <Tab tabFor="basic-tab-four" className="tabc"><i className="fa fa-lock" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Đổi mật khẩu</h4></Tab>
                                </TabList>
                                <TabPanel tabId="basic-tab-one">
                                    <EditProfile initialValues={user} submitCb={this.updateInfo} />
                                    {/* <UserContentForm initialValues={user} user={this.props.users.data} submitCb={this.updateInfo} options={this.options} /> */}
                                </TabPanel>
                                <TabPanel tabId="basic-tab-two">
                                    <div className="usercontent">
                                        <div>
                                            <h3 style={{ textAlign: "center" }}>Upload ảnh đại diện</h3>
                                        </div>
                                        <br />
                                        <hr />
                                        <div className="row">
                                            <UserAvatar initialValues={user} submitCb={this.uploadAvatar} img={user.image} />
                                            <UserOldAvatar imageList={user.oldImages} submitCb={this.useAvatar} />
                                        </div>
                                        <hr />
                                        <br />
                                        <br />
                                    </div>
                                </TabPanel>
                                {/* <TabPanel tabId="basic-tab-three">
                                <div className="usercontent">
                                    <div>
                                        <h3 style={{ textAlign: "center" }}>Upload ảnh chứng minh thư</h3>
                                    </div>
                                    <br />
                                    <hr />
                                    <div className="centered1 cont" style={{ marginTop: "20px" }}>
                                        <img src={"/img/img_avatar.png"} className="image1" />
                                        <div className="middle1">
                                            <div>
                                                <button type="submit" className="btn btn-primary">
                                                    <i className="fa fa-camera" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <div>
                                        <div className="col-lg-4">
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="submit" className="b b1 center_button">Lưu thay đổi</button>
                                        </div>
                                        <div className="col-lg-4">
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </TabPanel> */}
                                <TabPanel tabId="basic-tab-four">
                                    <br />
                                    <ChangNewPass />
                                    {/* <div>
                                    <Link to='/new_pass'><button type="submit" className="b b1 center_button">Nhấn vào đây để đổi mật khẩu</button></Link>
                                    </div> */}
                                    <br />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            );
        }
        else return <Loading />
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(userSetting);