import React from 'react';

class AddTask extends React.Component{
	constructor(){
		super();
	}
	addTask(e){
		e.preventDefault();
		let newtask = {
			descr: this.textInput.value,
			category: this.textSelect.value
		};
		this.props.addtask(newtask);
	}	
	render(){
		return (
			<form className='app__form'>

				<div className="form-group text-center">
					<h2><label htmlFor="input">Type in your task</label></h2>
					<input ref = {(input)=>{this.textInput = input}} type="text" className="form-control" id="input" placeholder="Enter task"/>
				</div>

				<div className="form-group text-center">
					<h2><label htmlFor="select">Select task category</label></h2>
					<select ref = {(select)=>{this.textSelect = select}} className="form-control" id="select">
						<option>urgent</option>
						<option>personal</option>
						<option>job related</option>
					</select>
				</div>

				<button onClick = {this.addTask.bind(this)} type="submit" className="offset-4 col-4 btn btn-primary">Add task</button>
			
			</form>			
		);
	}
}
export default AddTask;




