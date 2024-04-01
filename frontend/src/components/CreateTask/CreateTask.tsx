import React, { useState, useContext } from 'react';
import Input from '../../common/Input/Input.jsx';
import './createTask.css';
// import type ITask from './../../types/initTask';
import { Context } from './../../context/context';
import dateGenerator from '../../helpers/dateGenerator';

// interface ITask {
// 	title: string;
//     name: string;
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
	const [checkFields, setCheckFields] = useState({
		checkName: '',
		checkDescription: '',
		checkPriority: '',
	});
	const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>();
	const priorityData  = ['Low', 'Medium', 'High'];
	console.log(tasks);

	const handleCreate = (e: React.SyntheticEvent) => {
		e.preventDefault();
		let creationDate = dateGenerator(new Date());
		if (!title) {
			console.log(title);
			setCheckFields({
				...checkFields,
				checkName: 'Please, fill Task name',
			});
		} else if (!description) {
			setCheckFields({
				...checkFields,
				checkName: '',
				checkDescription: 'Please, fill description',
			});
		} else if (!priority) {
			setCheckFields({
				...checkFields,
				checkName: '',
				checkDescription: '',
				checkPriority: 'Please, fill priority',
			});
		} else {
			setTasks([{
				title: column,
				name: title,
				description: description,
				date: creationDate,
				status: 'string',
				priority: priority,
			}, ...tasks]);
			showCreateTask(false);
		}
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
					<span className='validate'>{checkFields.checkName}</span>
				<label>Description</label>
				<textarea
					value={description}
					placeholder='Enter description'
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
				/>
				<span className='validate'>{checkFields.checkDescription}</span>
				<select onChange={(e) => {setPriority(e.target.value as 'Low' | 'Medium' | 'High')}}>
				<option value=''>{'Enter priority'}</option>
					{priorityData.map((op, index)=><option key={index} value={op}>{op}</option>)}
				 </select>
				 <span className='validate'>{checkFields.checkPriority}</span>
				<button type="button" className="buttonCreateTask" onClick={handleCreate}>
					Create Task
				</button>
			</form>
		</div>
	);
};

export default CreateTask;
