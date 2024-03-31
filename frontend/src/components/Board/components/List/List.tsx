import React, { useState, useContext } from 'react';
import './list.css';
import threeDots from "../../../../assets/icons/three_dots_vertical.svg";
import Button from '../../../../common/Button/Button';
import CreateTask from '../../../CreateTask/CreateTask';
import Task from './components/Task/Task';
import { Context } from './../../../../context/context';
import type ITask from '../../../../types/initTask';

// interface ITask {
// 	title: string;
// 	description?: string;
// 	date: string;
// 	status: string;
// 	priority: 'Low' | 'Medium' | 'High'; 
// }

interface IList {
	title: string;
	tasks?: Array<ITask>;
  }

interface childrenProps {
	list: string;
}
 
const List = ({
	 list 
  }: childrenProps) => {
	// const [task, setTask] = useState<IList[]>([list]);
	const { tasks } = useContext(Context);
	const [showTask, setShowCreateTask] = useState(false);
	const listTasks =  tasks.filter((item) => item.title === list);
	console.log(list);
	console.log(listTasks);

	const showCreateTask = (hide: boolean) => {
		setShowCreateTask(hide);
	};


	return (
		<>
		<div className='List'>
			<div className="List-header">
				<span>{ list }</span>
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
			column={list}
    	  />
		)}
		{listTasks.map((item: ITask, index: number) => (
		  <div className='Task-list' key={index}>
			<Task task={item} />
		  </div>
		))}	
		</>
	);
};

export default List;
