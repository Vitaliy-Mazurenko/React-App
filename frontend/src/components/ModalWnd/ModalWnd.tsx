import React, { useState, useContext } from 'react';
import { Context } from '../../context/context';
import './modalWnd.css';

  
interface ChildrenProps {
	call: boolean;
  }
  
  const ModalWnd: React.FC<ChildrenProps> = ({ call }) => {
	const { title, tasks } = useContext(Context);
	console.log(title);
	console.log(tasks);

	if(!call) {
		return null;
	}
  
	return (
	  <div className='ModalWnd'>

		  <div className='Modal-wrap'>
			{title}

		  </div>

	  </div>
	);
  };
  
  export default ModalWnd;