import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import authService from '../../../../services/auth-service';
import UserContent from './user-content';
import UserAvatar from './user-avatar';
import * as actions from 'actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class userSetting extends Component {
    constructor(props) {
        super(props);
        // this.onImageDrop = this.onImageDrop.bind(this);
        // this.upload = this.upload.bind(this);
        // this.state = {
        //     imageFiles: [],
        //     imgSrc: '',
        //     isChange: false
        // }
    }

    componentWillMount() {
        const userId = authService.getId();
        this.props.dispatch(actions.fetchUserById(userId));
    }

    // onImageDrop(selectedFile) {
    //     console.log(selectedFile)
    //     this.setState({
    //         imageFiles: selectedFile[0],
    //         isChange : true
    //     })
    //     console.log(this.state.imageFiles)
    //     const myFilereader = new FileReader();
    //     myFilereader.addEventListener("load", () => {
    //         this.setState({
    //             imgSrc: myFilereader.result
    //         })
    //     }, false)
    //     myFilereader.readAsDataURL(this.state.imageFiles);
    //     console.log(this.state)
    // }
    // upload() {
    //     const file = this.state.imageFiles;
    //     console.log(file);
    //     actions.uploadAvatar(file);
    // }
    render() {
        const user = this.props.users.data
        return (
            <div>
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="user">
                        <Tabs defaultTab="basic-tab-one">
                            <TabList>
                                <Tab tabFor="basic-tab-one" className="tabc"><i className="fa fa-user" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Thông tin</h4></Tab>
                                <Tab tabFor="basic-tab-two" className="tabc"><i className="fa fa-image" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Ảnh đại diện</h4></Tab>
                                {/* <Tab tabFor="basic-tab-three" className="tabc"><i className="fa fa-check-circle" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Xác thực</h4></Tab> */}
                                <Tab tabFor="basic-tab-four" className="tabc"><i className="fa fa-lock" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Đổi mật khẩu</h4></Tab>
                            </TabList>
                            <TabPanel tabId="basic-tab-one">
                                <UserContent user={user}/>
                            </TabPanel>
                            <TabPanel tabId="basic-tab-two">
                                <UserAvatar img={user.image}/>
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
                                <div className="usercontent">
                                    <div>
                                        <button type="submit" className="b b1 center_button">Nhấn vào đây để đổi mật khẩu</button>
                                    </div>
                                </div>
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