import React, { useState, useContext } from 'react';
import './task.css';
import threeDots from "../../../../../../assets/icons/three_dots_vertical.svg";
// import Button from '../../../../../../common/Button/Button';
import { Context } from '../../../../../../context/context';
// import type IList from '../../../../types/initData';

interface ITask {
	title: string;
	name: string;
	description?: string;
	date: string;
	status: string;
	priority: 'Low' | 'Medium' | 'High'; 
}

interface childrenProps {
	task: ITask;
}
 
const Task = ({
	task 
  }: childrenProps) => {
	const { tasks } = useContext(Context);

	// const [showTask, setShowCreateTask] = useState(false);
	// console.log(tasks);

	// const showCreateTask = (hide: boolean) => {
	// 	setShowCreateTask(hide);
	// };


	return (
		<>
		<div className='Task'>
			<div className="Task-header">
				<span>{ task.name }</span>
			<span className="wrap-header">
	
			<img src={threeDots} alt="dots" />
			</span>
			</div>
			<div className="Task-description">{task.description}</div>
			<div className="Task-date">{task.date}</div>
		
		</div>
		</>
	);
};

export default Task;
