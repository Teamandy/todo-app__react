import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			todolist:[
				{
					descr: 'write a letter',
					category: 'personal'
				},
				{
					descr: 'paint a wall',
					category: 'urgent'
				}
			]
		};
	}
	addNewTask(taskline){
		let taskset = this.state.todolist;
		taskset.push(taskline);
		this.setState({todolist: taskset});
	}
	render(){
		return (
			<div className='app__tasks'>
				<AddTask addtask = {this.addNewTask.bind(this)}/>
				<TaskList tasks = {this.state.todolist}/>
			</div>
		);
	}
}
export default Layout;