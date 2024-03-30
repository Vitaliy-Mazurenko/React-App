import React, { useState, useContext } from 'react';
import Input from '../../common/Input/Input.jsx';
import './createList.css';
import type IList from './../../types/initData';
import { Context } from './../../context/context';

interface ChildrenProps {
	showCreate:  (show: boolean) => void,
	addList:  (newList: IList[]) => void,
}
 
  
const CreateList: React.FC<ChildrenProps> = ({ showCreate, addList }) => {
	const { title, setTitle } = useContext(Context);
	const [ newTitle, setNewTitle] = useState('');



	const handleCreate = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if(title){
			// addList([{title}]);
			setTitle([...title, newTitle]);
		}

			showCreate(false);
	};

	console.log(title);
	return (
		<div className='createList'>
			<form className='form-create'>
				<label>Task list</label>
				<Input
					minLength={2}
					type='text'
					placeholder='Enter list name'
					value={newTitle}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
					/>
				<button type="button" className="buttonCreateList" onClick={handleCreate}>
					Create List
				</button>
			</form>
		</div>
	);
};

export default CreateList;
