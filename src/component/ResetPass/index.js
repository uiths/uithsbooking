import React, { Component } from 'react';
import ResetPassForm from './ResetPassForm'
import { connect } from 'react-redux';
import {resetPass} from './actions'
import {ToastContainer} from 'react-toastify'
class ResetPass extends Component {
	resetpass = (userData) => {
		const rsid = this.props.match.params.id;
		this.props.resetPass(userData, rsid)
	}
	render() {
		const { isReset, errors } = this.props
		return (
			<main>
				<div className="container">
					<ToastContainer/>
					<h3>Đổi mật khẩu</h3>
					<div className="col-lg-8 infobox scale-in-center">
						<ResetPassForm submitCb={this.resetpass} errors={errors} />
					</div>
				</div>
			</main>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetPass : (data, id) => dispatch(resetPass(data, id))
	}
}
export default connect(null, mapDispatchToProps)(ResetPass);