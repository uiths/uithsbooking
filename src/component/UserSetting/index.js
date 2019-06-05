import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import authService from 'services/auth-service';
import UserAvatar from './user-avatar';
import * as actions from 'actions'
import { connect } from 'react-redux'
import ChangNewPass from 'component/main/user/change_new_password'
// import UserContentForm from './OLD-user-content-form'
import _ from 'lodash'
import EditProfile from 'component/UserSetting/EditProfile'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { isEmpty } from 'helpers/index'
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
    componentDidMount() {
        const userId = authService.getId();
        if (_.isEmpty(this.props.users.data))
            this.props.dispatch(actions.fetchUserById(userId));
    }
    componentDidUpdate() {
        this.props.users.isUpdated && this.addNotification('Cập nhật thông tin thành công')
        this.props.users.isUploaded && this.addNotification('Tải ảnh lên thành công')
    }
    uploadAvatar = (file) => {
        if (file.avatar)
            this.props.dispatch(actions.uploadAvatar(file))
        if (file.oldAvatar)
            this.props.dispatch(actions.oldAvatar(file.oldAvatar))

    }
    useAvatar = (url) => {
        if (!isEmpty(url))
            this.props.dispatch(actions.oldAvatar(url.oldAvatar))
    }
    render() {
        const user = this.props.users.data || {}
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
                                </TabPanel>
                            <TabPanel tabId="basic-tab-two">
                                <div className="usercontent">
                                    <div>
                                        <h3 style={{ textAlign: "center" }}>Upload ảnh đại diện</h3>
                                    </div>
                                    <br />
                                    <hr />
                                    <div className="row">
                                        <UserAvatar imageList={user.oldImages && user.oldImages} submitCb={this.uploadAvatar} img={user.image && user.image} />
                                    </div>
                                    <hr />
                                    <br />
                                    <br />
                                </div>
                            </TabPanel>
                            <TabPanel tabId="basic-tab-four">
                                <br />
                                <ChangNewPass />
                                <br />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(userSetting);