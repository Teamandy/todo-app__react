import React from 'react';

class TaskLine extends React.Component{
	constructor(){
		super();
	}
	deleteTask(){
		this.props.deleteTask(this.props.line.id);
	}
	render(){
		return (
			<li ref={(li)=>{this.textLine = li}}>
				{this.props.line.descr} - <b>{this.props.line.category}</b> <button onClick = {this.deleteTask.bind(this)} className="btn btn-danger"> X </button> 
			</li>
		);
	}
}
export default TaskLine;