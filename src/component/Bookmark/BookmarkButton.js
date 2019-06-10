import React, { Component, Fragment } from 'react';
import './style.scss'
import { addBookmark, removeBookmark } from './actions'
import { connect } from 'react-redux'
import _ from 'lodash'
class BookmarkButton extends Component {
  addBookmark = () => {
    if (this.props.auth.isAuth)
      this.props.addBookmark(this.props.rentalId)
  }
  removeBookmark = () => {
    if (this.props.auth.isAuth)
      this.props.removeBookmark(this.props.rentalId)
  }
  render() {
    const bookmark = this.props.users.bookmark || []
    const rentalId = this.props.rentalId
    return (
      <Fragment>
        {_.includes(bookmark, rentalId) ?
          (<div id="bookmark-container">
            <button onClick={this.removeBookmark} className="bookmark-btn">
              <img className="bookmark-img" src="/img/bookmarked-red.png" />
            </button>
          </div>)
          : (<div id="bookmark-container">
            <button onClick={this.addBookmark} className="bookmark-btn">
              <img className="bookmark-img" src="/img/bookmarked.png" />
            </button>
          </div>)
        }
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.users.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: (rentalId) => dispatch(addBookmark(rentalId)),
    removeBookmark: (rentalId) => dispatch(removeBookmark(rentalId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);