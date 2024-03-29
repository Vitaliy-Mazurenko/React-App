import React, { useState } from 'react';
import './list.css';
import threeDots from "../../../../assets/icons/three_dots_vertical.svg";
import Button from '../../../../common/Button/Button';
import CreateTask from '../../../CreateTask/CreateTask';
// import type IList from '../../../../types/initData';

interface ITask {
	title: string;
	description?: string;
	date: string;
	status: string;
	priority: 'Low' | 'Medium' | 'High'; 
}

interface IList {
	title: string;
	tasks?: Array<ITask>;
  }

interface childrenProps {
	list: IList;
}
 
const List = ({
	 list 
  }: childrenProps) => {
	const [task, setTask] = useState<IList[]>([list]);
	const [showTask, setShowCreateTask] = useState(false);
	console.log(list);

	const showCreateTask = (hide: boolean) => {
		setShowCreateTask(hide);
	};

	const addTask = (newTask: ITask) => {
		console.log(newTask);
		if(list && list.tasks){
			setTask([...list.tasks, newTask]);
		}
	};

	return (
		<>
		<div className='List'>
			<div className="List-header">
				<span>{ list.title }</span>
			<span className="wrap-header">
				<span>text</span>
			<img src={threeDots} alt="dots" />
			</span>
			</div>
		
		</div>
		<Button
			id='btn-create'
			text='Add new card'
			onClick={() => showCreateTask(true)}
			/>
		{showTask && (
			<CreateTask
    	    showCreateTask={showCreateTask}
    	  />
		)}	
		</>
	);
};

export default List;
