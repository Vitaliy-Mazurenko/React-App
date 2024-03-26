import React, { useState } from 'react';
import List from './components/List/List.jsx';
import './board.css';

export default function Board({ list }) {
	const [lists, setListe] = useState(list);


	return (
		<div className='Board'>
			{lists.map((list) => (
				<div key={list.id}>
					<List list={list} />
				</div>
			))}
		</div>
	);
}
