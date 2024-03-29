import React, { useState } from 'react';
import List from './components/List/List';
import type IList from './../../types/initData';
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
	const [lists, setLists] = useState<Array<IList>>(list);
  
	return (
	  <div className='Board'>
		{lists.map((item: IList, index) => (
		  <div className='Board-list' key={index}>
			<List list={item} />
		  </div>
		))}
	  </div>
	);
  };
  
  export default Board;