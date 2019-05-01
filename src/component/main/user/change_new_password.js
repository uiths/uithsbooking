import React, { Component } from 'react';
import NewPass from './change_new_password_form'
import { connect } from 'react-redux';
import * as actions from 'actions';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class reset_pass extends Component {
  constructor(props) {
    super(props);
    this.updatePass = this.updatePass.bind(this);
    this.state = {
      redirect: false,
      errors: ''
    }
    this.notificationDOMRef = React.createRef();
  }
  updatePass(userData) {
    this.props.dispatch(actions.updatePass(userData))
    // .then(
    //   changed => this.setState({
    //     redirect: true
    //   }),
    //   detail => {
    //     console.log(detail)
    //     this.setState({
    //     errors: detail
    //   })}
    // )
  }
  // resetpass(userData) {
  //   const rsid = this.props.match.params.id;
  //   this.props.dispatch(actions.resetPass(userData, rsid))
  // }
  addNotification = (message, type) => {
    this.notificationDOMRef.current.addNotification({
      message,
      type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 4000 },
      dismissable: { click: true }
    });
  }
  componentDidUpdate() {
    this.props.users.isChanged && this.addNotification('Cập nhật thông tin thành công', "success")
    this.props.users.errors.detail && this.addNotification(this.props.users.errors.detail, "danger")
  }
  render() {
    const { errors, isError } = this.props
    return (
      <main>
        <div className="container">
          <ReactNotification ref={this.notificationDOMRef} />
          <h3>Đổi mật khẩu</h3>
          <div className="col-lg-8 infobox scale-in-center">
            <NewPass submitCb={this.updatePass} errors={errors} />
          </div>
          <div className="col-lg-2">
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    errors: state.users.errors,
    isUpdated: state.users.isUpdated,
    isError: state.users.isError
  }
}
export default connect(mapStateToProps)(reset_pass);