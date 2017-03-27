import React from 'react';
import TaskInput from './TaskInput';
import SelectCategory from './SelectCategory';
import Button from './Button';
import TaskList from './TaskList';

class Layout extends React.Component{
	render(){
		return (
			<form className='app__body'>
				<TaskInput />
				<SelectCategory />
				<Button />
				<TaskList />
			</form>
		);
	}
}
export default Layout;