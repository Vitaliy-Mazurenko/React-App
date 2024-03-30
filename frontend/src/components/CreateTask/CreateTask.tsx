import React, { useState, useContext } from 'react';
import Input from '../../common/Input/Input.jsx';
import './createTask.css';
// import type ITask from './../../types/initTask';
import { Context } from './../../context/context';

// interface ITask {
// 	title: string;
// 	description?: string;
// 	date: string;
// 	status: string;
// 	priority: 'Low' | 'Medium' | 'High'; 
// }

interface ChildrenProps {
	showCreateTask:  (show: boolean) => void,
	column: string
}
 
const CreateTask: React.FC<ChildrenProps> = ({ showCreateTask, column }) => {
	const { tasks, setTasks } = useContext(Context);
	const [description, setDescription] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	console.log(tasks);



	const handleCreate = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if(title){
			setTasks([...tasks, {
				title: column,
				name: title,
				description: description,
				date: 'string',
				status: 'string',
				priority: 'Low',
			}]);
		}

			showCreateTask(false);
	};


	return (
		<div className='createTask'>
			<form className='form-task'>
				<label>Task name</label>
				<Input
					minLength={2}
					type='text'
					placeholder='Enter task name'
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				/>
				<textarea
					value={description}
					placeholder='Enter description'
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
				/>
				<button type="button" className="buttonCreateTask" onClick={handleCreate}>
					Create Task
				</button>
			</form>
		</div>
	);
};

export default CreateTask;
