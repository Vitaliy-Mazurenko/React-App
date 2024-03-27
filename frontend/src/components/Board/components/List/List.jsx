import React from 'react';
import './list.css';

const List = ({ list }) => {
	console.log(list);


	return (
		<div className='List'>
			{ list.title }
		</div>
	);
};

export default List;
