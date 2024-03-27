import React, { useState } from 'react';
import Input from '../../common/Input/Input.jsx';
import './createList.css';
import type IList from './../../types/initData';

interface ChildrenProps {
	showCreate:  (show: boolean) => void,
	addList:  (newList: IList[]) => void,
}
 
  
const CreateList: React.FC<ChildrenProps> = ({ showCreate, addList }) => {


	const [title, setTitle] = useState('');



	const handleCreate = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if(title){
			addList([{title,}]);
		}

			showCreate(false);
	};


	return (
		<div className='createList'>
			<form className='form-create'>
				<label>Task list</label>
				<Input
					minLength={2}
					type='text'
					placeholder='Enter list name'
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				<button type="button" className="buttonCreateList" onClick={handleCreate}>
					Create List
				</button>
			</form>
		</div>
	);
};

export default CreateList;
