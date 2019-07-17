import React from 'react';
export const Employee = ({ emp }) => {
	return (
		<div>
			<h4>
				<span className="title" style={{ fontStyle: 'bold' }}>
					{emp.name}
				</span>
			</h4>
			<p>
				Age: {emp.age} <br />
				Gender: {emp.gender} <br />
				Email-Id : {emp.email} <br />
				Phone Number:{emp.phoneNo} <br />
			</p>
		</div>
	);
};
