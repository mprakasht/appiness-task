import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Employee } from './employee';

class DashBord extends Component {

	render() {
		console.log(this.props.login.userStatus);
		if (!this.props.login.userStatus) {
            return <p> please login <a href='/'> click here</a></p>
		} else {
			return (
				<div style={{ padding: 50 }}>
					<h3> Employee List</h3>
					<ul className="collection">
						{this.props.employee.user.map((item) => {
							return (
								<li key={item.id} className="collection-item">
									<Employee emp={item} />
								</li>
							);
						})}
					</ul>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(
	mapStateToProps,
	null
)(DashBord);
