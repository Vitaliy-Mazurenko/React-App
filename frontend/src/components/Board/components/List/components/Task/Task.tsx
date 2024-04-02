import React, { useState, useContext } from 'react';
import './task.css';
import threeDots from "../../../../../../assets/icons/three_dots_vertical.svg";
import Calendar from "../../../../../../assets/icons/calendar.svg";
import ModalWnd from '../../../../../../components/ModalWnd/ModalWnd';
import { Context } from '../../../../../../context/context';
// import type IList from '../../../../types/initData';

interface ITask {
	title: string;
	name: string;
	description?: string;
	date: string;
	status: string;
	priority: string;
}

interface childrenProps {
	task: ITask;
}
 
const Task = ({
	task 
  }: childrenProps) => {
	const { tasks } = useContext(Context);

	const [modalState, setModalState] = useState(false);
	// console.log(tasks);

	// const showCreateTask = (hide: boolean) => {
	// 	setShowCreateTask(hide);
	// };




	return (
		<>
		<ModalWnd call={modalState} />
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
			<div className="Task-priority">{task.priority}</div>
		
		</div>
		</>
	);
};

export default Task;
