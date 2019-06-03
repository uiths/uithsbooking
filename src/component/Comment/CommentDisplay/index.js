import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import "./style.scss"
import { getComment, removeComment } from 'component/Comment/actions'
import { connect } from "react-redux";
import _ from "lodash"
import moment from 'moment'
import StarRatingComponent from 'react-star-rating-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CommentDisplay extends Component {
    loadMore = () => {
        const notiMenu = document.getElementById('comment-list')
        if (notiMenu.clientHeight + notiMenu.scrollTop >= notiMenu.scrollHeight) {
            this.props.getComment(this.props.page, this.props.hasMore, this.props.rentalId);
        }
    }
    componentDidMount() {
        if (this.props.rentalId) {
            this.props.getComment(this.props.page, this.props.hasMore, this.props.rentalId)
        }
        ReactDOM.findDOMNode(this.refs.commentList).addEventListener('scroll', this.loadMore);
    }
    componentWillUnmount() {
        this.props.removeComment();
    }
    render() {
        const commentList = this.props.commentList;
        return (
            <div id="comment-display" style={{marginTop:"20px"}}>
                <ToastContainer/>
                <div className="comment-header">
                    Đánh giá của khách hàng
                    </div>
                <div ref="commentList" id="comment-list" className="comment-list-container">
                    {
                        !_.isEmpty(commentList) ? (
                            commentList.map((i, index) =>
                                <div key={index} className="comment-cell">
                                    <div className="user-avatar">
                                        <img src={i.user.image}></img>
                                    </div>
                                    <div className="comment-content">
                                        <div className="content-container">
                                            {i.comment && i.comment}
                                            <StarRatingComponent
                                                name="rating"
                                                starCount={5}
                                                value={i.rating}
                                            />
                                        </div>
                                        <div className="comment-time">
                                            {moment(i.createdAt).fromNow()}
                                        </div>
                                    </div>
                                </div>)) : <img className="empty-comment" src="/img/empty-message.svg"></img>
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        commentList: state.comment.commentList,
        page: state.comment.page,
        hasMore: state.comment.hasMore,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getComment: (page, hasMore, rentalId) => dispatch(getComment(page, hasMore, rentalId)),
    removeComment: () => dispatch(removeComment())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplay);