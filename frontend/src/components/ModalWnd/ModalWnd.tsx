import React, { useState, useContext } from 'react';
import { Context } from '../../context/context';
import './modalWnd.css';

  
interface ChildrenProps {
	call: boolean;
	onDestroy: () => void;
  }
  
  const ModalWnd: React.FC<ChildrenProps> = ({ call, onDestroy }) => {
	const { title, tasks } = useContext(Context);
	console.log(title);
	console.log(tasks);

	if(!call) {
		return null;
	}
  
	return (
	  <div className='ModalWnd'>
		<div className='Modal-wrap'>
		<div className='Modal-header'>
			<i className='close'  onClick={onDestroy}>&times;</i>
		</div>


		  <div className='Modal-content'>
			<span>&bull;</span>
			{title}

		  </div>
		  </div>

	  </div>
	);
  };
  
  export default ModalWnd;