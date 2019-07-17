import React, { Component } from 'react';
import { getLoginAction } from '../actions/loginActions';

import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				username: '',
				password: ''
			},
			message: ''
		};
	}

	validateForm() {
		return this.state.userName.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.login(this.state);
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.userLogin.login.userStatus) {
			nextProps.history.push('/Dashboard');
		}
	}

	render() {
		return (
			<div
				style={{
					padding: 40,
					backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'
				}}
			>
				<main>
					<center>
						<div className="section" />

						<h5 className="indigo-text">Login</h5>
						<div className="section" />

						<div className="container">
							<div
								className="z-depth-1 grey lighten-4 row"
								style={{
									display: 'inline-block',
									padding: '32px 48px 0px 48px',
									border: '1px solid #EEE'
								}}
							>
							<p style={{color:'red'}}> {this.props.userLogin.login.message}</p>
								<form className="col s12" onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col s12" />
									</div>

									<div className="row">
										<div className="input-field col s12">
											<input
												className="validate"
												type="text"
												name="username"
												id="username"
												onChange={this.handleChange}
											/>
											<label className="active" htmlFor="username">
												Enter your user name
											</label>
										</div>
									</div>

									<div className="row">
										<div className="input-field col s12">
											<input
												className="validate"
												type="password"
												name="password"
												id="password"
												onChange={this.handleChange}
											/>
											<label className="active" htmlFor="password">
												Enter your password
											</label>
										</div>
									</div>
									<br />
									<center>
										<div className="row">
											<button
												type="submit"
												name="btn_login"
												className="col s12 btn btn-large waves-effect indigo"
												disabled={!this.validateForm}
											>
												Login
											</button>
										</div>
									</center>
								</form>
							</div>
						</div>
					</center>
					<div className="section" />
					<div className="section" />
				</main>
			</div>
		);
	}
}

const mapToStateProps = state => {
	return { userLogin: state };
};

const mapDispatchToProps = dispatch => {
	return {
		login: data => dispatch(getLoginAction(data))
	};
};
export default connect(
	mapToStateProps,
	mapDispatchToProps
)(Login);
