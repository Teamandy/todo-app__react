import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			todolist:[]
		};
		this.categories = ['urgent', 'personal', 'job related', 'easy'];
	}
	addNewTask(taskline){
		let taskset = this.state.todolist;
		taskset.push(taskline);
		this.setState({todolist: taskset});
	}
	deleteTask(id){
		let taskset = this.state.todolist;
		let index = taskset.findIndex((task)=>{
			return task.id===id;
		});
		taskset.splice(index, 1);
		this.setState({todolist: taskset});
	}
	render(){
		return (
			<div className='app__tasks'>
				<AddTask categories = {this.categories} addtask = {this.addNewTask.bind(this)}/>
				<TaskList deleteTask ={this.deleteTask.bind(this)} tasks = {this.state.todolist}/>
			</div>
		);
	}
}
export default Layout;