import React from 'react';
export const Employee = ({ emp }) => {
	return (
		<div>
			<span className="title" style={{fontStyle:"bold"}}> {emp.name}</span>
			<p>
				{emp.age} <br />
				{emp.gender} <br />
				{emp.email} <br />
				{emp.phoneNo} <br />
			</p>
		</div>
	);
};
