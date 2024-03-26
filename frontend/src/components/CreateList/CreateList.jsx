import React, { useState, useEffect } from 'react';
import './createList.css';

function CreateList({ showCreate, list }) {
	const [title, setTitle] = useState('');



	const handleCreate = (e) => {
		e.preventDefault();

			showCreate(false);
	};


	return (
		<div className='createList'>
			<form className='form-create'>
				<label>Title</label>
				<input type="text" />
			</form>
		</div>
	);
}

export default CreateList;
