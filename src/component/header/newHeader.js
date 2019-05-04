import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import './style.scss';

const defaultAvatarURL = 'images/default-avatar.png';

class NavigationBar extends Component {
    profileDropDown() {
        const currentUser = this.props.currentUser;
        let userName = '';
        let avatarImage = '';

        if (currentUser) {

        }

        if (!currentUser) {
            return (
                <div className="nav-user-segment">
                    <div
                        className="nav-signup-btn"
                        onClick={this.props.openSignUpRoleSelector}
                        style={{ backgroundImage: 'url("images/signup-btn.svg")' }}
                    />
                    <div
                        className="nav-login-btn"
                        onClick={this.props.openLogInRoleSelector}
                        style={{ backgroundImage: 'url("images/login-btn.svg")' }}
                    />
                </div>
            );
        }

        if (currentUser.role === 'PRESIDENT') {
            return (
                <div className="nav-user-segment">
                    <div className="user-segment-username">{userName}</div>
                    <div className="user-segment-avatar" ></div>
                    <div className="user-dropdown-content">
                        <div >プロフィール</div>
                        <div >食事会一覧</div>
                        <div>開催待ちの学生一覧</div>
                        <hr></hr>
                        <span onClick={this.props.logout}>
              <i className="fa fa-sign-out" > ログアウト</i>
            </span>
                    </div>
                </div>
            );
        }

        if (currentUser.role === 'STUDENT') {
            return (
                <div className="nav-user-segment">
                    <div className="user-segment-drop-icon">
                    </div>
                    <div className="user-segment-username">Hi, {userName}</div>
                    <div className="user-segment-avatar" style={{ backgroundImage: 'url(' + avatarImage + ')' }}></div>
                    <div className="user-dropdown-content">
                        <div>プロフィール</div>
                        <div >食事会一覧</div>
                        <div >リクエストリスト</div>
                        <hr></hr>
                        <span onClick={this.props.logout}>
              <i className="fa fa-sign-out" > ログアウト</i>
            </span>
                    </div>
                </div>
            );
        }

        return null;
    }

    render() {

        return (
            <nav className="meshi-navbar">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/home" className="nav-icon-container">
                            <div className="logo" />
                        </Link>
                        <Link to="/home" className="nav-item-container">
                            <div className="nav-item" id="nav-home-item">
                                <span>Home</span>
                            </div>
                        </Link>
                        {/* <Link to="/home" className="nav-item-container">
              <div className="nav-item" id="nav-calendar-item">
                <span>カレンダー </span>
              </div>
            </Link> */}
                    </div>

                    <div className="nav-right"></div>
                    { this.profileDropDown() }
                    <div className="nav-menu" onClick={this.props.controlMainMenu} style={{ backgroundImage: 'url("images/burger-btn.svg")' }}></div>
                </div>
            </nav>
        );
    }
}

NavigationBar.defaultProps = {
    currentUser: undefined
};

const mapStateToProps = state => {
    return {
        currentUser: state.get('account').get('data')
    };
};
