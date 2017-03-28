import React from 'react';
import uuidV1 from 'uuid/v1';

class AddTask extends React.Component{
	constructor(){
		super();
		this.id = 0;
	}
	addTask(e){
		e.preventDefault();
		let newtask = {
			descr: this.textInput.value,
			category: this.textSelect.value,
			id: uuidV1()
		};
		if(newtask.descr){
			this.props.addtask(newtask);
		} else{
			alert('add a task first');
		}
	}	
	render(){
		const categories = this.props.categories.map(category => 
			<option>{category}</option>
		);
		return (
			<form className='app__form'>

				<div className="form-group text-center">
					<h2><label htmlFor="input">Type in your task</label></h2>
					<input ref = {(input)=>{this.textInput = input}} type="text" className="form-control" id="input" placeholder="Enter task"/>
				</div>

				<div className="form-group text-center">
					<h2><label htmlFor="select">Select task category</label></h2>
					<select ref = {(select)=>{this.textSelect = select}} className="form-control" id="select">
						{categories}
					</select>
				</div>

				<button onClick = {this.addTask.bind(this)} type="submit" className="offset-4 col-4 btn btn-primary">Add task</button>
			
			</form>			
		);
	}
}
export default AddTask;




