import React from 'react';

class TaskLine extends React.Component{
	render(){
		return (
			<li>
				{this.props.line.descr} - <b>{this.props.line.category}</b>
			</li>
		);
	}
}
export default TaskLine;