import React from 'react';

class TaskInput extends React.Component{
	render(){
		return (
			<div className="form-group text-center">
				<h2><label htmlFor="input">Type in your task</label></h2>
				<input type="text" class="form-control" id="input" placeholder="Enter task"/>
			</div>
		);
	}
}
export default TaskInput;