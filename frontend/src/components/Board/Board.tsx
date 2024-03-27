import React, { useState } from 'react';
import List from './components/List/List.jsx';
import type IList from './../../types/initData';
import './board.css';

interface childrenProps {
	list: Array<IList>,
}
 
const Board = ({
	 list 
  }: childrenProps) => {


	const [lists, setListe] = useState(list);


	return (
		<div className='Board'>
			{lists.map((list, index) => (
				<div key={index}>
					<List list={list} />
				</div>
			))}
		</div>
	);
}

export default Board;
