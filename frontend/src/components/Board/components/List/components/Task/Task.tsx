import React, { useState, useContext } from 'react';
import './task.css';
import threeDots from "../../../../../../assets/icons/three_dots_vertical.svg";
import Calendar from "../../../../../../assets/icons/calendar.svg";
import ModalWnd from '../../../../../../components/ModalWnd/ModalWnd';
import { Context } from '../../../../../../context/context';
import type ITask from '../../../../../../types/initTask';

// interface ITask {
// 	title: string;
// 	name: string;
// 	description?: string;
// 	date: string;
// 	status: string;
// 	priority: string;
// }

interface childrenProps {
	task: ITask;
}
 
const Task = ({
	task 
  }: childrenProps) => {
	const { tasks } = useContext(Context);

	const [modalState, setModalState] = useState(false);
	// console.log(tasks);


	return (
		<>
		<ModalWnd call={modalState} onDestroy={()=> setModalState(false)} task={task} />
		<div className='Task'>
			<div className="Task-header">
				<span>{ task.name }</span>
			<span className="wrap-header" onClick={() => setModalState(true)}>	
			<img src={threeDots} alt="dots" />
			</span>
			</div>
			<div className="Task-description">{task.description}</div>
			<div className="Task-date">
			<img className="Task-calendar" src={Calendar} alt="calendar" />
				{task.date}</div>
			<span className="Task-priority">
			<span>&bull;</span>
				{task.priority}</span>
		
		</div>
		</>
	);
};

export default Task;
