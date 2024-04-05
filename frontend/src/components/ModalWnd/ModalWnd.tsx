import React, { useState, useContext } from 'react';
import { Context } from '../../context/context';
import type ITask from '../../types/initTask';
import './modalWnd.css';
import editIcon from "../../assets/icons/edit_icon.svg";
import status_icon from "../../assets/icons/status_icon.svg";
import calendar from "../../assets/icons/calendar-event.svg";
import priority from "../../assets/icons/priority.svg";
  
interface ChildrenProps {
	call: boolean;
	onDestroy: () => void;
	task: ITask;
  }
  
  const ModalWnd: React.FC<ChildrenProps> = ({ call, onDestroy, task }) => {
	const { title, tasks } = useContext(Context);
	console.log(title);
	console.log(tasks);
	console.log(task);

	if(!call) {
		return null;
	}

	const closeWnd = (e: React.BaseSyntheticEvent) => {
		if(e.target.className === 'ModalWnd'){
			onDestroy();
		}
	}
  
	return (
	  <div className='ModalWnd' onClick={closeWnd}>
		<div className='Modal-wrap'>
		<div className='Modal-header'>
			<i className='close' onClick={onDestroy}>&times;</i>
		</div>
		<div className='Modal-content'>
		<div className='Modal-edit-content'>
		<div className='Modal-header-content'>
		<h3 className='Modal-task-name'>{task.name}</h3>
		<button className='Edit-task button'>
        <img src={editIcon} alt="arrow" />
         Edit task</button>
		</div>
		<div className='Modal-task-title'>
		<img src={status_icon} alt="arrow" />
			{task.title}</div>
		<div className='Modal-task-title'>
		<img src={calendar} alt="arrow" />
			{task.date}</div>
		<div className='Modal-task-title'>
		<img src={priority} alt="arrow" />
			{task.priority}</div>
			<div className='Modal-task-description'>
			Description
			<div>{task.description}</div>
			</div>
		</div>
		<div className='Modal-activity'>
		<span>&bull;</span>
		</div>


		</div>

			
		  </div>

	  </div>
	);
  };
  
  export default ModalWnd;