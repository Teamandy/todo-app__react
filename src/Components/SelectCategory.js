import React from 'react';

class SelectCategory extends React.Component{
	render(){
		return (
			<div className="form-group text-center">
				<h2><label htmlFor="select">Select task category</label></h2>
				<select className="form-control" id="select">
					<option>urgent</option>
					<option>personal</option>
					<option>job related</option>
				</select>
			</div>
		);
	}
}
export default SelectCategory;