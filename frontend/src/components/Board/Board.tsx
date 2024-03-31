import React, { useState, useContext } from 'react';
import List from './components/List/List';
import type IList from './../../types/initData';
import { Context } from '../../context/context';
import './board.css';

// interface IList {
// 	title: string;
// 	// tasks?: Array<object>;
// 	// Add any other properties you need here
//   }
  
interface ChildrenProps {
	list: Array<IList>;
  }
  
  const Board: React.FC<ChildrenProps> = ({ list }) => {
	const { title, tasks } = useContext(Context);
	// const [lists, setLists] = useState<Array<IList>>(list);
	console.log(title);
	console.log(tasks);
  
	return (
	  <div className='Board'>
		{title.map((item: string, index: number) => (
		  <div className='Board-wrap' key={index}>
			<List list={item} />
		  </div>
		))}
	  </div>
	);
  };
  
  export default Board;