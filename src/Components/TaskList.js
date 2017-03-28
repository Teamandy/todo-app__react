import React from 'react';
import TaskLine from './Taskline'

class TaskList extends React.Component{
	render(){
		return (
			<div className='app__task-list text-center'>
				<h2>Your current tasklist</h2>
				<div className='list'>
					<ol>
						{this.props.tasks.map(
							task => <TaskLine line={task}/>
						)}
					</ol>					
				</div>
			</div>
		);
	}
}
export default TaskList;